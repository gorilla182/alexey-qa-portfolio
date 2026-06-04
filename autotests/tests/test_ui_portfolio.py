import pytest
from playwright.sync_api import Page, expect

pytestmark = pytest.mark.ui


def test_main_sections_visible(page: Page):
    expect(page.get_by_test_id("portfolio-page")).to_be_visible()
    expect(page.get_by_test_id("hero-section")).to_be_visible()
    expect(page.get_by_role("heading", name="Gapanuk")).to_be_visible()
    expect(page.get_by_text("FULLSTACK QA AUTOMATION ENGINEER")).to_be_visible()

    expect(page.get_by_role("heading", name="цифры говорят сами за себя")).to_be_visible()
    expect(page.get_by_test_id("stats-section")).to_be_visible()
    expect(page.get_by_role("heading", name="покрытие и автоматизация")).to_be_visible()
    expect(page.get_by_test_id("progress-section")).to_be_visible()
    expect(page.get_by_test_id("meme-zone")).to_be_visible()
    expect(page.get_by_test_id("footer")).to_be_visible()


def test_contact_links(page: Page):
    telegram = page.get_by_role("link", name="@lumos_maximuzz")
    email = page.get_by_role("link", name="alexey.py.eng@gmail.com")
    github = page.get_by_role("link", name="github.com/gorilla182")

    expect(telegram).to_have_attribute("href", "https://t.me/lumos_maximuzz")
    expect(email).to_have_attribute("href", "mailto:alexey.py.eng@gmail.com")
    expect(github).to_have_attribute("href", "https://github.com/gorilla182")


def test_stats_final_values(page: Page):
    stats = page.get_by_test_id("stats-section")
    page.get_by_test_id("stats-section").scroll_into_view_if_needed()

    expect(stats.get_by_text("65%", exact=True)).to_be_visible()
    expect(stats.get_by_text("5k", exact=True)).to_be_visible()
    expect(stats.get_by_text("8 мин", exact=True)).to_be_visible()
    expect(stats.get_by_text("1200", exact=True)).to_be_visible()


def test_progress_final_values(page: Page):
    page.get_by_test_id("progress-section").scroll_into_view_if_needed()

    expect(page.get_by_test_id("progress-item-smoke")).to_contain_text("100%")
    expect(page.get_by_test_id("progress-item-api-regress")).to_contain_text("65%")
    expect(page.get_by_test_id("progress-item-auto-manual")).to_contain_text("70% auto")
