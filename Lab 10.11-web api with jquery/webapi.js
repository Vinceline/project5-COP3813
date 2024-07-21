$(function () {
   $("#fetchQuotesBtn").click(function () {
      // Get selected topic and count from drop-down lists
      const selectedTopic = $("#topicSelection option:selected").val();
      const selectedCount = $("#countSelection option:selected").val();
      fetchQuotes(selectedTopic, selectedCount);
   });
});

function fetchQuotes(topic, count) {
   // API endpoint URL
   const apiUrl = `https://wp.zybooks.com/quotes.php`;

   // Make GET request using $.ajax()
   $.ajax({
      url: apiUrl,
      method: 'GET',
      dataType: 'json',
      data: {
         topic: topic,
         count: count
      },
      success: function (response) {
         if (response.error) {
            // Display error message
            $("#quotes").html(`<div>${response.error}</div>`);
         } else {
            // Construct HTML for quotes
            let html = "<ol>";
            response.forEach((quoteObj, index) => {
               const { quote, source } = quoteObj;
               html += `<li>${quote} - ${source}</li>`;
            });
            html += "</ol>";

            // Display the quotes in the quotes div
            $("#quotes").html(html);
         }
      },
      error: function (xhr, status, error) {
         // Display error message if request fails
         $("#quotes").html(`<div>Error fetching quotes: ${error}</div>`);
      }
   });
}
