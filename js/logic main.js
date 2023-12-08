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
    let bool = 1;

while (bool ===1 ){
    num++;
    document.getElementById("mainPNG").src=Img[num];
    console.log(Img.length,num);
    bool = 2;
}
}
    else if (sign === "-" && num>0){
    let bool = 1;
    while (bool ===1){
        num--;
        document.getElementById("mainPNG").src=Img[num];
        console.log("----");
        bool = 2;
    }
    }
}