let Img = [
    "../image/img.png",
    "../image/img_2.png",
    "../image/img_3.png",
    "../image/img_4.png",
    "../image/img_5.png"
];
let num = 0;
function  FlippingThrough(sign){
if (sign === "+" && num < 4){
    num++;
    document.getElementById("mainPNG").src=Img[num];
}
    else if (sign === "-" && num>0){
        num--;
        document.getElementById("mainPNG").src=Img[num];
    }
}