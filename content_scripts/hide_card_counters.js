/**
 * Add the 'hide' class to each 'js-num-cards' element for each column to hide the number of cards. This number is
 * already calculated by Trello but is not being used, so this function simply adds back the 'hide' class to not
 * display it.
 */
(() => {
  // Hide counter for each column.
  document.querySelectorAll(".js-num-cards").forEach((list) => {
    list.classList.add("hide");
  });

  // Hide total card counter.
  document.getElementById("button-total-cards-count").hidden = true;
})();
