export type CollectionId = 'cliff' | 'forest' | 'brutalist' | 'desert' | 'waterfront'

export interface Collection {
  id: CollectionId
  title: string
  description: string
}

/** Landscape collections, in switcher order. Stays opt in via `Stay.collections`. */
export const collections: Collection[] = [
  {
    id: 'cliff',
    title: "Дома среди скал",
    description: "Бетонные дома на склоне Мадейры и гранитном берегу Сардинии.",
  },
  {
    id: 'forest',
    title: "Лесные дома",
    description: "Зеркальные, деревянные и стеклянные дома среди сосен и берёз в Норвегии, Швеции, Финляндии, Германии и Португалии.",
  },
  {
    id: 'brutalist',
    title: "Брутализм",
    description: "Лофт в бывшей берлинской типографии и две виллы на побережье. Литой бетон и следы опалубки.",
  },
  {
    id: 'desert',
    title: "Дома в пустыне",
    description: "Стеклянный купол в Вади-Рам и дворы из утрамбованной земли под Марракешем. Жаркие дни и прохладные ночи.",
  },
  {
    id: 'waterfront',
    title: "Дома у воды",
    description: "Плавучий дом в норвежском фьорде и рыбацкая хижина на сваях у лагуны в Португалии.",
  },
]

export const collectionById = (id: string) => collections.find((c) => c.id === id)
