import { validateForms } from '../functions/validate-forms';
const rules1 = [
  {
    ruleSelector: '.form__input',
    rules: [
      // {
      //   rule: 'required',
      //   errorMessage: 'Email is required',
      // },
      {
        rule: 'email',
        errorMessage: 'Email is invalid',
      },
    ],
  },
];

const afterForm = () => {
  console.log('Произошла отправка, тут можно писать любые действия');
};

let form1 = document.querySelector(".form-1");
if (form1) {
  validateForms('.form-1', rules1, afterForm);
}

let form2 = document.querySelector(".form-2");
if (form2) {
  validateForms('.form-2', rules1, afterForm);
}
