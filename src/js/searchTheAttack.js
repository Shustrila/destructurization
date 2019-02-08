export default (obj, id) => {
	let { special } = obj;
	let character = null;

	special.forEach((item) => {
		if(item.id === id){
			character = item;

			if (character.description === undefined) {
				character.description = 'Описание недоступно';
			}
		}
	});

	return character
}
