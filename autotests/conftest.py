import os

import httpx
import pytest
from playwright.sync_api import Page

UI_BASE_URL = os.getenv("UI_BASE_URL", "http://localhost:5173")
API_BASE_URL = os.getenv("API_BASE_URL", "http://localhost:3001")

MEME_IDS = [
    "vodka-tester",
    "bread-instructions",
    "thor-bugs",
    "test-cases",
    "documentation",
    "peaky-blinders",
]

MEME_PATHS = {
    "vodka-tester": "/memes/meme-vodka-tester.png",
    "bread-instructions": "/memes/meme-bread-instructions.png",
    "thor-bugs": "/memes/meme-thor-bugs.png",
    "test-cases": "/memes/meme-test-cases.png",
    "documentation": "/memes/meme-documentation.png",
    "peaky-blinders": "/memes/meme-peaky-blinders.png",
}


@pytest.fixture(scope="session")
def browser_context_args(browser_context_args):
    return {
        **browser_context_args,
        "base_url": UI_BASE_URL,
    }


@pytest.fixture(scope="session")
def api_client():
    with httpx.Client(base_url=API_BASE_URL, timeout=5.0) as client:
        yield client


@pytest.fixture(scope="session", autouse=True)
def require_running_services():
    ui_ok = False
    api_ok = False

    try:
        response = httpx.get(UI_BASE_URL, timeout=3.0)
        ui_ok = response.status_code == 200
    except httpx.HTTPError:
        ui_ok = False

    try:
        response = httpx.get(f"{API_BASE_URL}/api/health", timeout=3.0)
        api_ok = response.status_code == 200
    except httpx.HTTPError:
        api_ok = False

    if not ui_ok:
        pytest.skip(f"UI not running at {UI_BASE_URL}. Start: npm run dev")
    if not api_ok:
        pytest.skip(f"API not running at {API_BASE_URL}. Start: npm run server")


@pytest.fixture(autouse=True)
def ui_page_setup(request, page: Page):
    if request.node.get_closest_marker("ui") is None:
        return

    page.emulate_media(reduced_motion="reduce")
    page.goto("/")
