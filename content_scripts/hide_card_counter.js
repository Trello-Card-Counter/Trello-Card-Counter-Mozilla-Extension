/**
 * Add the 'hide' class to each 'js-num-cards' element for each column to hide the number of cards. This number is
 * already calculated by Trello but is not being used, so this function simply adds back the 'hide' class to not
 * display it.
 */
(function () {
  document.querySelectorAll('.js-num-cards').forEach(function (list) {
    list.classList.add('hide');
  })
})();