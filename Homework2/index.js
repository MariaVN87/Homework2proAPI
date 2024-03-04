const images = [
    "https://fanibani.ru/wp-content/uploads/2022/12/kotyata-s-plyushevoj-koshkoj-v-korzine.jpg",
    "https://fanibani.ru/wp-content/uploads/2022/12/porodistyj-kotenok-na-beloj-prostyne.jpg"
];
let currentIndex = 0;
const imgElement = document.querySelector("img");
const points = document.querySelectorAll(".point");

function showImage(index) {
    imgElement.src = images[index];
    points.forEach((point, i) => {
        point.classList.toggle("active", i === index);
    });
}

document.getElementById("prevBtn").addEventListener("click", function () {
    currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    showImage(currentIndex);
});

document.getElementById("nextBtn").addEventListener("click", function () {
    currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    showImage(currentIndex);
});

points.forEach((point, i) => {
    point.addEventListener("click", function () {
        showImage(i);
        currentIndex = i;
    });
});