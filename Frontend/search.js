  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

fetch('http://pets-v2.dev-apis.com/pets?animal=dog')
    .then(resp => resp.json())
        .then(resp => func(resp["pets"]))

const grid = document.getElementsByClassName("card-title");

const func = (pets) => {
    const cardImage = document.getElementsByClassName("card-image");
    console.log();
    for(let i = 0; i < 10; i+=1)
    {
        cardImage[i].children[0].attributes["src"].value = pets[i]["images"]["0"]
        // console.log(pets[i]["name"], pets[i]["animal"], pets[i]["breed"], pets[i]["state"], pets[i]["city"], pets[i]["description"], pets[i]["images"])

    }
}
