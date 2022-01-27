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
    const cardContent = document.getElementsByClassName("card-content");
    console.log(
        );
    for(let i = 0; i < 10; i+=1)
    {
        // pet image
        cardImage[i].children[0].attributes["src"].value = pets[i]["images"]["0"];

        // pet details
        cardImage[i].children[1].innerText = `${pets[i]["name"]} | ${pets[i]["animal"]}\n${pets[i]["breed"]} | ${pets[i]["city"]} ${pets[i]["state"]}`;
        
        // pet descripion
        cardContent[i].children[0].innerText = pets[i]["description"]

        // console.log(pets[i]["name"], pets[i]["animal"], pets[i]["breed"], pets[i]["state"], pets[i]["city"], pets[i]["description"], pets[i]["images"])
    }
}
