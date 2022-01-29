  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

   const value = Object.fromEntries(data.entries());
    const res = axios.post('https://98984d34-f838-4335-a78f-9af1233d88d6.mock.pstmn.io/pet', value);
    // console.log({ value });
  }

  const form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);