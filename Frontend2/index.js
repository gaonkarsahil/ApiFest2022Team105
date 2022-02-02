  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });


    fetch('https://restaurantsah.herokuapp.com/restaurants')
    .then(resp => resp.json())
        .then(resp => console.log(resp))