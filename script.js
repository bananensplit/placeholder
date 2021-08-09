otherKoala();

function otherKoala() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(this.responseText);
      document.getElementById("img").src = data.link;
    }
  };
  xhttp.open("GET", "https://some-random-api.ml/img/koala", true);
  xhttp.send();
}
