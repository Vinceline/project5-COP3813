window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;

      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);
   });
});

function showQuotes(quotes) {
   let html = "<ol>";
   quotes.forEach(quote => {
      html += `<li>${quote.quote} - ${quote.source}</li>`;
   });
   html += "</ol>";

   document.querySelector("#quotes").innerHTML = html;
}

function fetchQuotes(topic, count) {
   // Construct the URL for the API request
   const url = `https://wp.zybooks.com/quotes.php?topic=${topic}&count=${count}`;

   // Fetch quotes from the API
   fetch(url)
      .then(response => {
         if (!response.ok) {
            throw new Error(`Topic '${topic}' not found`);
         }
         return response.json();
      })
      .then(data => {
         if (data.error) {
            throw new Error(data.error);
         }
         else {
            showQuotes(data);
         }
      })
      .catch(error => {
         document.querySelector("#quotes").textContent = error.message;
      });
}
