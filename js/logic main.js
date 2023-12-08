let Img = [
    "../image/img.png",
    "../image/img_2.png",
    "../image/img_3.png",
    "../image/img_4.png",
    "../image/img_5.png"
];
let IdImg = 0;
function  FlippingThrough(sign){
if (sign === "+" && IdImg < 4){
    IdImg++;
    document.getElementById("mainPNG").src=Img[IdImg];
}
    else if (sign === "-" && IdImg>0){
    IdImg--;
        document.getElementById("mainPNG").src=Img[IdImg];
    }
}