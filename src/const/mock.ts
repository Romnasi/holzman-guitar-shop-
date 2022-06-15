export const mockGuitars = [
  {
    id: 1,
    name: 'Честер Bass',
    vendorCode: 'SO757575',
    type: 'electric',
    description: 'Замечательный малобюджетный вариант, созданный для новичков, которые отдают предпочтение мелодичным стилям. Прекрасно звучат блюз и баллады, исполненные на этой гитаре. Акустические свойства весьма высоки, в отличие от ее стоимости.',
    previewImg: 'img/guitar-1.jpg',
    stringCount: 7,
    rating: 4,
    price: 17500,
  },
  {
    id: 2,
    name: 'CURT Z300',
    vendorCode: 'TK129049',
    type: 'electric',
    description: 'Эргономичность гитары и качество сборки являются, пожалуй, её главными преимуществами. Идеальное расположение в руках музыканта дополняется прочностью конструкции из клёна.',
    previewImg: 'img/guitar-8.jpg',
    stringCount: 7,
    rating: 3.5,
    price: 29500,
  },
  {
    id: 3,
    name: 'Roman LX',
    vendorCode: 'RO111111',
    type: 'ukulele',
    description: 'Укулеле класса премиум от компании CURT, собравшая в себе все самые необходимые качесва: лёгкость корпуса, прочность струн и компактный размер.',
    previewImg: 'img/guitar-6.jpg',
    stringCount: 4,
    rating: 4,
    price: 6800,
  },
];

export const mockComments = [
  {
    id: 'a82c74a8-b13c-4e04-84d9-092ddc9d2412',
    userName: 'Ксения',
    advantage: 'Хорошо. Очень хорошо.',
    disadvantage: 'Не рекомендую!',
    comment: 'Когда в наличии будет в чёрном цвете?',
    rating: 4,
    createAt: '2022-04-09T21:00:00.053Z',
    guitarId: 1,
  },
  {
    id: '65ce4c28-afb4-46a8-a0d0-eb1e850b27c4',
    userName: 'Саша',
    advantage: 'Хорошый звук.',
    disadvantage: 'Разбитая гитара. Плохая упаковка.',
    comment: 'Это моя первая гитара. Все понравилось. Сделано качественно.',
    rating: 3,
    createAt: '2022-06-09T21:00:00.053Z',
    guitarId: 1,
  },
  {
    id: 'c6621ded-aec0-4d39-b791-d1e18a341f8c',
    userName: 'Ольга',
    advantage: 'Цена=качество.',
    disadvantage: 'Разбитая гитара. Плохая упаковка.',
    comment: 'Неплохо, но дорого.',
    rating: 5,
    createAt: '2022-05-10T21:00:00.056Z',
    guitarId: 1,
  },
];
