export const paintCards = () => {
  const oddCards = document.querySelectorAll('.item:nth-child(odd)');
  for (let elem of oddCards) {
    elem.style.backgroundColor = 'red';
  }
};

export const findElement = () => {
  let element = document.querySelector('.item');
  while (element) {
    if (element.matches('.likedItem')) {
      element.style.backgroundColor = 'blue';
      break;
    } else {
      element = element.nextElementSibling;
    }
  }
};
