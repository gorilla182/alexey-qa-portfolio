# Autotests — Alexey QA Portfolio

Автотесты на **Python + Pytest + Playwright + httpx** для [портфолио-сайта](https://github.com/gorilla182/alexey-qa-portfolio).

Репозиторий: **https://github.com/gorilla182**

## Что покрыто

| Слой | Файл | Проверки |
|------|------|----------|
| API | `tests/test_api_portfolio.py` | health, profile, stats, progress, memes, 404 |
| UI | `tests/test_ui_portfolio.py` | секции, контакты, GitHub, метрики, прогресс |
| UI | `tests/test_ui_memes.py` | мемы, lightbox, скачивание, Escape |

## Установка

```bash
cd autotests
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
playwright install chromium
```

## Запуск

В двух терминалах из корня проекта:

```bash
# Терминал 1 — UI
npm run dev

# Терминал 2 — API
npm run server
```

Затем:

```bash
cd autotests
pytest -v
pytest -m api -v      # только backend
pytest -m ui -v       # только UI
```

## Переменные окружения

- `UI_BASE_URL` — по умолчанию `http://localhost:5173`
- `API_BASE_URL` — по умолчанию `http://localhost:3001`
