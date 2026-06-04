import pytest

pytestmark = pytest.mark.api


def test_health(api_client):
    response = api_client.get("/api/health")
    assert response.status_code == 200
    assert response.json() == {
        "status": "ok",
        "service": "alexey-qa-portfolio-api",
    }


def test_profile(api_client):
    response = api_client.get("/api/profile")
    body = response.json()

    assert response.status_code == 200
    assert body["name"] == ["Gapanuk", "Alexey"]
    assert len(body["contacts"]) == 4
    assert any(c["icon"] == "github" for c in body["contacts"])


def test_stats(api_client):
    response = api_client.get("/api/stats")
    body = response.json()

    assert response.status_code == 200
    assert len(body) == 6
    assert body[0]["value"] == "65%"


def test_progress(api_client):
    response = api_client.get("/api/progress")
    body = response.json()

    assert response.status_code == 200
    assert len(body) == 4
    assert body[0]["id"] == "smoke"
    assert body[0]["pct"] == 100


def test_memes(api_client):
    response = api_client.get("/api/memes")
    body = response.json()

    assert response.status_code == 200
    assert len(body) == 6
    assert {item["id"] for item in body} == {
        "vodka-tester",
        "bread-instructions",
        "thor-bugs",
        "test-cases",
        "documentation",
        "peaky-blinders",
    }


def test_portfolio_full_payload(api_client):
    response = api_client.get("/api/portfolio")
    body = response.json()

    assert response.status_code == 200
    for key in ("profile", "stats", "progress", "jobs", "skills", "memes", "footer"):
        assert key in body


def test_unknown_route_returns_404(api_client):
    response = api_client.get("/api/unknown")
    assert response.status_code == 404
    assert response.json() == {"error": "Not found"}
