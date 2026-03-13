const imageGallery = [
    "https://www.bostonbarbc.net/uploads/4/8/7/6/4876080/header_images/1454291402.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScS-qZijfGIVdXv-fmALFWEHj2_bZQxFWZkA&s",
    "https://i.ebayimg.com/images/g/gRQAAOSw2C1ju3-k/s-l1200.jpg"
];

const imageElement = document.getElementById('gallery-image');
const prevbutton = document.getElementById('prev-btn');
const nextbutton = document.getElementById('next-btn');

let currentimangeindex = 0;

function updateimage() {
    imageElement.src = imageGallery[currentimangeindex];
}

updateimage();

nextbutton.addEventListener('cilck', function() {
    currentimageindex = (currentimangeindex + 1) % imageGallery.length;
    updateimage();
});

prevbutton.addEventListener('click', function() {
    currentimangeindex = (currentimangeindex - 1 + imageGallery.length) % imageGallery.length;
    updateimage();
});