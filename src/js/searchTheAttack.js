export default obj => obj.special.map((item) => {
  const {
    id, icon, name, description = 'Описание недоступно',
  } = item;
  return {
    id, icon, name, description,
  };
});
