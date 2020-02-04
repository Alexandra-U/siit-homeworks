document.querySelector('form').addEventListener('submit', handleSubmit);

/*
  Functia asta trateaza submit-ul formularului, ideea e sa nu
  permita submit daca avem vreo eroare.

  Prin urmare va verifica daca field-urile au valori valide
  si va blocka submit-ul in caz contrar.

  Parametrul e pe care il primeste reprezinta obiectul eveniment
  care ne permite sa influentam evenimentul, de exemplu sa oprim
  comportamentul implicit (reincarcarea paginii).
*/
function handleSubmit(e) {
  const reqFields = document.querySelectorAll('.js-required');
  const radios = document.querySelectorAll('[name=gender]');
  const select = document.querySelector('select');

  //fielduri in care se completeaza
  for(let i = 0; i < reqFields.length; i++) {
    const field = reqFields[i];

    // Nu s-a completat un field de tip text
    if(field.value === '') {
      const errorMessage = showErrorMessage('Please fill in the field named ' + field.name + '!');

      console.warn('The field named', field.name, "is empty");
      field.style.border = '1px solid #c00';
      field.addEventListener(
        'change', 
        () => {
          removeErrorState(field);
          hideErrorMessage(errorMessage);
        }, 
        { once: true }
      );
      e.preventDefault();
    }
  }
  
  //radios

  if(!radios[0].checked && !radios[1].checked) {
    const parent = radios[0].parentElement.parentElement;
    parent.style.border = '1px solid #c00';
    
    const errorMessage = showErrorMessage('Please select a gender!');

    radios[0].addEventListener('change', () => {
      removeErrorState(parent);
      hideErrorMessage(errorMessage);
    });
    radios[1].addEventListener('change', () => {
      removeErrorState(parent);
      hideErrorMessage(errorMessage);
    });
    console.warn('The gender is missing');
    e.preventDefault();
  }

  console.log(reqFields);
}

//remove error when fields are filled

function removeErrorState(elem) {
  elem.style.border = '1px solid #afafaf'
}

function hideErrorMessage(messageRef) {
  messageRef.remove();
}

//error message

function showErrorMessage(message) {
  const i = document.createElement('i');
  i.classList.add('fas','fa-exclamation-triangle');
  
  const p = document.createElement('p');
  p.style.border = '1px solid #c00';
  p.style.backgroundColor = '#f5847d';
  p.style.color = '#c00';
  p.style.padding = '5px';
  
  p.innerHTML = message;
  
  const form = document.querySelector('form');
  
  //form.appendChild(p);
  p.prepend(i);
  form.prepend(p);
  

  return p;
}

//success message

function showSuccessMessage() {
  if(document.location.search === '') {
    return;
  }

  const p = document.createElement("p");
  const i = document.createElement("i");
  p.classList.add('success-message');
  i.classList.add('fas','fa-check');
  

  // let user = '';
  // for (const pair of document.location.search.split('&')) {
  //   if(pair.includes('name=')) {
  //     user = pair.split('=')[1];
  //     break;
  //   }
  // }

  // p.innerHTML = "Thanks for contacting " + user;

  const pairs = window.location.search.split("&");
  const query = window.location.search.substring(19);
  let user = "";
  for(let i = 0; i < pairs.length; i++) {
    const pair = pairs[i];
    const fields = pair.split("=");
    if(pair.includes("name=")) {
      user = fields[1];  
    } 
   
    console.log(fields[0], "=", fields[1]);
  }
  p.innerHTML = "Thanks for contacting us " + user;

  const form = document.querySelector("form");
  form.prepend(p);
  p.prepend(i);

  setTimeout(hideSuccessMessage, 3000);
}

//hide sucess messgae

function hideSuccessMessage() {
  // const messageContainer = document.querySelector('.success-message'); //.remove();
  // let opacity = 1;
  // const interval = setInterval(function() {
  //   opacity = (opacity - 0.05).toFixed(2);
  //   messageContainer.style.opacity = opacity;
  //   console.log(opacity);
    
  //   if(opacity <= 0) {
  //     //console.log('aici', opacity);
  //     clearInterval(interval);
  //   }
  // }, 50)
  document.querySelector('.success-message').classList.add('fade-out');
}

// Insert image using only JS

const testImg = document.createElement("img");
testImg.src = "https://www.petmd.com/sites/default/files/petmd-puppy-weight.jpg";
document.body.prepend(testImg);


// showSuccessMessage();

// Se executa cand este terminat DOM-ul
window.addEventListener('DOMContentLoaded', showSuccessMessage);
window.addEventListener('DOMContentLoaded', () => console.log('DOM Loaded'));

// Se executa cand sunt incarcate toate resursele externe de pe pagina (imagini, css, js etc.)
window.addEventListener('load', () => console.log('Load'))