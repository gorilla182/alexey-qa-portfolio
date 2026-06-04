import re

import pytest
from conftest import MEME_IDS, MEME_PATHS
from playwright.sync_api import Page, expect

pytestmark = pytest.mark.ui


def test_all_meme_thumbnails_visible(page: Page):
    page.get_by_test_id("meme-zone").scroll_into_view_if_needed()

    for meme_id in MEME_IDS:
        expect(page.get_by_test_id(f"meme-thumb-{meme_id}")).to_be_visible()


def test_lightbox_open_and_download(page: Page):
    page.get_by_test_id("meme-zone").scroll_into_view_if_needed()
    page.get_by_test_id("meme-thumb-vodka-tester").click()

    lightbox = page.get_by_test_id("meme-lightbox")
    expect(lightbox).to_be_visible()
    expect(lightbox.locator("img")).to_have_attribute(
        "src", re.compile(r"meme-vodka-tester\.png")
    )

    download = page.get_by_test_id("meme-download-btn")
    expect(download).to_be_visible()
    expect(download).to_have_attribute("download", "meme-vodka-tester.png")

    page.get_by_role("button", name="Закрыть предпросмотр").click()
    expect(lightbox).to_be_hidden()


def test_lightbox_closes_on_escape(page: Page):
    page.get_by_test_id("meme-zone").scroll_into_view_if_needed()
    page.get_by_test_id("meme-thumb-documentation").click()
    expect(page.get_by_test_id("meme-lightbox")).to_be_visible()

    page.keyboard.press("Escape")
    expect(page.get_by_test_id("meme-lightbox")).to_be_hidden()


@pytest.mark.parametrize("meme_id", MEME_IDS)
def test_meme_images_load(page: Page, meme_id: str):
    response = page.request.get(MEME_PATHS[meme_id])
    assert response.status == 200
