function diemKhuVucphanloai(diemKhuVuc) {
    if (diemKhuVuc === "0") {
        return 0;
    }
    if (diemKhuVuc === "A") {
        return 2;
    }
    if (diemKhuVuc === "B") {
        return 1;
    }
    if (diemKhuVuc === "C") {
        return 0.5;
    }
}
function diemDoiTuongphanloai(diemDoiTuong) {
    if (diemDoiTuong === "0") {
        return 0;
    }
    if (diemDoiTuong === "1") {
        return 2.5;
    }
    if (diemDoiTuong === "2") {
        return 1.5;
    }
    if (diemDoiTuong === "3") {
        return 1;
    }
}
function tongdiem() {
    var diemKhuVucEle = document.querySelector('input[name="selectorkhuvuc"]:checked').value;
    var diemDoiTuongEle = document.querySelector('input[name="selectordoituong"]:checked').value;
    var diemTpEle1 = document.getElementById("txtDiemMon1").value * 1;
    var diemTpEle2 = document.getElementById("txtDiemMon2").value * 1;
    var diemTpEle3 = document.getElementById("txtDiemMon3").value * 1;
    var diemTpKhuVucEle = diemKhuVucphanloai(diemKhuVucEle);
    var diemTpDoiTuongEle = diemDoiTuongphanloai(diemDoiTuongEle);
    var tongDiemChuanEle = document.getElementById("txtTongDiemChuan").value * 1;
    var tongDiemTpEle = diemTpEle1 + diemTpEle2 + diemTpEle3;
    tongDiemTpEle += diemTpKhuVucEle + diemTpDoiTuongEle;
    if (diemTpEle1 < 0 || diemTpEle1 > 10 || diemTpEle2 < 0 || diemTpEle2 > 10 || diemTpEle3 < 0 || diemTpEle3 > 10) {
        alert("Mời bạn nhập điểm lại.")
    }
    else {
        console.log(tongDiemTpEle);
        alert("Tổng điểm của bạn là: " + tongDiemTpEle + " điểm");
        document.getElementById("xuatdiem").style.display = "block"
        document.getElementById("xuatdiem").innerHTML = "Tổng điểm của bạn là: " + tongDiemTpEle + " điểm";
    }
}
function thongbao() {
    var diemKhuVucEle = document.querySelector('input[name="selectorkhuvuc"]:checked').value;
    var diemDoiTuongEle = document.querySelector('input[name="selectordoituong"]:checked').value;
    var diemTpEle1 = document.getElementById("txtDiemMon1").value * 1;
    var diemTpEle2 = document.getElementById("txtDiemMon2").value * 1;
    var diemTpEle3 = document.getElementById("txtDiemMon3").value * 1;
    var diemTpKhuVucEle = diemKhuVucphanloai(diemKhuVucEle);
    var diemTpDoiTuongEle = diemDoiTuongphanloai(diemDoiTuongEle);
    var tongDiemChuanEle = document.getElementById("txtTongDiemChuan").value * 1;
    var tongDiemTpEle = diemTpEle1 + diemTpEle2 + diemTpEle3;
    if (diemTpEle1 < 0 || diemTpEle1 > 10 || diemTpEle2 < 0 || diemTpEle2 > 10 || diemTpEle3 < 0 || diemTpEle3 > 10) {
        alert("Mời bạn nhập điểm lại.")
    }
    else {
        tongDiemTpEle += diemTpKhuVucEle + diemTpDoiTuongEle;
        if (tongDiemTpEle < tongDiemChuanEle || diemTpEle1 == 0 || diemTpEle2 == 0 || diemTpEle3 == 0) {
            alert("Chúc bạn may mắn lần sau.");
            document.getElementById("xuattrungtuyen").style.display = "block"
            document.getElementById("xuattrungtuyen").innerHTML = "Chúc bạn may mắn lần sau.";
        }
        else {
            alert("Chúc mừng bạn đã trúng tuyển.");
            document.getElementById("xuattrungtuyen").style.display = "block"
            document.getElementById("xuattrungtuyen").innerHTML = "Chúc mừng bạn đã trúng tuyển.";
        }
    }
}