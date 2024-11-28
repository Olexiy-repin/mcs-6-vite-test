import * as localStorageApi from './localstorage';

console.log(localStorageApi);

const formData = {
  user_email: 'test@gmail.com',
  user_name: 'Oleksii',
};

localStorageApi.save('feedback-form-state', formData);

const getFormDataFromLS = () => {
  console.log(localStorageApi.load('feedback-form-state'));
};

getFormDataFromLS();
