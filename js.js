let resizeThis = document.getElementById('resizeme')
let height = window.innerHeight;

window.addEventListener("scroll", (event) => {
    let unit = height / 100;
    let scroll = this.scrollY;
    let percentage = (scroll / unit)/100;
    let resizeAmount = (1 - percentage);
    console.log(percentage)
    console.log(resizeAmount)
    resizeThis.style["transform"]= "scaleY("+ resizeAmount +")" 
});