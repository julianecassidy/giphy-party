console.log("Let's get this party started!");

$('form').on('submit', getGif);

async function getGif(event) {
    event.preventDefault();
    const searchTermValue = $("#gif-search").val();
    const newGif = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTermValue}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`)
    console.log(newGif);
}