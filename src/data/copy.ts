/**
 * Facts the site states in more than one place: check-in, the address,
 * prices, confirmation, pets and cancellation. Edit them here so the home
 * page, the catalogue, the stay pages and the FAQ never disagree.
 *
 * Roles: the Solum team speaks as "we" (we inspect the homes and answer
 * guests), the architect or studio designed the house, and the host owns it.
 */

/** Our inbox: the footer, checkout, the stay pages and the booking confirmation. */
export const EMAIL = 'hello@solum-stays.com'

/** What Solum is, in one line: the hero. */
export const INTRO = "Дома по проектам архитекторов в Европе и за её пределами. Мы проверяем каждый лично."

/** Self check-in with a door code; the host is on the phone. */
export const CHECK_IN = {
  title: "Самостоятельное заселение",
  body: (host: string) => `Код от двери и адрес придут за 48 часов до заезда. При необходимости ${host} ответит по телефону.`,
  /** One line, for the checkout's trip summary. */
  short: "После 15:00 · код за 48 часов до заезда",
  /** The last stretch, for a stay without its own arrival note (booking confirmation). */
  arrival: "Следуйте инструкции и откройте дверь кодом в любое время после 15:00.",
}

/** When the exact location is shared. */
export const ADDRESS_NOTE = "Точный адрес и маршрут придут за 48 часов до заезда."

export const PRICE = {
  /** After a nightly price. */
  unit: "за ночь без налогов",
  summary: "Цены указаны за ночь без налогов. Уборка оплачивается отдельно. Сервисного сбора Solum нет.",
  serviceFee: "Сервисный сбор Solum",
  cleaningFee: "Плата за уборку",
  taxes: "Налоги",
}

/** Instant book confirms on the spot; every other home is a request to the host. */
export const CONFIRMATION = {
  instant: { title: "Мгновенное подтверждение", body: "Даты подтверждаются сразу после бронирования." },
  request: {
    title: "Запросить бронирование",
    body: (host: string) => `${host} подтвердит даты, как правило, в течение суток. Оплата после подтверждения.`,
  },
}

export const OFF_GRID = {
  title: "Автономный дом",
  body: "У дома собственные системы электроснабжения и воды.",
}

export const PETS = {
  yes: { title: "Можно с питомцами", body: "Питомцы могут проживать в доме. Укажите их при бронировании." },
  no: { title: "Без питомцев", body: "В этом доме нельзя проживать с питомцами." },
  rule: (allowed: boolean) => (allowed ? "Можно с питомцами" : "Без питомцев"),
}

export const HOUSE_TIMES = ["Заезд после 15:00", "Выезд до 11:00"]

/** The one cancellation policy, as stay-page bullet points and as a sentence. */
export const CANCELLATION = {
  rules: ["Бесплатная отмена в течение 48 часов после бронирования", "Возврат 50% при отмене не позднее чем за 7 дней до заезда", "За 7 дней до заезда деньги не возвращаются"],
  summary:
    "Отмена бесплатна в течение 48 часов. Затем возвращается 50% при отмене не позднее чем за 7 дней до заезда. Позже возврата нет.",
}

/** The one badge a stay can earn, with what it means. */
export const GUEST_FAVOURITE = {
  minRating: 9.8,
  label: "Выбор гостей",
  hint: "Оценка гостей — от 9,8",
}

/** The checkout page: its badge, the ground rules every guest agrees to, and the agreement line. */
export const CHECKOUT = {
  secure: "Безопасное оформление",
  guarantee: "Каждый дом проверен лично",
  groundRules: [
    "Берегите природу. Ходите по тропам и забирайте мусор с собой.",
    "После 22:00 не включайте музыку на улице, чтобы не мешать соседям и животным.",
    "Бережно относитесь к дому. Не передвигайте встроенную мебель и не зажигайте свечи рядом с деревом.",
  ],
  agreement: (host: string) =>
    `Подтверждая бронирование, вы соглашаетесь с правилами хозяина (${host}), условиями отмены и указанной суммой.`,
  /** There is no payment backend yet. */
  prototype: "Демонстрация. Оплата и отправка данных не выполнялись.",
}

/** The booking confirmation page: what happens next, and the placeholders until accounts exist. */
export const BOOKED = {
  email: (email: string) => `В рабочей версии квитанция и номер бронирования отправляются на ${email}. Сохраните номер на случай вопросов.`,
  details: `Код, точный адрес и маршрут придут по почте и СМС за 48 часов до заезда.`,
  reachable: (host: string) => `${host} остаётся на связи по телефону.`,
  trips: "Поездки появятся после запуска личного кабинета. Пока сохраните номер бронирования.",
}

/** The message window to a host (stay page and booking confirmation). There is no messaging backend yet. */
export const MESSAGE = {
  /** Quick questions: the chip label, and the line it adds to the message. */
  starters: [
    { label: "Можно с питомцем?", text: "Можно ли приехать с питомцем?" },
    { label: "Ранний заезд?", text: "Можно ли заселиться до 15:00?" },
    { label: "Парковка?", text: "Есть ли парковка у дома?" },
  ],
  maxLength: 1000,
  /** The opening line, filled in from the dates and guests already picked. */
  greeting: (host: string, trip: string, reference?: string) =>
    reference ? `Здравствуйте, ${host}! Пишу о бронировании ${reference} (${trip}).` : `Здравствуйте, ${host}! Хотим остановиться у вас (${trip}).`,
  /** Why the message window asks for an account first. */
  why: (host: string) => `Переписка с хозяином (${host}) сохраняется в аккаунте. Ответы приходят в аккаунт и на почту.`,
  /** Where a reply goes, after Send. */
  /** `to`: an email, or "your Google account". */
  replies: (to: string) =>
    to.includes('@') ? `Ответ появится в аккаунте и придёт на ${to}.` : `Ответ появится в аккаунте Solum и придёт на почту, привязанную к ${to}.`,
  accountPrototype: "Демонстрация. Вход в аккаунт и отправка сообщений пока недоступны.",
  prototype: "Демонстрация. Сообщение не отправлено.",
}
