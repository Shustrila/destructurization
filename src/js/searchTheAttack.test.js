import searchTheAttack from "./searchTheAttack.js"

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
			description: 'Двойной выстрел наносит двойной урон'
		},
		{
			id: 13,
			name: 'Ледяной зонт',
			icon: 'http://...',
			description: 'Выстрел затормаживает персонажа и замедляет передвижение'
		},
		{
			id: 20,
			name: 'Шквал стрел',
			icon: 'http://...',
			description: '8 выстрелов, наносят в 1.5 раза больше урона за выстрел'
		},
		{
			id: 22,
			name: 'Щит из стрел',
			icon: 'http://...',
		},
	]
};


describe("TEST: search the attack", () => {

	test("skill id 8", () => {
		let result = {
			id: 8,
			name: 'Двойной выстрел',
			icon: 'http://...'
		};

		expect(searchTheAttack(character, 8)).toEqual(result)
	});

	test("skill id 13", () => {
		let result = {
				id: 13,
				name: 'Ледяной зонт',
				icon: 'http://...',
			};

		expect(searchTheAttack(character, 13)).toEqual(result)
	});

	test("skill id 22", () => {
		let result = {
			id: 22,
			name: 'Щит из стрел',
			icon: 'http://...',
		};

		expect(searchTheAttack(character, 22)).toEqual(result)
	});

});
