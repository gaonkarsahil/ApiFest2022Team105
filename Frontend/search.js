  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

const search = document.getElementById("search");
const pet_name = document.getElementById("pet_name");
const grid = document.getElementsByClassName("card-title");
const result = document.getElementById("searchResult");

search.addEventListener('click', e => getPet(pet_name.value));

fetch('https://98984d34-f838-4335-a78f-9af1233d88d6.mock.pstmn.io/pet')
    .then(resp => resp.json())
        .then(resp => func(resp))

async function searchPet(arr, name){
  arr.forEach(element => {
    if(element.name === name)
    {
      result.innerHTML = `<div class="card result-card">
                <div class="card-image">
                    <img src=${element["picture"]}>
                    <span class="card-title">${element["name"]}</span>
                </div>
                <div class="card-content">
                    <p>Contact Info<br>Email: ${element["email"]}<br>Phone Number: ${["phone"]}</p>
                </div>
            </div>`
    }
  });
}

async function getPet(name){
  await fetch('https://98984d34-f838-4335-a78f-9af1233d88d6.mock.pstmn.io/pet')
    .then(resp => resp.json())
        .then(resp => searchPet(resp, name))
} 

const func = (pets) => {
    const cardImage = document.getElementsByClassName("card-image");
    const cardContent = document.getElementsByClassName("card-content");
    console.log(
        );
    for(let i = 0; i < 15; i+=1)
    {
        // pet image
        cardImage[i].children[0].attributes["src"].value = pets[i]["picture"]

        // pet details
        cardImage[i].children[1].innerText = `${pets[i]["name"]} | ${pets[i]["breed"]}\n${pets[i]["location"]}`;
        
        // pet descripion
        cardContent[i].children[0].innerText = `Contact Info: \nEmail: ${pets[i]["email"]}\nPhone Number: ${pets[i]["phone"]}`
    }
}
