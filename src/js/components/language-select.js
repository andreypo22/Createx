const defaultSelect = () => {
  const element = document.querySelector('.language-select');
  const choices = new Choices(element, {
    allowHTML: true,
    position: 'bottom',
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
    duplicateItemsAllowed: false,
    silent: false,
  });
};

defaultSelect();
