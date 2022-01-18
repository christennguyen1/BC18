const Kwdau=50;
const KwKeTiep1=100;
const KwKeTiep2=200;
const KwKeTiep3=350;

function tinhtiendien(soKw) {
    if (soKw<=50) {
        return soKw*500;
    }
    if (soKw>50 && soKw<=100) {
        return (50*500+(soKw-50)*650);
    }
    if (soKw>100 && soKw<=200) {
        return(50*500+50*650+(soKw-100)*850);
    }
    if (soKw>200 && soKw<=350) {
        return(50*500+50*650+100*850+(soKw-200)*1100);
    }
    if (soKw>350) {
        return(50*500+50*650+100*850+200*1100+(soKw-350)*1300);
    }
}
function tongtien() {
    var soKwEle = document.getElementById("soKw").value*1;
    var tenhoEle = document.getElementById("tenho").value;
    var tongTienDienEle=tinhtiendien(soKwEle);
    if (soKw<0) {
        alert("Mời bạn nhập điểm lại.")
    }
    else {
        console.log(tongTienDienEle);
        document.getElementById("xuattien").style.display = "block"
        document.getElementById("xuattien").innerHTML = "Tổng tiền điện của bạn là: " + tongTienDienEle + " VND";
    }
}
function thongbao() {
    var soKwEle = document.getElementById("soKw").value*1;
    var tenhoEle = document.getElementById("tenho").value;
    var tongTienDienEle=tinhtiendien(soKwEle);
    if (soKw<0) {
        alert("Mời bạn nhập điểm lại.")
    }
    else {
        console.log(tongTienDienEle);
        alert("Tổng tiền điện của bạn là: " + tongTienDienEle + " VND");
    }
}