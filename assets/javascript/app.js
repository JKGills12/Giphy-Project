// displayGifName function re-renders the HTML to display the appropriate content

    function displayGifName() {
        var gif = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=4Ln5YO8c6ObLoVi1aWAKo5ApNAzdDt43&q=marvel&limit=10&offset=0&rating=G&lang=en";
    }

    var topics = ["Marvel", "Pixar", "Video Games"];
    var marvel = "https://api.giphy.com/v1/gifs/search?api_key=4Ln5YO8c6ObLoVi1aWAKo5ApNAzdDt43&q=marvel&limit=10&offset=0&rating=G&lang=en";

    function displayGif() {
        
        var gif = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=4Ln5YO8c6ObLoVi1aWAKo5ApNAzdDt43&q=marvel&limit=10&offset=0&rating=G&lang=en";
    }

    function renderButtons() {

        // Delete gifs prior to adding new gifs
        $("#buttons-view").empty();

        // Looping through the array of topics
        for (var i = 0; i < topics.length; i++) {

          // Generate buttons for each topic in array.
            var a = $("<button>");
          // Adding a class of topics-btn to our button
            a.addClass("topics-btn");
          // Adding a data-attribute
            a.attr("data-name", topics[i]);
          // Providing the initial button text
            a.text(topics[i]);
          // Adding the button to the buttons-view div
            $("#buttons-view").append(a);
        }
    }



    // Create action of onclick of gif submit button
    $("#add-topic").on("click", function () {
        event.preventDefault();
        // console.log("#add-topic");
        var submit = $("#gif-input").submit();
            // console.log(submit);
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=4Ln5YO8c6ObLoVi1aWAKo5ApNAzdDt43&q=marvel&limit=10&offset=0&rating=G&lang=en";
        
        topics.push(topics);

        renderButtons();

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            // console.log(response);
        
        // Create a div to hold the gifs
            var topicsDiv = $("<div class='topics'>");
            
            var results = response.data;

            for (var i = 0; i < results.length; i++){
                var topicsDiv = $("<div>");
                var p = $("<p>").text(results[i].rating);
                var gifImage = $("<img>");
                gifImage.attr("src", results[i].images.fixed_height.url);

                topicsDiv.append(p).append(gifImage);
                $("#gifs-view").prepend(topicsDiv);
            }

        })
        renderButtons();
    })
    
    //array of results button
    // search bar 
    // play and pause function
    // rating
