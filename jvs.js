
let slideindex = 1;
displayNextphoto(slideindex);
function nextbuttonworking(n) {
    displayNextphoto(slideindex += n);
}
function displayNextphoto(n) {
    let eachpic = document.getElementsByClassName("photos");
    if (n > eachpic.length) {
        slideindex = 1;
    }
    if (n < 1) {
        slideindex = eachpic.length;
    }
    for (let i = 0; i < eachpic.length; i++) {
        eachpic[i].style.display = "none";
    }
    eachpic[slideindex - 1].style.display = "block";
    console.log(eachpic.length);

}