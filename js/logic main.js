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
    let bool = true;

while (bool === true){
    num++;
    document.getElementById("mainPNG").src=Img[num];
    bool = false;
}
}
    else if (sign === "-" && num>0){
    let bool = true;
    while (bool === true){
        num--;
        document.getElementById("mainPNG").src=Img[num];
        bool = false;
    }
    }
}