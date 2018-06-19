'use Strict';

// array to hold pictures
Pics.gallery = [];

// variable to keep track of clicks
Pics.clickTracker = 0;

// track previously displayed pics
Pics.lastDisplayed = [];


// access the element by id
Pics.imgElements = document.getElementsByClassName('pictures');
// Pics.ulEl = document.getElementById('results');

// constructor to make random pic instances
function Pics(filepath, displayName) {
  this.filepath = filepath;
  this.displayName = displayName;
  this.votes = 0;
  this.timesDisplayed = 0;
  Pics.gallery.push(this);
}

// generate random number, multiply by gallery array length, then round down to pick out 3 random pics and
// make sure no duplicates or repeats (CHECK THREE CONDITIONS do/while)
Pics.randomPic = function() {
  do {
    var randomL = Math.floor(Math.random() * Pics.gallery.length);
    var randomC = Math.floor(Math.random() * Pics.gallery.length);
    var randomR = Math.floor(Math.random() * Pics.gallery.length);
    console.log('anything');
  } while (randomC === randomL || randomR === randomL || randomC === randomR
    || Pics.lastDisplayed.includes(randomL)
    || Pics.lastDisplayed.includes(randomC)
    || Pics.lastDisplayed.includes(randomR));

  Pics.lastDisplayed[0] = randomL;
  Pics.lastDisplayed[1] = randomC;
  Pics.lastDisplayed[2] = randomR;

  var displayPics = function(randomIndex, htmlIndex) {
    var photo = Pics.gallery[randomIndex];
    Pics.imgElements[htmlIndex].src = photo.filepath.substr(3);
    Pics.imgElements[htmlIndex].alt = photo.displayName;
    photo.timesDisplayed = photo.timesDisplayed + 1;
    console.log(photo);
    return photo;
  };

  displayPics(randomL, 0);
  displayPics(randomC, 1);
  displayPics(randomR, 2);
};




// track the number of clicks



// make "NEW" instances
new Pics('../img/banana.jpg', 'Banana with cutter');
new Pics('../img/bathroom.jpg', 'Ipad on toilet paper roll');
new Pics('../img/boots.jpg', 'yellow rain boots');
new Pics('../img/breakfast.jpg', 'yummy breakfast');
new Pics('../img/bubblegum.jpg', 'meatball bubblegum');
new Pics('../img/chair.jpg', 'red chair with inverted seat');
new Pics('../img/dog-duck.jpg', 'dog with duck mouth');
new Pics('../img/dragon.jpg', 'canned dragon meat');
new Pics('../img/pen.jpg', 'pens with utensil caps');
new Pics('../img/pet-sweep.jpg', 'pet sweep dust boots');
new Pics('../img/r2d2bag.jpg', 'R2D2 luggage');
new Pics('../img/scissors.jpg', 'pizza scissors');
new Pics('../img/shark.jpg', 'shark sleeping bag');
new Pics('../img/tauntaun.jpg', 'tauntaun sleeper');
new Pics('../img/unicorn.jpg', 'canned unicorn meat');
new Pics('../img/usb.jpg', 'usb');
new Pics('../img/water-can.jpg', 'water can');
new Pics('../img/wine-glass.jpg', 'wierd wine glass');



// attach event listener
Pics.imgElements[0].addEventListener('click', function() {
  // this.src;
  console.log(this.src);
  Pics.randomPic(0);
});
Pics.imgElements[1].addEventListener('click', function() {
  console.log('event listener 2');
  Pics.randomPic(1);
});
Pics.imgElements[2].addEventListener('click', function() {
  console.log('event listener 3');
  Pics.randomPic(2);
});

// invoke/call
Pics.randomPic();


// for the chart
// Pics.renderChart = function() {
//   var context = document.getElementById('results-chart').getContext('2d');

//   var infoChart = new CharacterData(context, {
//     type: 'bar',
//     data: {
//       labels: [array of names], // make a new array to store names so we can pass it in here
//       datasets: [{
//         label: 'Votes Per Product',
//         data: [array of data], // make a new array to store data so we can pass it in here
//         backgroundColors: ['#d0caca', '#e17a7a', '#b87e7e', '#F44336'] // can hardcode or creat a variable and pass it in here (need 20 colors)
//       }],
//     },
//     options: {
//       scales: {
//         yAxes: [{
//           ticks: {
//             beginAtZero: true,
//           }
//         }]
//       }
//     }
//   });
// }
