import searchTheAttack from './searchTheAttack.js';

describe('TEST: search the attack', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 13,
        name: 'Ледяной зонт',
        icon: 'http://...',
        description: 'Выстрел затормаживает персонажа и замедляет передвижение',
      },
      {
        id: 20,
        name: 'Шквал стрел',
        icon: 'http://...',
        description: '8 выстрелов, наносят в 1.5 раза больше урона за выстрел',
      },
      {
        id: 22,
        name: 'Щит из стрел',
        icon: 'http://...',
      },
    ],
  };


  test('1', () => {
    const expected = [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 13,
        name: 'Ледяной зонт',
        icon: 'http://...',
        description: 'Выстрел затормаживает персонажа и замедляет передвижение',
      },
      {
        id: 20,
        name: 'Шквал стрел',
        icon: 'http://...',
        description: '8 выстрелов, наносят в 1.5 раза больше урона за выстрел',
      },
      {
        id: 22,
        name: 'Щит из стрел',
        icon: 'http://...',
        description: 'Описание недоступно',
      },
    ];

    expect(searchTheAttack(character)).toEqual(expected);
  });
});
