


        var topics = ["Ghostbusters", "TMNT", "Mighty Mouse", "Spongebob"];
        renderButtons();

                // Function for displaying cartoon data
       function renderButtons() {

        $(".buttons-view").empty();


        for (var i = 0; i < topics.length; i++) {

          var a = $("<button>");
          // Adding a class of cartoon to our button
          a.addClass("cartoon");
          // Adding a data-attribute
          a.attr("data-name", topics[i]);
          // Providing the initial button text
          a.text(topics[i]);
          // Adding the button to the HTML
          $(".buttons-view").append(a);

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

        renderButtons();

      });


      function getCartoonGif (){
        var cartName = $(this).attr("data-name");
        var cartoonStr = cartName.split(" ").join("+");


      

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + cartoonStr + 
        "&api_key=76BXdAB6bQBwB9frYDzxojUtLRhKhwKu&limit=10&rating=pg";

         $.ajax({
            url: queryURL,
            method: "GET"
          })
          // After the data comes back from the API
          .then(function(response) {
            // Storing an array of results in the results variable
            var results = response.data;

            $("gifdump").empty();

            // Looping over every result item
            for (var i = 0; i < results.length; i++) {

              if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                // Creating a div with the class "item"
                var gifDiv = $("<div class='item'>");



                // Storing the result item's rating
                var rating = results[i].rating;

                // Creating a paragraph tag with the result item's rating
                var p = $("<p>").text("Rating: " + rating);

                // Creating an image tag
                var topicsImage ='<img src= " ' + response.data[i].images.fixed_height_still.url +
            '" data-still=" ' + response.data[i].images.fixed_height_still.url +
            ' " data-animate=" ' + response.data[i].images.fixed_height.url + '" data-state="still" class="gif">';

        
                gifDiv.append(p);
                gifDiv.append(topicsImage);


                $("#gifdump").prepend(gifDiv);
                $(".gif").on("click", function() {
                  // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
                  var state = $(this).attr("data-state");
                  // If the clicked image's state is still, update its src attribute to what its data-animate value is.
                  // Then, set the image's data-state to animate
                  // Else set src to the data-still value
                  if (state === "still") {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                  } else {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                  }
                });

              }
            }

         });
}

    $(document).on("click", "button", getCartoonGif);


 
     



