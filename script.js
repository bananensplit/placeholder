const koalaApi = "https://some-random-api.com/img/koala";

function otherKoala() {
  fetch(koalaApi)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("img").src = data.link;
    })
    .catch((error) => console.log(error));
}

otherKoala();