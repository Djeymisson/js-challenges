function rotate() {
    const btns = document.getElementsByClassName("buttonsClass");

    const temp = btns[0].innerHTML;
    btns[0].innerHTML = btns[3].innerHTML; //
    btns[3].innerHTML = btns[6].innerHTML; //
    btns[6].innerHTML = btns[7].innerHTML;
    btns[7].innerHTML = btns[8].innerHTML;
    btns[8].innerHTML = btns[5].innerHTML; //
    btns[5].innerHTML = btns[2].innerHTML; //
    btns[2].innerHTML = btns[1].innerHTML;
    btns[1].innerHTML = temp;
}

