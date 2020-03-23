//help from:
//https://stackoverflow.com/questions/3646036/preloading-images-with-javascript

let images = [];
function preload() {
    for (let i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

preload(
    "assets/Greece.jpg",
    "assets/Hokkaido.jpg",
    "assets/Mentawai.jpg",
    "assets/Patagonia.jpg",
    "assets/Pipeline.jpg",
    "assets/SwissAlps.jpg"
)