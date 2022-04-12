function type(e) {
    const btn = e.target || e.srcElement;
    let exp = document.getElementById("res").innerHTML;
    const clicked = btn.innerHTML;

    if (btn.id === "btn0" || btn.id === "btn1") exp += clicked;
    else if (exp !== "")
        exp = exp.match(/[/*+-]/)
            ? exp.replace(/[/*+-]/, clicked)
            : exp + clicked;

    document.getElementById("res").innerHTML = exp;
}

function clear(e) {
    document.getElementById("res").innerHTML = "";
}

function evaluate(e) {
    const exp = document.getElementById("res").innerHTML;
    if (/[01]+[/*+-][01]+/.test(exp)) {
        const oprd1 = exp.match(/([01]+)([/*+-])([01]+)/)[1];
        const oprtr = exp.match(/([01]+)([/*+-])([01]+)/)[2];
        const oprd2 = exp.match(/([01]+)([/*+-])([01]+)/)[3];

        document.getElementById("res").innerHTML = Math.floor(
            eval(parseInt(oprd1, 2) + oprtr + parseInt(oprd2, 2))
        ).toString(2);
    }
}

document
    .querySelectorAll(".numbersClass, .operationsClass")
    .forEach((e) => (e.onclick = type));

document.querySelectorAll("#btnClr").forEach((e) => (e.onclick = clear));
document.querySelectorAll("#btnEql").forEach((e) => (e.onclick = evaluate));

