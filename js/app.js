document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded');

  // document.getElementById('review').value = 'hidden';

  const select = document.querySelector('#status')
  select.addEventListener('change', revealForm)

  const button = document.querySelector('#new-gig-form')
  button.addEventListener('submit', checkNewEntry)

  const dlt = document.querySelector('#delete-all')
  dlt.addEventListener('submit', deleteAllEntries)

});

const checkNewEntry = function(check) {
  check.preventDefault();
  const input = document.querySelector('input#act');
  console.log(input);

  if ( input.value !== "") {
    submitNewEntry(check);
  } else {
    console.log("act field empty");
  }

}


const submitNewEntry = function (evt) {

  // console.log(evt);

  const list = document.querySelector('#gig-list');

  // get variables for form output
  const act = evt.target.act.value;
  const status = evt.target.status.value;
  const venue = evt.target.venue.value;
  const date = document.getElementById('date').value;
  const review = evt.target.review.value;

  // place variables into li
  const outputAct = document.createElement('li');
  outputAct.classList.add('act',`act-${status}`);
  list.appendChild(outputAct)

  // block act title
  const actElement = document.createElement('h2');
  const actImageElement = document.createElement('img');
  const venueElement = document.createElement('p');
  const dateElement = document.createElement('p');
  const reviewElement = document.createElement('img');

  actElement.classList.add('act-name');
  actImageElement.classList.add('gig-image');
  venueElement.classList.add('venue');
  dateElement.classList.add('date');
  reviewElement.classList.add('review')

  if ( review === "hidden") {
    reviewElement.classList.add('hidden')
  }

  actElement.textContent = `${act}`;
  dateElement.textContent = `Date: ${date}`;

  // add act
  // const act.toString()
  // console.log(actString);
  // if ( act !== "" ) {
    actImageElement.src = `images/${act.toLowerCase().substring(0,4)}.jpg`;
    // console.log(actImageElement.src);
  //   if ( !actImageElement.complete ) {actImageElement.src = `images/default.jpg`;}
  // } else {
  //   actImageElement.src = `images/default.jpg`;
  // }

  venueElement.textContent = `Venue: ${venue}`;

  // adds star images if its an act you've seen, and you've given a rating.
  if (status === "seen" && reviewElement !== "hidden") {
    reviewElement.src = `images/${review}-stars.svg`;
  }

  // Append Items
  outputAct.appendChild(actElement);
  outputAct.appendChild(actImageElement);

  if ( status === "seen" ) {
    outputAct.appendChild(dateElement);
    outputAct.appendChild(venueElement);
    outputAct.appendChild(reviewElement);

  }

  const gigList = document.querySelector('.gig-list-container');
  gigList.classList.remove('hidden');

  const form = document.querySelector('#new-gig-form');

  // form.revealForm();
  form.reset();

  // actImageElement.onError = { actImageElement.src = `images/default.jpg`;}

};


const revealForm = function (reveal) {

  const status = reveal.target.value;
  console.log(status);
  const hiddenElements = document.querySelectorAll('.seen');

    for (const each of hiddenElements){

      if (status === "seen") {
        each.classList.remove('hidden');
      } else if ( !each.classList.contains('hidden')) {
        each.classList.toggle('hidden');
      };
    }

}

const deleteAllEntries = function(dlt) {
  dlt.preventDefault();
  const ul = document.querySelector('ul#gig-list');
  const gick = document.querySelector('section.gig-list-container');
  ul.innerHTML = '';
  // ul.parentNode.removeChild(ul);
  // gick.appendChild(ul);

}
