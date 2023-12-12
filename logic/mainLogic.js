let imageUrls = [
    "./images/img.png",
    "./images/img_2.png",
    "./images/img_3.png",
    "./images/img_4.png",
    "./images/img_5.png",
];
let currentImgIndex = 0;
const mainImageElement = document.getElementById("mainImage");
const pointsBox = document.querySelector(".points");

document.addEventListener("DOMContentLoaded", () => {
    mainImageElement.src = imageUrls[currentImgIndex];
    loadPoints();
    selectPoint(currentImgIndex);
});

function flipNext() {
    if (currentImgIndex >= imageUrls.length - 1) return;
    const newImageIndex = currentImgIndex + 1;
    mainImageElement.src = imageUrls[newImageIndex];
    selectPoint(newImageIndex, currentImgIndex);
    currentImgIndex = newImageIndex;
}

function flipPrevious() {
    if (currentImgIndex <= 0) return;
    const newImageIndex = currentImgIndex - 1;
    mainImageElement.src = imageUrls[newImageIndex];
    selectPoint(newImageIndex, currentImgIndex);
    currentImgIndex = newImageIndex;
}

function selectPoint(index, prevIndex) {
    const pointList = pointsBox.children;
    if (prevIndex !== undefined) pointList[prevIndex].classList.remove("selected");

    pointList[index].classList.add("selected");
}

function loadPoints() {
    for (let url of imageUrls) {
        const newPoint = document.createElement("img");
        newPoint.src = url;
        newPoint.setAttribute("loading", "lazy");
        pointsBox.appendChild(newPoint);
    }
}