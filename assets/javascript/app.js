// displayGifName function re-renders the HTML to display the appropriate content

    function displayGifName() {
        var gif = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        topics+"&api_key=4Ln5YO8c6ObLoVi1aWAKo5ApNAzdDt43&limit=10&rating=G"
    }

    var topics = ["Marvel", "Pixar", "Video Games"];

    function displayGif() {
        
        var gif = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        marvel+"&api_key=4Ln5YO8c6ObLoVi1aWAKo5ApNAzdDt43&limit=10&rating=G";

// Create action of onclick of gif submit button
    $("submit").on("click", function () {
        var submit = $(this).attr("gif-form");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        marvel+"&api_key=4Ln5YO8c6ObLoVi1aWAKo5ApNAzdDt43&limit=10&rating=G";


        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
        
        // Create a div to hold the movie title
            var topicsDiv = $("<div class='topics'>");
            
            var results = response.data;

            for (var i = 0; i < results.length; i++){
                var movieDiv = $("<div>");
                var p = $("<p>").text(results[i].rating);
                var movieImage = $("<img>");
                movieImage.attr("src", results[i].images.fixed_height.url);

                movieDiv.append(p).append(movieImage);
                $('#gif-view').prepend(movieDiv);
            }
        })
        
    })
}

    //array of results button
    // search bar 
    // play and pause function
    // rating
