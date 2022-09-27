window.addEventListener("load", loadNamesFromURI, false);

document.getElementById("share").addEventListener("click", shareBtnClick, false);

document.getElementById("firstname").addEventListener("keyup", eventListener, false);
document.getElementById("firstname").addEventListener("change", eventListener, false);
document.getElementById("secondname").addEventListener("keyup", eventListener, false);
document.getElementById("secondname").addEventListener("change", eventListener, false);


const pairs = [     // pairs of names for which confetti will be displayed
    ["me", "myself"],
    ["i", "me"],
]


function loadNamesFromURI() {
    const urlParams = new URLSearchParams(window.location.search);
    let name1 = urlParams.get("n1") || "";
    let name2 = urlParams.get("n2") || "";
    document.getElementById("firstname").value = name1;
    document.getElementById("secondname").value = name2;
 
    updateNames(name1, name2);
}

function namesToNumbers(name1, name2) {
    let erg = [];
    name1 = name1.toUpperCase();
    name2 = name2.toUpperCase();

    while (name1.length > 0) {
        let chr = name1[0];
        erg.push(name1.split("").filter((x) => x == chr).length + name2.split("").filter((x) => x == chr).length);
        name1 = name1.replaceAll(chr, "");
        name2 = name2.replaceAll(chr, "");
    }

    while (name2.length > 0) {
        let chr = name2[0];
        erg.push(name2.split("").filter((x) => x == chr).length);
        name2 = name2.replaceAll(chr, "");
    }

    return erg;
}

function calcMatch(name1, name2) {
    data = namesToNumbers(name1, name2);

    while (data.length > 2) {
        let erg = [];
        for (let i = 0; i < Math.floor(data.length / 2); i++) {
            erg.push(data[i] + data[data.length - 1 - i]);
        }
        if (data.length % 2 != 0) erg.push(data[Math.round((data.length - 1) / 2)]);
        data = erg;
    }

    return parseInt(data.join(""));
}

function updateNames(name1, name2) {
    let erg = Math.max(calcMatch(name1, name2), calcMatch(name2, name1));
    document.getElementById("percent").innerHTML = name1 == "" || name2 == "" ? "--%" : erg + "%";

    if (name1.toUpperCase() == name2.toUpperCase()) return;
    if (pairs.some(el => el.includes(name1) && el.includes(name2))) {
        startConfetti();
        setTimeout(stopConfetti, 3000);    
    }
}

function eventListener(event) {
    let name1 = document.getElementById("firstname").value;
    let name2 = document.getElementById("secondname").value;
    updateNames(name1, name2);
}

function shareBtnClick(event) {
    let name1 = document.getElementById("firstname").value;
    let name2 = document.getElementById("secondname").value;
    
    if (name1 == "" && name2 == "") {
        navigator.clipboard.writeText(`${window.location.href}`);
    } else {
        navigator.clipboard.writeText(`${window.location.href}?n1=${name1}&n2=${name2}`);
    }

    document.getElementById("share").classList.add("success");
    setTimeout(() => document.getElementById("share").classList.remove("success"), 1000);
}