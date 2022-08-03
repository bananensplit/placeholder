document.getElementById("firstname").addEventListener("keyup", event_listener, false);
document.getElementById("firstname").addEventListener("change", event_listener, false);
document.getElementById("secondname").addEventListener("keyup", event_listener, false);
document.getElementById("secondname").addEventListener("change", event_listener, false);

function names_to_numbers(name1, name2) {
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

function calc_match(name1, name2) {
    data = names_to_numbers(name1, name2);

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

function event_listener(event) {
    let name1 = document.getElementById("firstname").value;
    let name2 = document.getElementById("secondname").value;
    let erg = Math.max(calc_match(name1, name2), calc_match(name2, name1));
    document.getElementById("percent").innerHTML = name1 == "" || name2 == "" ? "--%" : erg + "%";
}
