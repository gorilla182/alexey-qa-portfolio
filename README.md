# Alexey Gapanuk — QA Portfolio

Одностраничная самопрезентация для HR: React + Vite.

**GitHub:** [github.com/gorilla182](https://github.com/gorilla182)  
**Автотесты:** [autotests/](autotests/) — Python + Pytest + Playwright

## Запуск локально

```bash
npm install
npm run dev
```

Откройте http://localhost:5173

## API (backend)

```bash
npm run server
```

- http://localhost:3001/api/health
- http://localhost:3001/api/portfolio

## Автотесты (Python)

```bash
npm run dev          # терминал 1
npm run server       # терминал 2

cd autotests
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
playwright install chromium
pytest -v
```

Подробнее: [autotests/README.md](autotests/README.md)

## Сборка

```bash
npm run build
npm run preview
```

## Контент

Все тексты и цифры — в `src/data/portfolio.js`.
