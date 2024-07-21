// HTML for the up, down, and done buttons
const upButtonHtml = '<button class="upBtn">&uarr;</button>';
const downButtonHtml = '<button class="downBtn">&darr;</button>';
const doneButtonHtml = '<button class="doneBtn">&#x2713;</button>';

$(function() {
   $("#addBtn").on("click", addBtnClick);
   
   // Add item if user presses Enter
   $("#newItemText").on("keyup", function(event) {
      if (event.key === "Enter") {
         addBtnClick();
      }
   });
});

function addBtnClick() {
   let itemText = $("#newItemText").val().trim();

   // Don't add empty strings
   if (itemText.length !== 0) {
      addItem(itemText);

      // Clear text and put focus back in text input
      $("#newItemText").val("").focus();
   } 
}

function addItem(item) {
   // Create a new <li> for the list
   let $newItem = $(`<li><span>${item}</span></li>`);

   // Up button moves item up one spot
   let $upButton = $(upButtonHtml).on("click", function () {
      let index = $newItem.index();
      moveItem(index, index - 1);
   });

   // Down button moves item down one spot
   let $downButton = $(downButtonHtml).on("click", function () {
      let index = $newItem.index();
      moveItem(index, index + 1);
   });

   // Done button removes item from list
   let $doneButton = $(doneButtonHtml).on("click", function () {
      let index = $newItem.index();
      removeItem(index);
   });

   // Append buttons to the new item
   $newItem.append($upButton, $downButton, $doneButton);

   // Append new item to the list
   $("ol").append($newItem);
}


function moveItem(fromIndex, toIndex) {
   // Get all items in the list
   let $listItems = $("ol li");

   // Check if indices are within bounds
   if (fromIndex < 0 || toIndex < 0 || fromIndex >= $listItems.length || toIndex >= $listItems.length) {
      return; // Ignore invalid movements
   }

   // Detach the item at fromIndex
   let $itemToMove = $listItems.eq(fromIndex).detach();

   // Determine where to insert based on toIndex
   if (toIndex < fromIndex) {
      $itemToMove.insertBefore($listItems.eq(toIndex));
   } else {
      $itemToMove.insertAfter($listItems.eq(toIndex));
   }
}


function removeItem(index) {
   // Get the item at the specified index and remove it
   $("ol li").eq(index).remove();
}
