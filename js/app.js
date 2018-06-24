'use Strict';

// array to hold pictures
Pics.gallery = [];

// variable to keep track of clicks
Pics.clickTracker = 0;

// track previously displayed pics
Pics.lastDisplayed = [];

// store votes in an array for chart and also for names for chart
Pics.numVotes = [];
Pics.chartNames = [];


// access the element by id
Pics.imgElements = document.getElementsByClassName('pictures');
Pics.ulEl = document.getElementById('results');

// get user results from local storage
Pics.parsedPics = JSON.parse(localStorage.getItem('userResults'));



// constructor to make random pic instances
function Pics(filepath, displayName) {
  this.filepath = filepath;
  this.displayName = displayName;
  this.votes = 0;
  this.timesDisplayed = 0;
  Pics.gallery.push(this);
  Pics.chartNames.push(this.displayName);
}

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
new Pics('../img/cthulhu.jpg', 'green alien buddy');
new Pics('../img/sweep.jpg', 'baby sweeper');



// generate random number, multiply by gallery array length, then round down to pick out 3 random pics and
// make sure no duplicates or repeats (CHECK THREE CONDITIONS do/while)
Pics.randomPic = function() {
  do {
    var randomL = Math.floor(Math.random() * Pics.gallery.length);
    var randomC = Math.floor(Math.random() * Pics.gallery.length);
    var randomR = Math.floor(Math.random() * Pics.gallery.length);
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
    return photo;
  };

  displayPics(randomL, 0);
  displayPics(randomC, 1);
  displayPics(randomR, 2);
  // tracking times displayed
  Pics.gallery[randomL].timesDisplayed++;
  Pics.gallery[randomC].timesDisplayed++;
  Pics.gallery[randomR].timesDisplayed++;
  // tracking total votes
  Pics.gallery[randomL].votes++;
  Pics.gallery[randomC].votes++;
  Pics.gallery[randomR].votes++;
};

// show the list on the screen - use function and for loop - for all the items in the array create a list element and give it content (remember to appendChild!!)
Pics.resultsList = function() {
  for(var i in Pics.gallery) {
    var liEl = document.createElement('li');
    liEl.textContent = `${Pics.gallery[i].displayName} has ${Pics.gallery[i].votes} votes and has been displayed ${Pics.gallery[i].timesDisplayed} times.`;
    Pics.ulEl.appendChild(liEl);
  }
};

// define callback function
Pics.trackClick = function(event) {
  event.preventDefault;
  // increment click tracker
  Pics.clickTracker++;
  if(Pics.clickTracker > 24) {
    // alert user that they have finished the survey
    alert('You have reached 25 clicks.  Thank you for participating!');
    for(var i in Pics.gallery) {
      Pics.numVotes.push(Pics.gallery[i].votes);
    }
    Pics.resultsList();
    Pics.renderChart();
    Pics.imgElements[0].removeEventListener('click', Pics.trackClick);
    Pics.imgElements[1].removeEventListener('click', Pics.trackClick);
    Pics.imgElements[2].removeEventListener('click', Pics.trackClick);

    // set local storage
    localStorage.setItem('userResults', JSON.stringify(Pics.gallery));
  } else {
    Pics.randomPic();
  }
};

// updating the userResults/parsePics array with the new 25 votes
Pics.updateResults = function() {
  localStorage.getItem(Pics.parsedPics.value);
};


// attach event listener
Pics.imgElements[0].addEventListener('click', Pics.trackClick);
Pics.imgElements[1].addEventListener('click', Pics.trackClick);
Pics.imgElements[2].addEventListener('click', Pics.trackClick);

// invoke/call
Pics.randomPic();


// for the chart
Pics.renderChart = function() {
  var ctx = document.getElementById('resultsChart').getContext('2d');

  var resultsChart = new Chart(ctx, { // eslint-disable-line
    type: 'bar',
    data: {
      // make a new array to store names so we can pass it in here
      labels: Pics.chartNames,
      datasets: [{
        label: 'Votes',
        // make a new array to store data so we can pass it in here
        data: Pics.numVotes,
        // can hardcode or creat a variable and pass it in here (need 20 colors)
        backgroundColor: ['#b71c1c', '#880E4F', '#4A148C', '#311B92', '#1A237E', '#0D47A1', '#01579B', '#006064', '#004D40', '#1B5E20', '#b71c1c', '#880E4F', '#4A148C', '#311B92', '#1A237E', '#0D47A1', '#01579B', '#006064', '#004D40', '#1B5E20'],
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Votes Per Product',
        fontSize: 25
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }],
        xAxes: [{
          ticks: {
            autoSkip: false
          }
        }]
      }
    }
  });
};