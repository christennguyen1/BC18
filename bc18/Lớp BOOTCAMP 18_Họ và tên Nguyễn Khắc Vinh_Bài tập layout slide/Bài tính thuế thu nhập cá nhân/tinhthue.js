function mucthue(soTien) {
    if (soTien>=0 && soTien<=60000000) {
        return 0.05;
    }
    if (soTien>60000000 && soTien<=120000000) {
        return 0.1;
    }
    if (soTien>120000000 && soTien<=210000000) {
        return 0.15;
    }
    if (soTien>210000000 && soTien<=384000000) {
        return 0.2;
    }
    if (soTien>384000000 && soTien<=624000000) {
        return 0.25;
    }
    if (soTien>624000000 && soTien<=960000000) {
        return 0.3;
    }
    if (soTien>960000000 ) {
        return 0.35;
    }
}
function tienthue() {
    var tongthuNhapEle = document.getElementById("tongthunhap").value * 1;
    var soNguoiEle = document.getElementById("songuoi").value * 1;
    var tongTienThuNhapEle=tongthuNhapEle-4000000-soNguoiEle*1600000;
    var mucThueEle=mucthue(tongTienThuNhapEle)*100;
    document.getElementById("xuatmucthue").style.display = "block"
    document.getElementById("xuatmucthue").innerHTML = "Mức thuế của bạn là: " + mucThueEle + "%";
    alert("Mức thuế của bạn là: " + mucThueEle + "%")
}
function thongbao() {
    var tongthuNhapEle = document.getElementById("tongthunhap").value * 1;
    var soNguoiEle = document.getElementById("songuoi").value * 1;
    var tongTienThuNhapEle=tongthuNhapEle-4000000-soNguoiEle*1600000;
    var tongTienThueEle=mucthue(tongTienThuNhapEle)*tongTienThuNhapEle;
    console.log(tongTienThueEle);
    document.getElementById("xuatiensauthue").style.display = "block"
    document.getElementById("xuatiensauthue").innerHTML = "Tiền thuế của bạn là: " + tongTienThueEle + " VND";
    alert("Tiền thuế của bạn là: " + tongTienThueEle + " VND")
}