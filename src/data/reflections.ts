/** A guest's account of a stay, shown in (06) Reflections. */
export interface Reflection {
  id: string
  /** The stay it describes (`Stay.id`). */
  stayId: string
  guest: string
  city: string
  /** ISO month of the stay, e.g. "2026-09". */
  stayed: string
  /** Out of 10. */
  rating: number
  /** `*word*` marks the one serif-italic accent. */
  quote: string
}

/** Reviews in card order. */
export const reflections: Reflection[] = [
  {
    id: 'dimstuga-sophia',
    stayId: 'dimstuga',
    guest: 'Sophia M.',
    city: 'Милан',
    stayed: '2026-09',
    rating: 9.4,
    quote:
      'Здесь и правда одна комната: кровать, печь, маленькая сауна и душ. Печь прогревает её за десять минут, но утром пол *холодный*. Берите тапочки.',
  },
  {
    id: 'casa-monolite-jonas',
    stayId: 'casa-monolite',
    guest: 'Jonas K.',
    city: 'Гамбург',
    stayed: '2026-06',
    rating: 9.0,
    quote:
      'Подъезд из Ольбии заканчивается гравийкой, лучше ехать медленно. Почти каждый вечер готовили сами, а до *завтрака* купались. За столом удобно работать.',
  },
  {
    id: 'nordlys-dome-amelie',
    stayId: 'nordlys-dome',
    guest: 'Amélie R.',
    city: 'Лион',
    stayed: '2026-02',
    rating: 9.9,
    quote: 'Две ночи было облачно, а на третью в час ночи появилось сияние. Смотрели на него из горячей *купели*.',
  },
  {
    id: 'rimal-dome-hannah',
    stayId: 'rimal-dome',
    guest: 'Hannah L.',
    city: 'Цюрих',
    stayed: '2026-04',
    rating: 8.6,
    quote:
      'После обеда стекло быстро нагревается, и мы уходили в тень скалы. Ночью прохладно и много *звёзд*. По дороге на джипе трясёт, держите кофе крепче.',
  },
  {
    id: 'flyt-cabin-marcus',
    stayId: 'flyt-cabin',
    guest: 'Marcus O.',
    city: 'Эдинбург',
    stayed: '2026-07',
    rating: 9.2,
    quote:
      'Берите мягкую сумку, её везти на лодке самим. На ветру дом немного качается. В первую ночь мешало уснуть, а на третью спалось *крепко*.',
  },
  {
    id: 'casa-palafita-ines',
    stayId: 'casa-palafita',
    guest: 'Inès D.',
    city: 'Париж',
    stayed: '2026-08',
    rating: 9.7,
    quote: 'Одна комната, терраса и прилив под полом. Каждое *утро* прилетают цапли. Хорошее место для двоих.',
  },
]
