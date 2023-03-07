console.log("Let's get this party started!");

function addGif(res){
    let allRes = res.data.length;
    if (allRes){
        let randIdx = Math.floor(Math.random() * allRes);
        let newGif = $("<img>", {
            src: res.data[randIdx].images.original.url,
            class: "col w-80 my-2"
        });
        console.log(res.data[randIdx].images.original.url);
        $("#gif-div").append(newGif);
    }
}




$("form").on("submit", async function(e){
    e.preventDefault();
    console.log("Form submitted");

    let searchTerm = $("#search-val").val();
    $("#search-val").val("");
    

    const res = await axios.get("https://api.giphy.com/v1/gifs/search", {
        params:{
            api_key:"UkvEtXUK5EaXOQ6YAqwzA6RhHq4S6IfJ", 
            q:searchTerm
        }
    });
    console.log(res);

    addGif(res.data);
});


$("#remove-btn").on("click", function(){
    $("#gif-div").empty();
});