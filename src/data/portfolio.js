export const profile = {
  name: ['Gapanuk', 'Alexey'],
  role: '// FULLSTACK QA AUTOMATION ENGINEER · PYTHON',
  tagline: [
    '3.5 года ломаю высоконагруженные e-commerce системы',
    'до того, как это сделают пользователи.',
  ],
  taglineEmphasis:
    'Тестирую не только то, что написано в требованиях — нахожу то, что в них не написали.',
  badges: [
    { text: 'открыт к офферам', variant: 'green', pulse: true },
    { text: '3.5 года опыта', variant: 'teal' },
    { text: 'Москва / Remote', variant: 'amber' },
  ],
  contacts: [
    {
      label: '@lumos_maximuzz',
      href: 'https://t.me/lumos_maximuzz',
      icon: 'telegram',
    },
    {
      label: 'alexey.py.eng@gmail.com',
      href: 'mailto:alexey.py.eng@gmail.com',
      icon: 'mail',
    },
    {
      label: 'github.com/gorilla182',
      href: 'https://github.com/gorilla182',
      icon: 'github',
    },
    { label: '+7 930 359-18-51', icon: 'phone' },
  ],
};

export const highlight = {
  icon: '🤌',
  title: 'CEO of нашёл баг до прода.',
  text: 'Smoke упал — деплой не прошёл. Разработчик расстроен. Пользователи счастливы. QA спит спокойно.',
};

export const stats = [
  { value: '65%', label: 'API-регресс автоматизирован (было 30%)' },
  { value: '5k', label: 'RPS пиковая нагрузка на боевом API' },
  { value: '8 мин', label: 'smoke-прогон (60 тестов параллельно)' },
  { value: '1200', label: 'тест-кейсов в полном регрессе' },
  { value: '40+', label: 'тест-кейсов с нуля для B2B' },
  { value: '5M+', label: 'SKU — масштаб системы' },
];

export const progress = [
  { id: 'smoke', label: 'Smoke — автоматизация', pct: 100, suffix: '%' },
  { id: 'api-regress', label: 'API-регресс — автоматизация', pct: 65, suffix: '%' },
  { id: 'auto-manual', label: 'Auto / Manual соотношение', pct: 70, suffix: '% auto' },
  {
    id: 'backend-frontend',
    label: 'Backend / Frontend фокус',
    pct: 70,
    suffix: '% backend',
    color: '#EF9F27',
  },
];

export const jobs = [
  {
    title: 'QA Automation Engineer',
    company: 'Все Инструменты.РУ · Личный кабинет B2B/B2C',
    period: 'ноя 2023 —\nсейчас',
    bullets: [
      'AQA инфраструктура с нуля: Pytest + Playwright + Pydantic + Allure + GitLab CI/CD',
      'Smoke блокирует деплой → разработчик не задеплоит сломанный код в 3 ночи',
      'Автоматизировал E2E checkout (8 шагов) — ручной регресс −30%',
      'Kafka consumer инцидент: нашёл, локализовал, предложил фикс, внедрил практику',
      'Обучил стажёра — теперь сам пишет тесты и не спрашивает каждые 5 минут',
    ],
  },
  {
    title: 'QA Manual Engineer',
    company: 'Все Инструменты.РУ · АРМ — внутренняя операционная платформа',
    period: 'окт 2022 —\nноя 2023',
    bullets: [
      'Тестировал платформу для тысяч пользователей: продажи, склад, ПВЗ',
      'Разработал Postman-коллекции, которые стали базой для дальнейшей автоматизации',
      'Smoke, функциональное, регрессионное и интеграционное тестирование в Scrumban',
    ],
  },
];

export const skills = [
  { name: 'Python', hot: true },
  { name: 'Pytest', hot: true },
  { name: 'Playwright', hot: true },
  { name: 'Postman / Newman', hot: true },
  { name: 'GitLab CI/CD', hot: true },
  { name: 'PostgreSQL', hot: true },
  { name: 'Apache Kafka', hot: true },
  { name: 'Docker' },
  { name: 'Allure' },
  { name: 'Swagger / OpenAPI' },
  { name: 'Pydantic' },
  { name: 'Grafana / Loki' },
  { name: 'pgAdmin' },
  { name: 'Jira / Confluence' },
  { name: 'TestIT' },
  { name: 'Charles Proxy' },
  { name: 'DevTools' },
  { name: 'REST API' },
  { name: 'SQL' },
  { name: 'Git' },
  { name: 'Bash' },
  { name: 'Agile / Scrumban' },
];

export const memes = [
  {
    id: 'vodka-tester',
    src: '/memes/meme-vodka-tester.png',
    filename: 'meme-vodka-tester.png',
    alt: 'Мем: тестирование водки в России — «Знаете, я тоже своего рода тестировщик»',
  },
  {
    id: 'bread-instructions',
    src: '/memes/meme-bread-instructions.png',
    filename: 'meme-bread-instructions.png',
    alt: 'Мем: тестировщик читает инструкцию разработчика — достаньте 2 куска белого хлеба из пакета',
  },
  {
    id: 'thor-bugs',
    src: '/memes/meme-thor-bugs.png',
    filename: 'meme-thor-bugs.png',
    alt: 'Мем: когда тестировщик нашёл кучу багов — разработчик vs тестировщик из Тора',
  },
  {
    id: 'test-cases',
    src: '/memes/meme-test-cases.png',
    filename: 'meme-test-cases.png',
    alt: 'Мем: тестировщик требует тест-кейсы и отчёт по тестированию',
  },
  {
    id: 'documentation',
    src: '/memes/meme-documentation.png',
    filename: 'meme-documentation.png',
    alt: 'Мем: новичок спрашивает про документацию — тимлид: «Я и есть документация»',
  },
  {
    id: 'peaky-blinders',
    src: '/memes/meme-peaky-blinders.png',
    filename: 'meme-peaky-blinders.png',
    alt: 'Мем: тестировщик сломает код — разработчик: он и не работал',
  },
];

export const education = {
  icon: '🎓',
  text: 'Ивановский государственный политехнический университет, 2022',
  subtext: 'Информационные системы и технологии · Программная инженерия',
};

export const footer = {
  updated: 'Резюме обновлено 1 июня 2026 · Москва / Remote',
  tagline: '// тесты написаны. CI зелёный. можно нанимать.',
};
