import { ADDRESS_NOTE, CANCELLATION } from './copy'
import { stays } from './stays'

/** A practical question answered in (07) FAQ. */
export interface FaqItem {
  question: string
  answer: string
}

const petFriendly = stays.filter((s) => s.petFriendly).length

/**
 * Questions in accordion order. Check-in is described once on the home page,
 * in (04) How it works, so it has no question here.
 */
export const faq: FaqItem[] = [
  {
    question: 'Насколько уединены дома?',
    answer:
      'У большинства домов нет соседей в пределах видимости. Границы частной территории указаны в карточке. Городские лофты отмечены отдельно.',
  },
  {
    question: 'Как добраться до удалённых домов?',
    answer: `${ADDRESS_NOTE} В карточке описан последний участок пути: тропа, участок с тросом или лодочная переправа. Можем организовать трансфер от ближайшей станции.`,
  },
  {
    question: 'Что есть в каждом доме?',
    answer:
      'Постельное бельё, кухня, набор для фильтр-кофе, отопление и аптечка. Сауну, купель, бассейн и Wi-Fi проверяйте в карточке дома.',
  },
  {
    question: 'Можно приехать с питомцем?',
    answer: `Да, в ${petFriendly} из ${stays.length} домов. Выберите «С питомцами» в фильтре гостей. Условия также есть в правилах дома.`,
  },
  {
    question: 'Как отменить бронирование?',
    answer: `${CANCELLATION.summary} Условия одинаковы для всех домов.`,
  },
]
