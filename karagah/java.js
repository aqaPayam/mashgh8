function def(){
    document.getElementById("text").setAttribute("align","center");
}
function submit(){
    var temp=confirm("ایا مطمئن هستید؟");
    if (temp==true){
        alert("انجام شد");
    }
}