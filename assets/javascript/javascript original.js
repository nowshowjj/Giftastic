


          var topics = ["Ghostbusters", "TMNT", "Mighty Mouse", "Spongebob"];

                // Function for displaying cartoon data
      function renderButtons() {

        // Deleting the cartoons prior to adding new cartoons
        // (this is necessary otherwise we will have repeat buttons)
        $("#buttons-view").empty();

        // Looping through the array of cartoons
        for (var i = 0; i < topics.length; i++) {

          // Then dynamicaly generating buttons for each cartoon in the array
          // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class of cartoon to our button
          a.addClass("cartoon");
          // Adding a data-attribute
          a.attr("data-name", topics[i]);
          // Providing the initial button text
          a.text(topics[i]);
          // Adding the button to the HTML
          $("#buttons-view").append(a);
        }
      }

      // This function handles events where one button is clicked
      $("#add-cartoon").on("click", function(event) {
        // Preventing the buttons default behavior when clicked (which is submitting a form)
        event.preventDefault();
        // This line grabs the input from the textbox
        var cartoon = $("#cartoon-input").val().trim();

        // Adding the cartoon from the textbox to our array
        topics.push(cartoon);

        // Calling renderButtons which handles the processing of our cartoon array
        renderButtons();

      });

      // Function for displaying the cartoon info
      // We're adding a click event listener to all elements with the class "cartoon"
      // We're adding the event listener to the document because it will work for dynamically generated elements
      // $(".cartoons").on("click") will only add listeners to elements that are on the page at that time
      $(document).on("click", ".cartoon", alertcartoonName);

      // Calling the renderButtons function to display the intial buttons
      renderButtons();

      // Generic function for capturing the cartoon name from the data-attribute
      function alertcartoonName() {
        var cartoonName = $(this).attr("data-name");

        alert(cartoonName);
      };

        // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        // topics + "&api_key=76BXdAB6bQBwB9frYDzxojUtLRhKhwKu&limit=10&rating=pg";

        //       $.GET(queryURL).then(function(response) {
        //   // Storing an array of results in the results variable
        //   var results = response.data;

        //   // Looping over every result item
        //   for (var i = 0; i < results.length; i++) {

        //     // Only taking action if the photo has an appropriate rating
        //     if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
        //       // Creating a div with the class "item"
        //       var gifDiv = $("<div class='item'>");

        //       // Storing the result item's rating
        //       var rating = results[i].rating;

        //       // Creating a paragraph tag with the result item's rating
        //       var p = $("<p>").text("Rating: " + rating);

        //       // Creating an image tag
        //       var topicsImage = $("<img>");

        //       // Giving the image tag an src attribute of a proprty pulled off the
        //       // result item
        //       topicsImage.attr("src", results[i].images.fixed_height.url);

        //       // Appending the paragraph and personImage we created to the "gifDiv" div we created
        //       gifDiv.append(p);
        //       gifDiv.append(topicsImage);

        //       // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
        //       $("#gifdump").prepend(gifDiv);
        //     };

