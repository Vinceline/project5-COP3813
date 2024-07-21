let groceryList = [];

// Function to load grocery list from localStorage and return it as an array
function loadList() {
   let storedList = localStorage.getItem("list");
   if (storedList) {
      return storedList.split(","); // Split the string by commas to form an array
   } else {
      return []; // Return an empty array if there is no stored list
   }
}

// Function to save grocery list to localStorage as a comma-delimited string
function saveList(groceryList) {
   localStorage.setItem("list", groceryList.join(",")); // Join the array into a string separated by commas
}

// Function to clear grocery list from localStorage
function clearList() {
   localStorage.removeItem("list");
}

// Wait until DOM is loaded
window.addEventListener("DOMContentLoaded", function () {
   // Load the grocery list from localStorage
   groceryList = loadList()

   // Enable or disable the Clear button based on groceryList length
   enableClearButton(groceryList.length > 0);

   // Display list items
   for (let item of groceryList) {
      showItem(item);
   }

   // Add event listener for Add button
   document.querySelector("#addBtn").addEventListener("click", addBtnClick);

   // Add event listener for Clear button
   document.querySelector("#clearBtn").addEventListener("click", clearBtnClick);
});

// Function to enable or disable the Clear button
function enableClearButton(enabled) {
   document.querySelector("#clearBtn").disabled = !enabled;
}

// Function to display an item at the end of the ordered list
function showItem(item) {
   let list = document.querySelector("ol");
   let listItem = document.createElement("li");
   listItem.textContent = item;
   list.appendChild(listItem);
}

// Function to handle Add button click
function addBtnClick() {
   let itemTextInput = document.querySelector("#item");
   let item = itemTextInput.value.trim();
   if (item.length > 0) {
      enableClearButton(true);
      showItem(item);
      groceryList.push(item);
      saveList(groceryList);
   }
   itemTextInput.value = "";
   itemTextInput.focus();
}

// Function to handle Clear button click
function clearBtnClick() {
   enableClearButton(false);
   groceryList = [];
   let list = document.querySelector("ol");
   list.innerHTML = "";
   clearList(); // Clear localStorage
}

// Test loadList() with localStorage items
localStorage.setItem("list", "apples,fried rice,milk,bread");
groceryList = loadList();
console.log("Test grocery list:", groceryList); 
