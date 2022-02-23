let resizeThis = document.getElementById('resizeme');
let movingThis = document.getElementById('from-left');
let height = window.innerHeight;

window.addEventListener("scroll", (event) => {
    let unit = height / 100;
    let scroll = this.scrollY;
    let percentage = (scroll / unit);
    let moveamount = -300 + (percentage / 5);
    let info = document.getElementsByClassName('info')[0];
    console.log(percentage)
    movingThis.style["marginLeft"] = moveamount + "vw";
    if (scroll > 25) {
        info.style["opacity"] = 0;
    } else {
        info.style["opacity"] = 1;
    }
});