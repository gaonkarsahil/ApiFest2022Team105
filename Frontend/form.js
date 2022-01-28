  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

   const value = Object.fromEntries(data.entries());
    const res = axios.post('https://e9417bf7-9a02-4eea-9a7c-d7a14b70deb3.mock.pstmn.io/pet', value);
    // console.log({ value });
  }

  const form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);