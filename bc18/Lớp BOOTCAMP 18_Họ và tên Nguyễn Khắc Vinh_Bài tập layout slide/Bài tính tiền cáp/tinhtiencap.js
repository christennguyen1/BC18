
function chonkhachhang() {
    var chonKhachHangEle = document.querySelector('input[name="selector"]:checked').value;
    if(chonKhachHangEle==="nhadan"){
        document.getElementById("nhadan").style.display = "block"
        document.getElementById("doanhnghiep").style.display = "none"
    }
   else if(chonKhachHangEle==="doanhnghiep"){
    document.getElementById("nhadan").style.display = "none"
    document.getElementById("doanhnghiep").style.display = "block"
}
}
 function tongtiennd(){
     var soketNoiElend=document.getElementById("soketnoind").value*1;
     var soKenhCaoCapnd=document.getElementById("sokenhcaocapnd").value*1;
     var phiXuliCoBannd=4.5;
     var tongTienElend=phiXuliCoBannd+soketNoiElend*20.5+soKenhCaoCapnd*7.5;
     console.log(tongTienElend);
     alert("Tổng tiền cáp của hộ là: "+tongTienElend+"$");
     document.getElementById("xuattiennd").style.display="block";
     document.getElementById("xuattiennd").innerHTML="Tổng tiền cáp của hộ là: "+tongTienElend+"$";
 }
function tongtiendn(){
    var soketNoiEledn=document.getElementById("soketnoidn").value*1;
    var soKenhCaoCapdn=document.getElementById("sokenhcaocapdn").value*1;
    var phiXuliCoBandn=15;
    var soKetNoiCoBandn;
    if(soketNoiEledn<=10){
        soKetNoiCoBandn=75*soketNoiEledn;
    }
    else{
        soKetNoiCoBandn=10*75+5*(soketNoiEledn-10);
    }
    var tongTienEledn=phiXuliCoBandn+soKetNoiCoBandn+soKenhCaoCapdn*50;
    console.log(tongTienEledn);
    alert("Tổng tiền cáp của doanh nghiệp là: "+tongTienEledn+"$");
    document.getElementById("xuattiendn").style.display="block";
    document.getElementById("xuattiendn").innerHTML="Tổng tiền cáp của doanh nghiệp là: "+tongTienEledn+"$";
}