if (document.querySelector('.sort__select-quantity')) {
  const defaultSelect = () => {
    const element = document.querySelector('.sort__select-quantity');
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
}

