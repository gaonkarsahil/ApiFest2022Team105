  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

  
function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

   const value = Object.fromEntries(data.entries());
    const res = axios.post('https://restaurantsah.herokuapp.com/restaurants', value);
    // console.log({ value });
  }

  const form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);