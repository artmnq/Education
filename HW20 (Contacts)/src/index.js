import { renderItem } from './renders.js';
import { checkInput } from './valid.js';

export const form = document.querySelector('.form');

document.addEventListener('DOMContentLoaded', async () => {
  form.addEventListener('change', ({ target }) => {
    checkInput(target);
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { target } = event;
    const isValid = [...form.elements]
      .filter((input) => input.tagName === 'INPUT')
      .every((input) => checkInput(input));

    if (isValid) {
      const body = new FormData(target);
      const data = await fetch(
        'https://contacts-api-learn.herokuapp.com/api/contacts',
        {
          method: 'POST',
          body,
        }
      );
      const contact = await data.json();
      renderItem(contact);
      form.reset();
    }
  });

  const data = await fetch(
    'https://contacts-api-learn.herokuapp.com/api/contacts'
  );
  const contacts = await data.json();
  console.log(contacts);
  Object.values(contacts).forEach(renderItem);
});
