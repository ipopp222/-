const scenarios = [
  {
    id: 'document', number: '01', category: 'Документы', title: 'Найти актуальный документ',
    description: 'НПА, форма, инструкция, чек-лист или шаблон.',
    short: 'Определите вид документа и направление. Используйте только карточку с видимой датой проверки и владельцем.',
    steps: ['Выберите вид документа и направление.', 'Уточните дату, на которую он нужен.', 'Откройте карточку и проверьте источник.', 'Сверьте дату актуализации и версию.', 'Если срок проверки истек, не используйте файл и сообщите владельцу.'],
    checklist: ['Название совпадает с задачей', 'Указан первоисточник', 'Дата проверки не истекла'],
    human: 'Документ отсутствует, найдено несколько противоречащих версий или требуется толкование нормы.'
  },
  {
    id: 'letter', number: '02', category: 'Документы', title: 'Подготовить официальное письмо',
    description: 'Запрос, ответ, информационное или сопроводительное письмо.',
    short: 'Сначала определите цель и адресата, затем выберите утвержденный шаблон и маршрут согласования.',
    steps: ['Сформулируйте ожидаемый результат письма.', 'Укажите адресата и основание.', 'Откройте подходящий утвержденный шаблон.', 'Заполните тему, основную часть и срок ответа.', 'Проверьте приложения и реквизиты.', 'Передайте проект на согласование.'],
    checklist: ['Адресат выбран верно', 'Просьба сформулирована конкретно', 'Сроки и приложения проверены'],
    human: 'Письмо содержит правовую позицию, финансовые обязательства, персональные данные или спорный ответ.'
  },
  {
    id: 'report', number: '03', category: 'Отчетность', title: 'Заполнить отчет или таблицу',
    description: 'Показатели, отчетная форма или сводная таблица.',
    short: 'Используйте актуальную форму и сначала проверьте период, единицы измерения и источник каждого показателя.',
    steps: ['Откройте актуальную форму и инструкцию.', 'Зафиксируйте период, срок и получателя.', 'Соберите данные из разрешенных источников.', 'Проверьте формулы, единицы измерения и итоги.', 'Сопоставьте данные с предыдущим периодом.', 'Передайте результат на внутреннюю проверку.'],
    checklist: ['Период указан верно', 'Обязательные поля заполнены', 'Итоги сходятся'],
    human: 'Показатели противоречат друг другу, изменилась методика или форма содержит персональные сведения.'
  },
  {
    id: 'event', number: '04', category: 'Мероприятия', title: 'Организовать мероприятие',
    description: 'Встреча, образовательная или добровольческая активность.',
    short: 'Начните с результата для молодежи, ответственного и ограничений, а не с афиши.',
    steps: ['Сформулируйте цель и измеримый результат.', 'Определите целевую группу и формат.', 'Назначьте ответственного и распределите роли.', 'Подготовьте план, бюджет и площадку.', 'Проверьте безопасность и согласования.', 'Организуйте регистрацию и информирование.', 'Соберите обратную связь и отчет.'],
    checklist: ['Цель измерима', 'Роли распределены', 'Риски и согласования учтены'],
    human: 'Есть вопросы безопасности, несовершеннолетние, договоры, закупки или финансовые обязательства.'
  },
  {
    id: 'project', number: '05', category: 'Проекты', title: 'Подготовить информацию о проекте',
    description: 'Справка, презентация, описание проекта или программы.',
    short: 'Определите получателя и цель материала, затем используйте только проверенные показатели и формулировки.',
    steps: ['Уточните запрос, формат и срок.', 'Откройте паспорт проекта или программы.', 'Выберите актуальный период.', 'Соберите цель, мероприятия, показатели и результат.', 'Отделите плановые данные от фактических.', 'Проверьте цифры у владельца данных.', 'Оформите и передайте материал на согласование.'],
    checklist: ['Название и период верны', 'План и факт разделены', 'Цифры подтверждены'],
    human: 'Нужен официальный прогноз, изменение показателя или комментарий по невыполнению обязательств.'
  },
  {
    id: 'request', number: '06', category: 'Коммуникация', title: 'Ответить на обращение',
    description: 'Письмо организации, муниципалитета или партнера.',
    short: 'Проверьте регистрацию, компетенцию и срок, затем подготовьте ответ на каждый поставленный вопрос.',
    steps: ['Проверьте регистрацию и срок.', 'Выделите все вопросы автора.', 'Определите компетенцию и исполнителя.', 'Соберите подтвержденную информацию.', 'Подготовьте понятный проект ответа.', 'Проверьте полноту, согласуйте и направьте.'],
    checklist: ['Все вопросы учтены', 'Факты подтверждены', 'Срок соблюдается'],
    human: 'Обращение содержит жалобу, персональные данные, угрозу безопасности, правовой спор или запрос СМИ.'
  },
  {
    id: 'contact', number: '07', category: 'Коммуникация', title: 'Найти ответственного и контакт',
    description: 'Определить подразделение или специалиста по теме.',
    short: 'Выберите тему и уровень. Карточка должна показать функцию подразделения и подтвержденный рабочий контакт.',
    steps: ['Выберите тему вопроса.', 'Укажите региональный или муниципальный уровень.', 'Определите цель обращения.', 'Откройте карточку подразделения.', 'Используйте подтвержденный рабочий канал.', 'Опишите вопрос без чувствительных сведений.'],
    checklist: ['Тема и уровень определены', 'Контакт подтвержден', 'Вопрос не содержит чувствительных данных'],
    human: 'Компетенции пересекаются, ответственный не определен или вопрос требует решения руководителя.'
  },
  {
    id: 'term', number: '08', category: 'База знаний', title: 'Разобраться в термине',
    description: 'Расшифровка аббревиатуры или понятия.',
    short: 'Укажите термин и контекст. Сверьте расшифровку с источником перед использованием.',
    steps: ['Введите термин или аббревиатуру.', 'Выберите контекст применения.', 'Прочитайте краткое объяснение.', 'Откройте и проверьте источник.', 'Если значений несколько, уточните у владельца направления.'],
    checklist: ['Расшифровка соответствует контексту', 'Источник указан', 'Изучен полный документ'],
    human: 'Термин отсутствует, имеет противоречащие значения или влияет на правовое или финансовое решение.'
  },
  {
    id: 'revision', number: '09', category: 'Развитие', title: 'Материал вернули на доработку',
    description: 'Разобрать замечания и подготовить новую версию.',
    short: 'Не исправляйте отдельные слова вслепую. Сначала определите тип и причину ошибки.',
    steps: ['Сохраните исходную версию.', 'Разделите замечания по типам.', 'Найдите правило или актуальную карточку.', 'Исправьте каждое замечание.', 'Проведите повторную самопроверку.', 'При неясности уточните у проверяющего.', 'Передайте новую версию с перечнем изменений.'],
    checklist: ['Все замечания учтены', 'Причина ошибки понятна', 'Версия файла обозначена'],
    human: 'Требования противоречат источнику или ошибка может повлиять на права, сроки и финансы.'
  },
  {
    id: 'complex', number: '10', category: 'Помощь', title: 'Задать сложный вопрос',
    description: 'Ситуация вне типового алгоритма.',
    short: 'Бот не принимает окончательное решение, а помогает безопасно подготовить вопрос для человека.',
    steps: ['Выберите тему.', 'Отметьте уже просмотренные карточки.', 'Кратко опишите ожидаемый результат.', 'Не прикладывайте документы и чувствительные данные.', 'Укажите срок.', 'Выберите специалиста и рабочий канал.'],
    checklist: ['Ожидаемый результат понятен', 'Срок указан', 'Чувствительных данных нет'],
    human: 'Всегда. Окончательное решение принимает ответственный сотрудник или руководитель.'
  }
];

const stages = [
  { day: '1', title: 'Первый день', text: 'Роль, правила безопасности, руководитель, наставник и доступы.' },
  { day: '7', title: 'Первая неделя', text: 'Структура отрасли, задачи подразделения, контакты и первая типовая задача.' },
  { day: '30', title: 'Первый месяц', text: 'Письма, отчетность, мероприятия, встреча с руководителем и обратная связь.' },
  { day: '60', title: 'Самостоятельная работа', text: 'Типовая задача без незапланированной помощи и разбор ошибок.' },
  { day: '90', title: 'Итог адаптации', text: 'Практическое задание, оценка самостоятельности и план развития.' }
];

const tasks = [
  { id: 'role', title: 'Выбрать место работы и этап', text: 'Настроить персональный маршрут', tag: 'Старт' },
  { id: 'contacts', title: 'Сохранить контакты руководителя и наставника', text: 'Уточнить рабочий канал связи', tag: 'День 1' },
  { id: 'goals', title: 'Узнать три задачи подразделения', text: 'Коротко обсудить с руководителем', tag: 'День 3' },
  { id: 'mentor', title: 'Провести встречу с наставником', text: 'Собрать вопросы первой недели', tag: 'День 5' },
  { id: 'check', title: 'Пройти проверку первой недели', text: 'Оценить готовность к типовым задачам', tag: 'День 7' }
];

const knowledge = [
  { icon: '§', title: 'Нормативная база', text: 'Актуальные НПА и официальные источники' },
  { icon: '▤', title: 'Шаблоны', text: 'Письма, отчеты, планы и чек-листы' },
  { icon: 'А', title: 'Глоссарий', text: 'Термины и аббревиатуры отрасли' },
  { icon: '◎', title: 'Структура отрасли', text: 'Организации, функции и взаимодействие' },
  { icon: '↗', title: 'Проекты и программы', text: 'Паспорта, показатели и материалы' },
  { icon: '☎', title: 'Рабочие контакты', text: 'Владельцы направлений и компетенции' }
];

const ministryDepartments = [
  'Отдел развития экосистемы молодежной политики и поддержки молодежных инициатив',
  'Отдел реализации проектов и программ в сфере молодежной политики',
  'Финансово-экономический отдел',
  'Отдел правового обеспечения, государственной гражданской службы и кадров',
  'Отдел информационной, аналитической работы и цифровизации',
  'Отдел по информационному освещению',
  'Отдел патриотического воспитания и развития добровольческой деятельности',
  'Отдел документооборота, контроля и обращений граждан'
];

const municipalDepartments = [
  ['Антрацитовский муниципальный округ', 'Отдел молодежной политики и спорта'],
  ['Беловодский муниципальный округ', 'Отдел спорта и молодежной политики'],
  ['Белокуракинский муниципальный округ', 'Отдел культуры, молодежи и спорта'],
  ['Краснодонский муниципальный округ', 'Отдел спорта и молодежи'],
  ['Кременской муниципальный округ', 'Отдел по культуре, делам молодежи, спорта и физической культуры'],
  ['Лутугинский муниципальный округ', 'Отдел молодежи, спорта и туризма'],
  ['Марковский муниципальный округ', 'Отдел культуры, спорта и религии'],
  ['Меловский муниципальный округ', 'Отдел культуры, спорта, молодежи и религии'],
  ['Новоайдарский муниципальный округ', 'Отдел по работе с молодежью, национальностями и делами религий'],
  ['Новопсковский муниципальный округ', 'Отдел культуры, молодежи, спорта и семейной политики'],
  ['Перевальский муниципальный округ', 'Отдел молодежи'],
  ['Сватовский муниципальный округ', 'Отдел культуры, молодежи и спорта'],
  ['Свердловский муниципальный округ', 'Отдел молодежной политики и спорта управления культуры, молодежи и спорта'],
  ['Славяносербский муниципальный округ', 'Отдел по работе с молодежью'],
  ['Станично-Луганский муниципальный округ', 'Отдел культуры, молодежи, спорта и дополнительного образования'],
  ['Старобельский муниципальный округ', 'Отдел культуры, спорта и молодежи'],
  ['Троицкий муниципальный округ', 'Отдел дополнительного образования, культуры, спорта и молодежи'],
  ['Городской округ город Луганск', 'Отдел по реализации молодежной политики'],
  ['Городской округ город Алчевск', 'Отдел молодежной политики'],
  ['Городской округ город Брянка', 'Отдел молодежи и спорта'],
  ['Городской округ город Кировск', 'Отдел по физической культуре, спорту, туризму и молодежной политике'],
  ['Городской округ город Красный Луч', 'Отдел молодежи и спорта'],
  ['Городской округ город Лисичанск', 'Отдел молодежи и спорта'],
  ['Городской округ город Первомайск', 'Отдел культуры, молодежи и спорта'],
  ['Городской округ город Ровеньки', 'Отдел молодежной политики'],
  ['Городской округ город Рубежное', 'Отдел культуры, молодежной политики и спорта'],
  ['Городской округ город Северодонецк', 'Отдел молодежи и спорта'],
  ['Городской округ город Стаханов', 'Отдел спорта, молодежи и проектной деятельности']
];

const municipalInstitutions = [
  'МБУ «Алчевский молодежный центр»',
  'МБУ «Стахановский многофункциональный молодежный центр «РЕКОРД»',
  'МБУ «Луганский городской молодежный центр «Юность»',
  'МБУ «Центр молодежных инициатив «Гравитация»'
];

const plannedYouthCenters = ['город Первомайск', 'город Ровеньки', 'город Кировск', 'Белокуракинский муниципальный округ'];

const youthSpaces = [
  'Многофункциональный молодежный центр в городе Свердловске',
  'Молодежное коворкинг-пространство «Наш центр» в Лутугино',
  'Молодежное пространство «Скрепка» в пгт Новоайдар'
];

const youthHousePhotos = [
  { src: 'Дом молодежи', title: 'Дом молодежи', text: 'Фасад учреждения' },
  { src: 'Дом молодежи 2', title: 'Образовательная площадка', text: 'Пространство для командной работы' },
  { src: 'Дом молодежи 3', title: 'Выставочная зона', text: 'Просветительские проекты' },
  { src: 'Дом молодежи 4', title: 'Интерактивная экспозиция', text: 'Современные мультимедийные форматы' }
];

const ADMIN_NAME = 'Инесса Артющенко';
const defaultState = { onboarded: false, name: '', workplace: '', stage: 'Первый день', completed: [], isAdmin: false, gameBest: 0, gameBlock: null, gameResults: {} };
let state = loadState();
let currentView = 'home';
let game = null;

const content = document.getElementById('appContent');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');

function loadState() {
  try { return { ...defaultState, ...JSON.parse(localStorage.getItem('digitalMentorState')) }; }
  catch { return { ...defaultState }; }
}

function saveState() {
  localStorage.setItem('digitalMentorState', JSON.stringify(state));
  updateProfile();
}

function completedCount() { return state.completed.length; }
function progress() { return Math.min(100, Math.round((completedCount() / tasks.length) * 20)); }

function updateProfile() {
  const name = state.name || 'Новый сотрудник';
  document.getElementById('profileName').textContent = name;
  document.getElementById('profileAvatar').textContent = name.trim().charAt(0).toUpperCase() || 'Н';
  document.getElementById('profileRole').textContent = state.workplace || 'Начало маршрута';
  document.getElementById('progressValue').textContent = `${progress()}%`;
  document.getElementById('progressBar').style.width = `${progress()}%`;
  document.getElementById('taskCount').textContent = tasks.length - completedCount();
  document.getElementById('adminLinkText').textContent = state.isAdmin ? 'Выйти из режима администратора' : 'Вход администратора';
  document.getElementById('adminBadge').classList.toggle('visible', state.isAdmin);
}

function setView(view) {
  currentView = view;
  document.querySelectorAll('[data-view]').forEach(button => button.classList.toggle('active', button.dataset.view === view));
  if (view === 'home') renderHome();
  if (view === 'route') renderRoute();
  if (view === 'situations') renderSituations();
  if (view === 'knowledge') renderKnowledge();
  if (view === 'tasks') renderTasks();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderHome() {
  const greeting = state.name ? `, ${escapeHtml(state.name.split(' ')[0])}` : '';
  content.innerHTML = `
    <section class="hero">
      <div class="hero-copy">
        <span class="eyebrow">Ваш маршрут адаптации</span>
        <h1>Добрый день${greeting}.</h1>
        <p>Я помогу найти проверенный следующий шаг, пройти первые 90 дней и понять, когда к задаче должен подключиться специалист.</p>
        <div class="hero-actions">
          <button class="primary-button" data-view="situations">Решить рабочую ситуацию</button>
          <button class="secondary-button" data-view="route">Открыть мой маршрут</button>
        </div>
      </div>
      <div class="hero-visual" aria-hidden="true">
        <div class="orbit"><span class="bot-face">ЦН</span><span class="orbit-dot one">7</span><span class="orbit-dot two">30</span><span class="orbit-dot three">90</span></div>
      </div>
    </section>
    <div class="section-head"><div><span class="eyebrow">Следующий шаг</span><h2>Сегодня в фокусе</h2><p>Короткие действия помогают быстрее войти в рабочий ритм.</p></div><button class="text-link" data-view="tasks">Все задания →</button></div>
    <div class="dashboard-grid">
      <article class="panel">
        <div class="panel-kicker">${state.stage}</div>
        <h3>${state.completed.includes('contacts') ? 'Узнайте задачи подразделения' : 'Познакомьтесь с руководителем и наставником'}</h3>
        <p>${state.completed.includes('contacts') ? 'Уточните три приоритетные задачи на текущий период и ожидаемый результат вашей работы.' : 'Сохраните подтвержденные рабочие контакты и договоритесь, как лучше задавать вопросы в период адаптации.'}</p>
        <ul class="check-list"><li>Используйте только рабочие каналы</li><li>Не передавайте через бот персональные данные</li><li>Зафиксируйте понятный следующий шаг</li></ul>
        <button class="primary-button" data-view="tasks">Перейти к заданию</button>
      </article>
      <article class="panel">
        <div class="panel-kicker">Быстрый доступ</div>
        <div class="quick-grid">
          <button class="quick-action" data-scenario="document"><span class="quick-icon">▤</span><b>Найти документ</b><small>Проверить источник и версию</small></button>
          <button class="quick-action" data-scenario="letter"><span class="quick-icon">↗</span><b>Подготовить письмо</b><small>Алгоритм и самопроверка</small></button>
          <button class="quick-action" data-scenario="term"><span class="quick-icon">А</span><b>Понять термин</b><small>Расшифровка в контексте</small></button>
          <button class="quick-action" data-action="expert"><span class="quick-icon">?</span><b>Спросить человека</b><small>Для нестандартной ситуации</small></button>
        </div>
      </article>
    </div>`;
}

function renderRoute() {
  const activeIndex = progress() >= 20 ? 1 : 0;
  content.innerHTML = `
    <div class="page-title"><div><span class="eyebrow">Персональная траектория</span><h1>Первые 90 дней</h1><p>Пять контрольных точек от знакомства до самостоятельной работы.</p></div><div class="route-summary"><b>${progress()}%</b><span>маршрута пройдено</span></div></div>
    <div class="timeline">${stages.map((stage, i) => `
      <article class="stage ${i < activeIndex ? 'done' : i === activeIndex ? 'active' : ''}">
        <div class="stage-dot">${stage.day}</div><div><h3>${stage.title}</h3><p>${stage.text}</p></div><span class="stage-status">${i < activeIndex ? 'Завершено' : i === activeIndex ? 'Сейчас' : `День ${stage.day}`}</span>
      </article>`).join('')}</div>`;
}

function renderSituations(filter = 'Все') {
  const categories = ['Все', ...new Set(scenarios.map(item => item.category))];
  const list = filter === 'Все' ? scenarios : scenarios.filter(item => item.category === filter);
  content.innerHTML = `
    <div class="page-title"><div><span class="eyebrow">Не ищите папку, выберите задачу</span><h1>Рабочие ситуации</h1><p>10 частых сценариев с понятным следующим шагом.</p></div></div>
    <div class="filter-row">${categories.map(item => `<button class="chip-button ${item === filter ? 'active' : ''}" data-filter="${item}">${item}</button>`).join('')}</div>
    <div class="cards-grid">${list.map(item => `
      <button class="situation-card" data-scenario="${item.id}"><span class="card-number">${item.number}</span><h3>${item.title}</h3><p>${item.description}</p><span class="card-arrow">↗</span></button>`).join('')}</div>`;
}

function renderKnowledge(query = '') {
  const normalized = query.trim().toLowerCase();
  const matches = normalized ? scenarios.filter(item => `${item.title} ${item.description} ${item.category}`.toLowerCase().includes(normalized)) : [];
  content.innerHTML = `
    <div class="page-title"><div><span class="eyebrow">Проверенные материалы</span><h1>База знаний</h1><p>Поиск по задаче, термину, документу или направлению.</p></div></div>
    <label class="search-box"><span>⌕</span><input id="knowledgeSearch" type="search" value="${escapeHtml(query)}" placeholder="Например: отчет, письмо, мероприятие" autocomplete="off"></label>
    ${normalized ? `<div class="result-list">${matches.length ? matches.map(item => `<button class="result-item" data-scenario="${item.id}"><span class="quick-icon">${item.number}</span><span><b>${item.title}</b><small>${item.description}</small></span></button>`).join('') : '<div class="empty">Ничего не найдено. Измените запрос или передайте вопрос специалисту.</div>'}</div>` : `<div class="knowledge-grid">${knowledge.map((item, index) => `<button class="knowledge-card" data-knowledge="${index}"><span class="quick-icon">${item.icon}</span><h3>${item.title}</h3><p>${item.text}</p><span class="card-arrow">↗</span></button>`).join('')}</div><div class="warning">В прототипе ссылки на региональные источники еще не утверждены. Материал без проверенного источника и даты не должен использоваться как основание для действия.</div>`}`;
  const input = document.getElementById('knowledgeSearch');
  input?.addEventListener('input', event => renderKnowledge(event.target.value));
  if (normalized) { input?.focus(); input?.setSelectionRange(query.length, query.length); }
}

function normalizeGlossaryText(value = '') {
  return String(value).toLowerCase().replace(/ё/g, 'е').replace(/\s+/g, ' ').trim();
}

function glossaryGroup(entry) {
  const first = entry.abbreviation.trim().charAt(0).toUpperCase();
  return /[A-ZА-ЯЁ]/.test(first) ? first.replace('Ё', 'Е') : '#';
}

function renderGlossary(query = '') {
  const normalized = normalizeGlossaryText(query);
  const matches = glossaryEntries.filter(entry => !normalized || [entry.abbreviation, entry.expansion, entry.explanation].some(value => normalizeGlossaryText(value).includes(normalized)));
  const groups = matches.reduce((result, entry) => {
    const key = glossaryGroup(entry);
    (result[key] ||= []).push(entry);
    return result;
  }, {});
  const groupMarkup = Object.entries(groups).map(([letter, entries]) => `<section class="glossary-group"><h2>${letter}</h2><div class="glossary-grid">${entries.map(entry => `<article class="glossary-card"><div class="glossary-abbreviation">${escapeHtml(entry.abbreviation)}</div><h3>${escapeHtml(entry.expansion)}</h3><p>${escapeHtml(entry.explanation)}</p></article>`).join('')}</div></section>`).join('');
  content.innerHTML = `
    <div class="page-title glossary-title"><div><button class="back-link" data-view="knowledge">← База знаний</button><span class="eyebrow">Справочник отрасли</span><h1>Глоссарий молодежной политики</h1><p>185 сокращений, расшифровок и пояснений из документа-источника.</p></div><button class="secondary-button dark" data-action="glossary-materials">Материалы раздела</button></div>
    <div class="glossary-toolbar"><label class="search-box"><span>⌕</span><input id="glossarySearch" type="search" value="${escapeHtml(query)}" placeholder="Например: ГМП, молодежный центр, НКО" autocomplete="off"></label><strong>${matches.length} ${matches.length === 1 ? 'результат' : matches.length < 5 ? 'результата' : 'результатов'}</strong></div>
    ${matches.length ? groupMarkup : '<div class="empty glossary-empty"><b>Ничего не найдено</b><span>Попробуйте изменить запрос или проверить написание слова.</span></div>'}`;
  const input = document.getElementById('glossarySearch');
  input?.addEventListener('input', event => renderGlossary(event.target.value));
  if (document.activeElement !== input && query) input?.focus();
  if (query && input) input.setSelectionRange(query.length, query.length);
}

function renderIndustryStructure() {
  content.innerHTML = `
    <div class="page-title industry-title"><div><button class="back-link" data-view="knowledge">← База знаний</button><span class="eyebrow">Интерактивная карта</span><h1>Структура отрасли</h1><p>Нажмите на любой элемент схемы, чтобы открыть состав и подробную информацию.</p></div><div class="industry-legend"><span><i class="legend-dot regional"></i>Региональный уровень</span><span><i class="legend-dot municipal"></i>Муниципальный уровень</span></div></div>
    <section class="industry-map" aria-label="Схема отрасли молодежной политики ЛНР">
      <div class="map-caption">Региональный орган исполнительной власти</div>
      <button class="industry-node ministry-node" data-industry="ministry"><span class="node-icon">МП</span><span class="node-copy"><small>Региональный уровень</small><b>Министерство молодежной политики ЛНР</b><em>Руководство и 8 отделов</em></span><span class="node-arrow">↗</span></button>
      <div class="map-connector main-connector" aria-hidden="true"></div>
      <button class="industry-node house-node" data-industry="youth-house"><span class="node-icon">ДМ</span><span class="node-copy"><small>Подведомственное учреждение</small><b>ГБУ МП ЛНР МЦ «Дом молодежи»</b><em>Структура отделов будет дополнена</em></span><span class="node-arrow">↗</span></button>
      <div class="ecosystem-divider"><span>Муниципальный и общественный уровни</span></div>
      <div class="industry-branches">
        <div class="municipal-chain"><button class="industry-node municipal-node" data-industry="municipal"><span class="node-icon">28</span><span class="node-copy"><small>Органы местного самоуправления</small><b>Структурные подразделения ОМСУ</b><em>28 городских и муниципальных округов</em></span><span class="node-arrow">↗</span></button><div class="map-connector local-connector" aria-hidden="true"></div><button class="industry-node centers-node" data-industry="institutions"><span class="node-icon">МЦ</span><span class="node-copy"><small>Подведомственны администрациям</small><b>Муниципальные учреждения молодежной политики</b><em>4 учреждения, новые центры и пространства</em></span><span class="node-arrow">↗</span></button></div>
        <button class="industry-node ngo-node" data-industry="ngo"><span class="node-icon">НКО</span><span class="node-copy"><small>Общественный сектор</small><b>Детские и молодежные НКО</b><em>Отдельный раздел для наполнения</em></span><span class="node-arrow">↗</span></button>
      </div>
      <div class="map-note"><b>Как читать схему</b><span>Вертикальные линии показывают прямую подведомственность. НКО представлены как самостоятельный общественный сектор отрасли.</span></div>
    </section>
    <div class="industry-stats"><div><b>1</b><span>региональное министерство</span></div><div><b>28</b><span>подразделений ОМСУ</span></div><div><b>4</b><span>действующих МБУ</span></div><div><b>3</b><span>пространства без юрлица</span></div></div>`;
}

function openIndustrySection(section) {
  const sections = {
    ministry: {
      eyebrow: 'Региональный уровень',
      title: 'Министерство молодежной политики ЛНР',
      lead: 'Региональный орган исполнительной власти в сфере молодежной политики.',
      body: `<div class="leadership-grid"><article class="leader-card primary"><img src="Голубович М.А..jpg" alt="Голубович Михаил Артемович"><div><span>Министр</span><b>Голубович<br>Михаил Артемович</b></div></article><article class="leader-card deputy"><img src="Поддубный Е.А..jpg" alt="Поддубный Евгений Александрович"><div><span>И. о. первого заместителя Министра</span><b>Поддубный<br>Евгений Александрович</b></div></article><article class="leader-card vacancy"><div class="leader-placeholder">ЗМ</div><div><span>Руководство Министерства</span><b>Заместитель<br>Министра</b></div></article></div><div class="management-row"><span>Главный специалист</span><span>Аудитор</span></div><h3 class="structure-heading">Структурные подразделения</h3><div class="department-grid">${ministryDepartments.map((department, index) => `<article><span>${String(index + 1).padStart(2, '0')}</span><b>${department}</b></article>`).join('')}</div>`,
      fileKey: 'industry:ministry'
    },
    'youth-house': {
      eyebrow: 'Подведомственное учреждение Министерства',
      title: 'ГБУ МП ЛНР МЦ «Дом молодежи»',
      lead: '',
      body: `<div class="youth-house-gallery">${youthHousePhotos.map((photo, index) => `<figure class="${index === 0 ? 'gallery-feature' : ''}" data-gallery-photo="${index}" tabindex="0" role="button" aria-label="Увеличить: ${photo.title}"><img src="${photo.src}" alt="${photo.title}, Дом молодежи"><figcaption><b>${photo.title}</b><span>${photo.text}</span></figcaption><i class="gallery-zoom" aria-hidden="true">＋</i></figure>`).join('')}</div><div class="future-structure"><span>ДМ</span><div><b>Раздел подготовлен к дальнейшему наполнению</b><p>Здесь можно разместить руководство, отделы, направления деятельности и рабочие контакты учреждения.</p></div></div>`,
      fileKey: 'industry:youth-house'
    },
    municipal: {
      eyebrow: 'Органы местного самоуправления',
      title: 'Структурные подразделения ОМСУ',
      lead: 'Подразделения администраций городских и муниципальных округов, ответственные за реализацию молодежной политики.',
      body: `<div class="municipal-list">${municipalDepartments.map(([area, department], index) => `<article><span>${String(index + 1).padStart(2, '0')}</span><div><b>${area}</b><p>${department}</p></div></article>`).join('')}</div>`,
      fileKey: 'industry:municipal'
    },
    institutions: {
      eyebrow: 'Муниципальная инфраструктура',
      title: 'Учреждения и молодежные пространства',
      lead: 'Муниципальные учреждения подведомственны администрациям соответствующих городских и муниципальных округов.',
      body: `<h3 class="structure-heading">Действующие муниципальные бюджетные учреждения</h3><div class="institution-list">${municipalInstitutions.map(item => `<article><span>МБУ</span><b>${item}</b></article>`).join('')}</div><h3 class="structure-heading">Планируется создание в 2027 году</h3><div class="planned-grid">${plannedYouthCenters.map(place => `<article><span>2027</span><b>Новый молодежный центр</b><p>${place}</p></article>`).join('')}</div><h3 class="structure-heading">Пространства без права юридического лица</h3><div class="space-list">${youthSpaces.map((item, index) => `<article><span>${index + 1}</span><b>${item}</b></article>`).join('')}</div>`,
      fileKey: 'industry:institutions'
    },
    ngo: {
      eyebrow: 'Общественный сектор',
      title: 'Детские и молодежные НКО',
      lead: 'Отдельный раздел отраслевой карты для детских и молодежных некоммерческих организаций.',
      body: '<div class="future-structure ngo-placeholder"><span>НКО</span><div><b>Структура будет добавлена отдельно</b><p>Раздел готов для размещения перечня организаций, направлений деятельности, руководителей и контактов.</p></div></div>',
      fileKey: 'industry:ngo'
    }
  };
  const item = sections[section];
  if (!item) return;
  modalContent.innerHTML = `<div class="modal-body structure-detail"><span class="eyebrow">${item.eyebrow}</span><h2>${item.title}</h2>${item.lead ? `<p class="modal-lead">${item.lead}</p>` : ''}${item.body}<div id="filesArea"></div></div>`;
  modal.classList.add('structure-modal');
  if (!modal.open) modal.showModal();
  renderFilesArea(item.fileKey, state.isAdmin, 'Материалы раздела');
}

function openYouthHousePhoto(index) {
  const activeIndex = (Number(index) + youthHousePhotos.length) % youthHousePhotos.length;
  const photo = youthHousePhotos[activeIndex];
  let viewer = document.getElementById('photoLightbox');
  if (!viewer) {
    viewer = document.createElement('div');
    viewer.id = 'photoLightbox';
    viewer.className = 'photo-lightbox';
    modal.appendChild(viewer);
  }
  viewer.dataset.index = activeIndex;
  viewer.innerHTML = `<button class="lightbox-close" data-gallery-close aria-label="Закрыть фотографию">×</button><button class="lightbox-arrow previous" data-gallery-nav="-1" aria-label="Предыдущая фотография">‹</button><figure><img src="${photo.src}" alt="${photo.title}, Дом молодежи"><figcaption><span>${activeIndex + 1} / ${youthHousePhotos.length}</span><b>${photo.title}</b><small>${photo.text}</small></figcaption></figure><button class="lightbox-arrow next" data-gallery-nav="1" aria-label="Следующая фотография">›</button>`;
  viewer.classList.add('open');
  modal.classList.add('photo-viewing');
}

function closePhotoLightbox() {
  document.getElementById('photoLightbox')?.classList.remove('open');
  modal.classList.remove('photo-viewing');
}

function renderTasks() {
  const blockNumber = getGameBlock();
  const bestResult = state.gameResults?.[blockNumber] || 0;
  content.innerHTML = `
    <div class="page-title"><div><span class="eyebrow">Контрольные действия</span><h1>Мои задания</h1><p>${completedCount()} из ${tasks.length} выполнено. Отметки хранятся только на этом устройстве.</p></div></div>
    <article class="game-banner"><div><span class="eyebrow">Интерактивная игра · Блок ${blockNumber + 1}</span><h2>«Маршрут решения»</h2><p>25 рабочих ситуаций, три варианта действий и один безопасный путь. Для специалистов подготовлено 10 разных тематических блоков.</p><span class="game-score">Лучший результат: ${bestResult} / 25</span></div><button class="primary-button" data-action="start-game">Начать игру</button></article>
    <div class="tasks-list">${tasks.map(task => {
      const done = state.completed.includes(task.id);
      return `<article class="task-card ${done ? 'done' : ''}" data-task-open="${task.id}"><button class="task-check" data-task="${task.id}" aria-label="${done ? 'Вернуть задание' : 'Отметить выполненным'}">${done ? '✓' : ''}</button><div><h3>${task.title}</h3><p>${task.text} · Открыть материалы →</p></div><span class="task-tag">${task.tag}</span></article>`;
    }).join('')}</div>`;
}

function openScenario(id) {
  const item = scenarios.find(scenario => scenario.id === id);
  if (!item) return;
  modalContent.innerHTML = `<div class="modal-body"><span class="eyebrow">Ситуация ${item.number} · ${item.category}</span><h2>${item.title}</h2><p class="modal-lead">${item.short}</p>
    <div class="meta-strip"><div><span>Статус</span><b>Прототип</b></div><div><span>Дата проверки</span><b>Не утверждена</b></div><div><span>Владелец</span><b>Требует назначения</b></div></div>
    <h3>Порядок действий</h3><ol class="steps">${item.steps.map(step => `<li>${step}</li>`).join('')}</ol>
    <h3>Проверьте себя</h3><ul class="check-list">${item.checklist.map(check => `<li>${check}</li>`).join('')}</ul>
    <div class="placeholder-link"><span><b>Утвержденный источник</b><br>Будет добавлен владельцем раздела</span><span>Ожидает проверки</span></div>
    <div class="warning"><b>Когда нужен человек:</b> ${item.human}</div>
    <div class="button-row"><button class="primary-button" data-feedback="helped">Карточка помогла</button><button class="secondary-button dark" data-action="expert" data-topic="${item.title}">Спросить специалиста</button></div><div id="filesArea"></div></div>`;
  modal.showModal();
  renderFilesArea(`scenario:${item.id}`, state.isAdmin, 'Материалы ситуации');
}

function openKnowledge(index) {
  const item = knowledge[index];
  if (!item) return;
  if (item.title === 'Глоссарий') return renderGlossary();
  if (item.title === 'Структура отрасли') return renderIndustryStructure();
  modalContent.innerHTML = `<div class="modal-body"><span class="eyebrow">База знаний</span><h2>${item.title}</h2><p class="modal-lead">${item.text}. Здесь собраны файлы и документы, добавленные администратором проекта.</p><div class="meta-strip"><div><span>Раздел</span><b>${item.title}</b></div><div><span>Доступ</span><b>Для специалистов</b></div><div><span>Редактирование</span><b>Только администратор</b></div></div><div class="warning">Перед использованием материала проверьте его дату, версию и утвержденный источник.</div><div id="filesArea"></div></div>`;
  modal.showModal();
  renderFilesArea(`knowledge:${index}`, state.isAdmin, `Документы: ${item.title}`);
}

function openGlossaryMaterials() {
  modalContent.innerHTML = '<div class="modal-body"><span class="eyebrow">Глоссарий молодежной политики</span><h2>Материалы раздела</h2><p class="modal-lead">Документы, приложенные администратором к реестру сокращений.</p><div id="filesArea"></div></div>';
  modal.showModal();
  renderFilesArea('knowledge:glossary', state.isAdmin, 'Материалы раздела');
}

function openTask(id) {
  const task = tasks.find(item => item.id === id);
  if (!task) return;
  const done = state.completed.includes(task.id);
  modalContent.innerHTML = `<div class="modal-body"><span class="eyebrow">${task.tag} · Практическое задание</span><h2>${task.title}</h2><p class="modal-lead">${task.text}. Изучите материалы и при необходимости приложите результат выполнения в любом формате.</p><div class="button-row"><button class="primary-button" data-task="${task.id}">${done ? 'Вернуть в работу' : 'Отметить выполненным'}</button></div><div id="filesArea"></div></div>`;
  modal.showModal();
  renderFilesArea(`task:${task.id}`, true, 'Материалы и результат задания', 'Добавить файл к заданию');
}

async function hashPin(value) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(digest)).map(byte => byte.toString(16).padStart(2, '0')).join('');
}

function openAdmin() {
  if (state.isAdmin) {
    modalContent.innerHTML = `<div class="modal-body"><span class="eyebrow">Режим администратора</span><h2>${ADMIN_NAME}</h2><p class="modal-lead">Вы можете добавлять и удалять материалы в рабочих ситуациях и базе знаний.</p><div class="warning">Файлы хранятся локально в этом браузере. Для общего доступа сотрудников потребуется серверное хранилище и защищенная авторизация.</div><button class="secondary-button dark" data-action="admin-logout">Выйти из режима</button></div>`;
    if (!modal.open) modal.showModal();
    return;
  }
  const hasPin = Boolean(localStorage.getItem('digitalMentorAdminPin'));
  modalContent.innerHTML = `<div class="modal-body"><span class="eyebrow">Аккаунт администратора</span><h2>${ADMIN_NAME}</h2><p class="modal-lead">${hasPin ? 'Введите локальный ПИН-код администратора.' : 'Это первый вход. Задайте локальный ПИН-код длиной не менее 4 символов.'}</p><form id="adminForm" class="form-grid"><label>ПИН-код<input name="pin" type="password" minlength="4" autocomplete="current-password" required></label>${hasPin ? '' : '<label>Повторите ПИН-код<input name="confirm" type="password" minlength="4" autocomplete="new-password" required></label>'}<div class="safety-note"><b>Прототип</b><span>ПИН действует только на этом устройстве и не заменяет серверную систему авторизации.</span></div><button class="primary-button" type="submit">${hasPin ? 'Войти' : 'Назначить администратора'}</button></form></div>`;
  if (!modal.open) modal.showModal();
  document.getElementById('adminForm').addEventListener('submit', async event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const pin = String(data.get('pin'));
    if (pin.length < 4) return showToast('ПИН-код должен содержать не менее 4 символов');
    const pinHash = await hashPin(pin);
    if (!hasPin) {
      if (pin !== String(data.get('confirm'))) return showToast('ПИН-коды не совпадают');
      localStorage.setItem('digitalMentorAdminPin', pinHash);
    } else if (pinHash !== localStorage.getItem('digitalMentorAdminPin')) {
      return showToast('Неверный ПИН-код');
    }
    state.isAdmin = true;
    saveState();
    modal.close();
    showToast(`Режим администратора включен: ${ADMIN_NAME}`);
  });
}

function logoutAdmin() {
  state.isAdmin = false;
  saveState();
  modal.close();
  showToast('Режим администратора выключен');
}

function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('digitalMentorFiles', 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      const store = db.createObjectStore('files', { keyPath: 'id' });
      store.createIndex('sectionKey', 'sectionKey', { unique: false });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function getFiles(sectionKey) {
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const request = db.transaction('files').objectStore('files').index('sectionKey').getAll(sectionKey);
    request.onsuccess = () => resolve(request.result.sort((a, b) => b.createdAt - a.createdAt));
    request.onerror = () => reject(request.error);
  });
}

async function storeFiles(sectionKey, fileList) {
  const files = Array.from(fileList);
  if (!files.length) return;
  if (files.some(file => file.size > 25 * 1024 * 1024)) return showToast('Один файл не должен превышать 25 МБ');
  const db = await openDatabase();
  const transaction = db.transaction('files', 'readwrite');
  files.forEach(file => transaction.objectStore('files').put({ id: `${Date.now()}-${crypto.randomUUID()}`, sectionKey, name: file.name, type: file.type || 'application/octet-stream', size: file.size, createdAt: Date.now(), uploader: state.isAdmin ? ADMIN_NAME : (state.name || 'Специалист'), blob: file }));
  await new Promise((resolve, reject) => { transaction.oncomplete = resolve; transaction.onerror = () => reject(transaction.error); });
  showToast(`Добавлено файлов: ${files.length}`);
  renderFilesArea(sectionKey, sectionKey.startsWith('task:') || state.isAdmin, document.querySelector('.files-head h3')?.textContent || 'Материалы');
}

async function deleteFile(id, sectionKey) {
  const db = await openDatabase();
  const transaction = db.transaction('files', 'readwrite');
  transaction.objectStore('files').delete(id);
  await new Promise((resolve, reject) => { transaction.oncomplete = resolve; transaction.onerror = () => reject(transaction.error); });
  showToast('Файл удален');
  renderFilesArea(sectionKey, sectionKey.startsWith('task:') || state.isAdmin, document.querySelector('.files-head h3')?.textContent || 'Материалы');
}

async function downloadFile(id) {
  const db = await openDatabase();
  const record = await new Promise((resolve, reject) => {
    const request = db.transaction('files').objectStore('files').get(id);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
  if (!record) return;
  const url = URL.createObjectURL(record.blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = record.name;
  anchor.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

async function renderFilesArea(sectionKey, canUpload, title = 'Материалы', uploadText = 'Добавить документы') {
  const area = document.getElementById('filesArea');
  if (!area) return;
  try {
    const files = await getFiles(sectionKey);
    area.innerHTML = `<section class="files-section"><div class="files-head"><h3>${escapeHtml(title)}</h3><span>${files.length} файл(ов)</span></div>${canUpload ? `<label class="upload-zone"><input type="file" data-file-upload="${sectionKey}" multiple><span><b>＋ ${uploadText}</b><small>Любые форматы · несколько файлов · до 25 МБ каждый</small></span></label>` : `<div class="admin-note">Добавлять и удалять материалы в этом разделе может только администратор ${ADMIN_NAME}.</div>`}<div class="file-list">${files.length ? files.map(file => `<div class="file-item"><span class="file-type">${fileExtension(file.name)}</span><span><b title="${escapeHtml(file.name)}">${escapeHtml(file.name)}</b><small>${formatBytes(file.size)} · ${escapeHtml(file.uploader)} · ${new Date(file.createdAt).toLocaleDateString('ru-RU')}</small></span><span class="file-actions"><button class="file-action" data-file-download="${file.id}" title="Скачать">↓</button>${canUpload ? `<button class="file-action delete" data-file-delete="${file.id}" data-section-key="${sectionKey}" title="Удалить">×</button>` : ''}</span></div>`).join('') : '<div class="no-files">В этом подразделе пока нет добавленных файлов</div>'}</div></section>`;
  } catch {
    area.innerHTML = '<div class="warning">Локальное хранилище файлов недоступно в этом браузере.</div>';
  }
}

function fileExtension(name) {
  const parts = name.split('.');
  return parts.length > 1 ? parts.pop().slice(0, 5) : 'file';
}

function formatBytes(bytes) {
  if (!bytes) return '0 Б';
  const units = ['Б', 'КБ', 'МБ', 'ГБ'];
  const index = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  return `${(bytes / 1024 ** index).toFixed(index ? 1 : 0)} ${units[index]}`;
}

const gameContexts = [
  { org: 'Министерстве молодежной политики', place: 'Луганске', document: 'сводной отчетности', event: 'регионального молодежного форума', project: '«Регион для молодых»', audience: 'муниципальных специалистов' },
  { org: 'муниципальном молодежном центре', place: 'Алчевске', document: 'плана ежемесячной работы', event: 'добровольческой акции', project: 'муниципальной программы', audience: 'волонтеров' },
  { org: 'органе местного самоуправления', place: 'Краснодоне', document: 'информационной справки', event: 'встречи с молодежными объединениями', project: 'молодежной инициативы', audience: 'представителей объединений' },
  { org: 'молодежном центре', place: 'Свердловске', document: 'таблицы показателей', event: 'образовательного интенсива', project: 'школы проектных команд', audience: 'молодых специалистов' },
  { org: 'проектном отделе', place: 'Луганской Народной Республике', document: 'паспорта регионального проекта', event: 'проектной сессии', project: 'регионального проекта', audience: 'проектных команд' },
  { org: 'отделе по работе с молодежью', place: 'Ровеньках', document: 'официального ответа', event: 'патриотической акции', project: 'цикла патриотических мероприятий', audience: 'обучающихся' },
  { org: 'муниципальном учреждении', place: 'Стаханове', document: 'календарного плана', event: 'молодежного фестиваля', project: 'творческой программы', audience: 'участников фестиваля' },
  { org: 'аналитическом подразделении', place: 'ЛНР', document: 'мониторингового отчета', event: 'стратегической встречи', project: 'системы мониторинга', audience: 'руководителей учреждений' },
  { org: 'центре добровольчества', place: 'Антраците', document: 'реестра участников', event: 'экологической акции', project: 'добровольческого проекта', audience: 'добровольцев' },
  { org: 'информационном отделе', place: 'Луганске', document: 'презентации о результатах', event: 'медиа-встречи', project: 'информационной кампании', audience: 'молодежной аудитории' }
];

function createQuestionBlock(context) {
  const prefix = `Ситуация в ${context.org}, ${context.place}:`;
  return [
    { question: `${prefix} найдены две версии ${context.document}. Что сделать первым?`, answers: ['Выбрать файл с более новой датой в названии', 'Проверить утвержденный источник, дату и владельца', 'Отправить обе версии руководителю'], correct: 1 },
    { question: `${prefix} официальное письмо требует правовой позиции. Как поступить?`, answers: ['Сформулировать позицию самостоятельно', 'Использовать старый ответ без проверки', 'Передать вопрос профильному специалисту'], correct: 2 },
    { question: `С чего начать подготовку ${context.event}?`, answers: ['С афиши и публикации', 'С цели и результата для целевой группы', 'С заказа сувениров'], correct: 1 },
    { question: `${prefix} материал вернули с непонятным замечанием. Ваш первый шаг?`, answers: ['Исправить формулировки наугад', 'Уточнить причину и найти правило', 'Удалить исходную версию'], correct: 1 },
    { question: `Какой файл нельзя загружать в «Цифрового наставника» при работе над ${context.project}?`, answers: ['Публичный чек-лист', 'Обезличенный шаблон', 'Файл с персональными или служебными сведениями'], correct: 2 },
    { question: `${prefix} итог в таблице не совпадает с первичными данными. Что делать?`, answers: ['Подогнать итог вручную', 'Проверить формулы, единицы и источники показателей', 'Оставить ячейку пустой'], correct: 1 },
    { question: `До отправки ${context.document} осталось два часа, а проверяющий недоступен. Что правильно?`, answers: ['Направить непроверенный файл', 'Скрыть сомнительные показатели', 'Зафиксировать риск и обратиться по установленному каналу замещения'], correct: 2 },
    { question: `${prefix} аббревиатура имеет два значения. Как выбрать нужное?`, answers: ['Выбрать более знакомое', 'Сверить контекст и утвержденный источник', 'Удалить аббревиатуру без уточнения'], correct: 1 },
    { question: `У карточки по ${context.project} истек срок актуальности. Можно ли ею пользоваться?`, answers: ['Да, если содержание выглядит убедительно', 'Да, с пометкой «возможно устарело»', 'Нет, нужно сообщить владельцу и найти проверенный источник'], correct: 2 },
    { question: `${prefix} неизвестно, кто отвечает за вопрос ${context.audience}. Что сделать?`, answers: ['Написать сразу всем подразделениям', 'Проверить матрицу компетенций и рабочие контакты', 'Передать вопрос случайному коллеге'], correct: 1 },
    { question: `Новый сотрудник впервые получил задачу по ${context.document}. Какой путь оптимален?`, answers: ['Сразу начать заполнять по памяти', 'Выбрать рабочую ситуацию, изучить алгоритм и источник', 'Ждать, пока коллега выполнит задачу'], correct: 1 },
    { question: `Что лучше обсудить с наставником после первой недели в ${context.org}?`, answers: ['Только список ошибок', 'Понятные шаги, трудности и готовность к самостоятельным задачам', 'Личные данные коллег'], correct: 1 },
    { question: `Как отличить цель ${context.event} от мероприятия?`, answers: ['Цель описывает изменение для людей, мероприятие — способ его достичь', 'Цель всегда равна числу участников', 'Между ними нет различия'], correct: 0 },
    { question: `В форму регистрации ${context.audience} включены лишние персональные поля. Ваше действие?`, answers: ['Собирать все данные на всякий случай', 'Сократить поля и согласовать допустимый состав данных', 'Перенести форму в другой файл без изменений'], correct: 1 },
    { question: `${prefix} поступил запрос вне компетенции подразделения. Что правильно?`, answers: ['Ответить по общему смыслу', 'Определить компетентного адресата и установленный порядок передачи', 'Оставить запрос без ответа'], correct: 1 },
    { question: `В справке по ${context.project} смешаны плановые и фактические данные. Как исправить?`, answers: ['Оставить только более высокий показатель', 'Разделить план и факт и подтвердить источники', 'Убрать обозначение периода'], correct: 1 },
    { question: `Какую обратную связь дать после использования карточки ${context.document}?`, answers: ['Только поставить положительную оценку', 'Указать полезность, ошибку или устаревание материала', 'Не оставлять обратную связь'], correct: 1 },
    { question: `Коллега просит переслать рабочий документ в личный мессенджер. Что сделать?`, answers: ['Переслать для экономии времени', 'Использовать только установленный безопасный рабочий канал', 'Разместить документ в общем чате'], correct: 1 },
    { question: `Как правильно назвать новую версию файла ${context.document}?`, answers: ['финал_точно_новый', 'Название, период, версия и дата по принятому правилу', 'Оставить исходное имя'], correct: 1 },
    { question: `На ${context.event} будут несовершеннолетние участники. Что обязательно?`, answers: ['Использовать обычный план без изменений', 'Проверить требования безопасности, данных и согласований', 'Только увеличить число волонтеров'], correct: 1 },
    { question: `${prefix} ситуация не описана ни в одной карточке. Что делать?`, answers: ['Попросить бот принять решение', 'Подготовить обезличенный вопрос и передать специалисту', 'Выбрать случайную похожую карточку'], correct: 1 },
    { question: `В презентации по ${context.project} есть непроверенная цифра. Как поступить?`, answers: ['Округлить ее', 'Подтвердить у владельца данных или убрать до проверки', 'Сослаться на устный разговор'], correct: 1 },
    { question: `${prefix} одна и та же ошибка повторяется у разных новичков. Какой вывод?`, answers: ['Каждый должен разобраться сам', 'Нужно обновить карточку и зафиксировать понятное правило', 'Следует удалить сложную задачу'], correct: 1 },
    { question: `Что подтверждает готовность сотрудника самостоятельно работать с ${context.document}?`, answers: ['Он прочитал инструкцию', 'Он корректно выполнил типовую задачу и знает границы эскалации', 'Он сохранил все файлы'], correct: 1 },
    { question: `Бот дал ответ по ${context.project}, но не показал источник. Ваше решение?`, answers: ['Использовать ответ как окончательный', 'Запросить проверенный источник или обратиться к владельцу', 'Опубликовать ответ для коллег'], correct: 1 }
  ];
}

const gameBlocks = gameContexts.map(createQuestionBlock);

function profileHash(value) {
  return Array.from(value).reduce((hash, char) => ((hash << 5) - hash + char.charCodeAt(0)) | 0, 0);
}

function getGameBlock() {
  const key = `${state.name || 'специалист'}|${state.workplace || 'не указано'}`.trim().toLowerCase();
  let assignments = {};
  try { assignments = JSON.parse(localStorage.getItem('digitalMentorGameBlocks')) || {}; } catch { assignments = {}; }
  if (Number.isInteger(assignments[key])) {
    state.gameBlock = assignments[key];
    return assignments[key];
  }
  const used = new Set(Object.values(assignments));
  const start = Math.abs(profileHash(key)) % gameBlocks.length;
  let block = start;
  for (let offset = 0; offset < gameBlocks.length; offset += 1) {
    const candidate = (start + offset) % gameBlocks.length;
    if (!used.has(candidate)) { block = candidate; break; }
  }
  assignments[key] = block;
  localStorage.setItem('digitalMentorGameBlocks', JSON.stringify(assignments));
  state.gameBlock = block;
  localStorage.setItem('digitalMentorState', JSON.stringify(state));
  return block;
}

function startGame() {
  const block = getGameBlock();
  game = { index: 0, score: 0, block, questions: gameBlocks[block] };
  if (!modal.open) modal.showModal();
  renderGameQuestion();
}

function renderGameQuestion() {
  const item = game.questions[game.index];
  modalContent.innerHTML = `<div class="modal-body game-panel"><span class="eyebrow">Блок ${game.block + 1} · ${game.index + 1} из ${game.questions.length}</span><div class="game-progress">${game.questions.map((_, index) => `<i class="${index < game.index ? 'done' : index === game.index ? 'active' : ''}"></i>`).join('')}</div><h2 class="game-question">${item.question}</h2><div class="answer-grid">${item.answers.map((answer, index) => `<button class="answer-button" data-game-answer="${index}">${String.fromCharCode(65 + index)}. ${answer}</button>`).join('')}</div></div>`;
}

function answerGame(answer) {
  if (Number(answer) === game.questions[game.index].correct) game.score += 1;
  game.index += 1;
  if (game.index < game.questions.length) return renderGameQuestion();
  state.gameResults = { ...(state.gameResults || {}), [game.block]: Math.max(state.gameResults?.[game.block] || 0, game.score) };
  state.gameBest = Math.max(state.gameBest || 0, game.score);
  saveState();
  modalContent.innerHTML = `<div class="modal-body game-panel"><div class="game-result-mark">${game.score}</div><span class="eyebrow">Блок ${game.block + 1} завершен</span><h2>${game.score >= 20 ? 'Вы уверенно держите маршрут!' : 'Хорошее начало'}</h2><p class="modal-lead">Правильных решений: ${game.score} из ${game.questions.length}. ${game.score >= 20 ? 'Вы различаете типовые задачи и ситуации, где решение должен принять человек.' : 'Повторите рабочие ситуации и попробуйте еще раз. Рекомендуемый результат — не менее 20.'}</p><div class="button-row" style="justify-content:center"><button class="primary-button" data-action="start-game">Играть еще раз</button><button class="secondary-button dark" data-action="close-modal">Закрыть</button></div></div>`;
}

function openExpert(topic = '') {
  modalContent.innerHTML = `<div class="modal-body"><span class="eyebrow">Передача человеку</span><h2>Подготовить вопрос специалисту</h2><p class="modal-lead">Опишите только суть и ожидаемый результат. Не прикладывайте документы и сведения ограниченного доступа.</p>
    <form id="expertForm" class="form-grid"><label>Тема<select name="topic"><option>${escapeHtml(topic || 'Выберите направление')}</option><option>Документы и письма</option><option>Отчетность</option><option>Мероприятия</option><option>Проекты и программы</option></select></label><label>Что уже проверили<input name="checked" placeholder="Карточка, источник или инструкция"></label><label>Ожидаемый результат<textarea name="question" placeholder="Кратко опишите, что нужно получить"></textarea></label><label>Срок<input name="deadline" type="date"></label><div class="safety-note"><b>Важно</b><span>Не указывайте Ф.И.О., реквизиты, персональные, служебные или иные чувствительные сведения.</span></div><button class="primary-button" type="submit">Сформировать карточку вопроса</button></form></div>`;
  if (!modal.open) modal.showModal();
  document.getElementById('expertForm').addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (!String(data.get('question')).trim()) return showToast('Кратко опишите ожидаемый результат');
    modal.close();
    showToast('Черновик подготовлен. Рабочий канал передачи требуется утвердить.');
  });
}

function openRules() {
  modalContent.innerHTML = `<div class="modal-body"><span class="eyebrow">Возможности и ограничения</span><h2>Безопасная работа с ботом</h2><p class="modal-lead">«Цифровой наставник» помогает пройти типовой маршрут, но не заменяет руководителя, наставника или профильного специалиста.</p><ul class="check-list"><li>Сверяйте ответ с указанным первоисточником и датой</li><li>Не загружайте персональные и служебные сведения</li><li>Не используйте бот для правовых и финансовых решений</li><li>Передавайте нестандартную ситуацию ответственному человеку</li></ul><div class="warning">Этот интерфейс является рабочим прототипом. Региональные ссылки, владельцы содержания и канал эскалации должны быть утверждены до пилота.</div><div class="button-row"><button class="primary-button" data-action="close-modal">Понятно</button><button class="secondary-button dark" data-action="admin">${state.isAdmin ? 'Управление администратором' : 'Вход администратора'}</button></div></div>`;
  modal.showModal();
}

function openOnboarding() {
  modalContent.innerHTML = `<div class="onboarding"><div class="onboarding-art"><span>Первые 90 дней.<br>Вместе и по шагам.</span></div><div class="onboarding-content"><span class="eyebrow">Настройка маршрута</span><h2>Давайте познакомимся</h2><p class="modal-lead">Данные сохраняются только в вашем браузере и помогают показать подходящий этап.</p><div class="form-grid"><label>Как к вам обращаться<input id="onboardingName" value="${escapeHtml(state.name)}" placeholder="Имя"></label></div><b>Где вы работаете?</b><div class="choice-grid" id="workplaceChoices">${['Министерство', 'Орган местного самоуправления', 'Молодежный центр', 'Другое учреждение'].map(choice => `<button class="choice ${state.workplace === choice ? 'selected' : ''}" data-choice="${choice}">${choice}</button>`).join('')}</div><div class="safety-note"><b>Безопасность</b><span>Бот не принимает кадровые, финансовые и правовые решения и не собирает служебные документы.</span></div><br><button class="primary-button" data-action="finish-onboarding">Начать маршрут</button></div></div>`;
  modal.showModal();
}

function finishOnboarding() {
  const name = document.getElementById('onboardingName').value.trim();
  const selected = document.querySelector('#workplaceChoices .selected');
  if (!name) return showToast('Укажите, как к вам обращаться');
  if (!selected) return showToast('Выберите место работы');
  state.name = name;
  state.workplace = selected.dataset.choice;
  state.onboarded = true;
  if (!state.completed.includes('role')) state.completed.push('role');
  saveState();
  modal.close();
  renderHome();
  showToast('Маршрут настроен');
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 2600);
}

function escapeHtml(value = '') {
  return String(value).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[char]);
}

document.addEventListener('click', event => {
  const viewButton = event.target.closest('[data-view]');
  if (viewButton) return setView(viewButton.dataset.view);
  const scenarioButton = event.target.closest('[data-scenario]');
  if (scenarioButton) return openScenario(scenarioButton.dataset.scenario);
  const knowledgeButton = event.target.closest('[data-knowledge]');
  if (knowledgeButton) return openKnowledge(Number(knowledgeButton.dataset.knowledge));
  const industryButton = event.target.closest('[data-industry]');
  if (industryButton) return openIndustrySection(industryButton.dataset.industry);
  const galleryPhoto = event.target.closest('[data-gallery-photo]');
  if (galleryPhoto) return openYouthHousePhoto(Number(galleryPhoto.dataset.galleryPhoto));
  const galleryNav = event.target.closest('[data-gallery-nav]');
  if (galleryNav) {
    const current = Number(document.getElementById('photoLightbox')?.dataset.index || 0);
    return openYouthHousePhoto(current + Number(galleryNav.dataset.galleryNav));
  }
  if (event.target.closest('[data-gallery-close]') || event.target.id === 'photoLightbox') return closePhotoLightbox();
  const filterButton = event.target.closest('[data-filter]');
  if (filterButton) return renderSituations(filterButton.dataset.filter);
  const taskButton = event.target.closest('[data-task]');
  if (taskButton) {
    const id = taskButton.dataset.task;
    state.completed = state.completed.includes(id) ? state.completed.filter(item => item !== id) : [...state.completed, id];
    saveState();
    renderTasks();
    if (modal.open) modal.close();
    return;
  }
  const taskCard = event.target.closest('[data-task-open]');
  if (taskCard) return openTask(taskCard.dataset.taskOpen);
  const downloadButton = event.target.closest('[data-file-download]');
  if (downloadButton) return downloadFile(downloadButton.dataset.fileDownload);
  const deleteButton = event.target.closest('[data-file-delete]');
  if (deleteButton) return deleteFile(deleteButton.dataset.fileDelete, deleteButton.dataset.sectionKey);
  const gameAnswer = event.target.closest('[data-game-answer]');
  if (gameAnswer) return answerGame(gameAnswer.dataset.gameAnswer);
  const choice = event.target.closest('[data-choice]');
  if (choice) {
    document.querySelectorAll('[data-choice]').forEach(item => item.classList.remove('selected'));
    choice.classList.add('selected');
    return;
  }
  const feedback = event.target.closest('[data-feedback]');
  if (feedback) { modal.close(); return showToast('Спасибо. Оценка сохранена для улучшения карточки.'); }
  const action = event.target.closest('[data-action]');
  if (!action) return;
  if (action.dataset.action === 'home') setView('home');
  if (action.dataset.action === 'expert') openExpert(action.dataset.topic || '');
  if (action.dataset.action === 'admin') openAdmin();
  if (action.dataset.action === 'admin-logout') logoutAdmin();
  if (action.dataset.action === 'start-game') startGame();
  if (action.dataset.action === 'rules') openRules();
  if (action.dataset.action === 'close-modal') modal.close();
  if (action.dataset.action === 'finish-onboarding') finishOnboarding();
  if (action.dataset.action === 'glossary-materials') openGlossaryMaterials();
});

document.addEventListener('change', event => {
  const input = event.target.closest('[data-file-upload]');
  if (input) storeFiles(input.dataset.fileUpload, input.files);
});

modal.addEventListener('click', event => {
  if (event.target === modal) modal.close();
});

modal.addEventListener('close', () => {
  modal.classList.remove('structure-modal');
  closePhotoLightbox();
});

document.addEventListener('keydown', event => {
  const viewer = document.getElementById('photoLightbox');
  if (!viewer?.classList.contains('open')) {
    const photo = document.activeElement?.closest?.('[data-gallery-photo]');
    if (photo && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      openYouthHousePhoto(Number(photo.dataset.galleryPhoto));
    }
    return;
  }
  if (event.key === 'Escape') {
    event.preventDefault();
    event.stopPropagation();
    closePhotoLightbox();
  }
  if (event.key === 'ArrowLeft') openYouthHousePhoto(Number(viewer.dataset.index) - 1);
  if (event.key === 'ArrowRight') openYouthHousePhoto(Number(viewer.dataset.index) + 1);
});


updateProfile();
if (window.location.hash === '#industry-structure') {
  currentView = 'knowledge';
  document.querySelectorAll('[data-view]').forEach(button => button.classList.toggle('active', button.dataset.view === 'knowledge'));
  renderIndustryStructure();
} else {
  renderHome();
}
if (!state.onboarded) setTimeout(openOnboarding, 250);
