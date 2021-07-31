/**
 * Removes the 'hide' class to each 'js-num-cards' element for each column to show the number of cards. This number is
 * already calculated by Trello but is not being used, so this function simply removes the 'hide' class to display the
 * number in each column.
 */
(function () {
  // Show counter for each column.
  document.querySelectorAll('.js-num-cards').forEach(function (list) {
    list.classList.remove('hide');
  })

  // Show total card counter.
  document.getElementById("button-total-cards-count").hidden = false;
})();