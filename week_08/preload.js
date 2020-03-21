//pre load all the images on the page so it doesnt fill them onto the screen as they load
let images = new Array();

function preLoadImages(){
    for(let i = 0; i < preLoadImages.arguments.length; i++){
        images[i] = new Image();
        images[i].src = preLoadImages.arguments[i];
    }
}

preLoadImages();

//help from:
//https://www.webhostingsecretrevealed.net/blog/featured-articles/15-cool-javascript-sample-snippets/