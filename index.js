const images = [
    "./Styles/images/Richie.jpg",
    "./Styles/images/brashiki-kotyata.jpg",
    "./Styles/images/kotyata.jpg",
    "./Styles/images/Vasiliy.jpg",
    "./Styles/images/sypercat.jpg",
];

let currentIndex = 0;
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const image = document.getElementById("image");

const showPrevImage = () => {
    currentIndex--;
    updateImage();
};

const showNextImage = () => {
    currentIndex++;
    updateImage();
};

const updateImage = () => {
    currentIndex = currentIndex < 0 ? 0 : currentIndex >= images.length ? images.length - 1 : currentIndex;

    image.src = images[currentIndex];

    prevBtn.style.display = currentIndex === 0 ? "none" : "block";
    nextBtn.style.display = currentIndex === images.length - 1 ? "none" : "block";
};

prevBtn.addEventListener("click", showPrevImage);
nextBtn.addEventListener("click", showNextImage);

updateImage();