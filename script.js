const h2 = document.createElement('h2');
h2.textContent = "This content added by JavaScript";

document.querySelector('body').appendChild(h2);
h2.addEventListener('click', function() {
  alert('I was clicked!');
})
//////////

const subHeader = document.createElement('h3');

function addingEventListener() {
  const a = document.getElementsByClassName('a');
  a.addEventListener('click', function() {
    alert('I was clicked!');
  }); 
}


