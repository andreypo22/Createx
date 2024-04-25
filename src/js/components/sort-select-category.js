if (document.querySelector('.sort__select-category1')) {
  const defaultSelect = () => {
    const element = document.querySelector('.sort__select-category1');
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

if (document.querySelector('.sort__select-category2')) {
  const defaultSelect = () => {
    const element = document.querySelector('.sort__select-category2');
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



