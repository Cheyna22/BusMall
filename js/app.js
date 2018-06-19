'use Strict';

// array to hold pictures
Pics.gallery = [];
Pics.clickTracker = 0;


// access the element by id
Pics.imgElements = document.getElementsByClassName('pictures');

// constructor to make random pic instances
function Pics(filepath, displayName, picId) {
  this.filepath = filepath;
  this.displayName = displayName;
  this.clickNum = 0;
  this.showNum = 0;
  this.picId = picId;
  Pics.gallery.push(this);
}

// generate random number, multiply by gallery array length, then round down to pick out 3 random pics
Pics.randomPic = function(index) {
  for(var i = 0; i < 3; i++) {
    var randomNum = Math.random() * Pics.gallery.length;
    var roundedDown = Math.floor(randomNum);
    var onePic = Pics.gallery[roundedDown];
    Pics.imgElements[index].src = onePic.filepath.substr(3);
  }
};

// track the number of clicks
Pics.clickTracker = function() {
  Pics.clickTracker++;
};

// track number of times a picture from the array shows
Pics.viewTracker = function() {
  var counter = 0;
  for(var i = 0; i < Pics.gallery.length; i++) {
    if (Pics.gallery[i]=== ) {
      counter++;
    }
  }
  return counter;
};

// make "NEW" instances
new Pics('../img/banana.jpg', 'Banana with cutter', 'banana');
new Pics('../img/bathroom.jpg', 'Ipad on toilet paper roll', 'bathroom');
new Pics('../img/boots.jpg', 'yellow rain boots', 'boots');
new Pics('../img/breakfast.jpg', 'yummy breakfast', 'breakfast');
new Pics('../img/bubblegum.jpg', 'meatball bubblegum', 'bubblegum');
new Pics('../img/chair.jpg', 'red chair with inverted seat', 'chair');
new Pics('../img/dog-duck.jpg', 'dog with duck mouth', 'dog duck');
new Pics('../img/dragon.jpg', 'canned dragon meat', 'dragon');
new Pics('../img/pen.jpg', 'pens with utensil caps', 'pen');
new Pics('../img/pet-sweep.jpg', 'pet sweep dust boots', 'pet sweep');
new Pics('../img/r2d2bag.jpg', 'R2D2 luggage', 'bag');
new Pics('../img/scissors.jpg', 'pizza scissors', 'scissors');
new Pics('../img/shark.jpg', 'shark sleeping bag', 'shark');
new Pics('../img/tauntaun.jpg', 'tauntaun sleeper', 'tauntaun');
new Pics('../img/unicorn.jpg', 'canned unicorn meat', 'unicorn');
new Pics('../img/usb.jpg', '', 'usb');
new Pics('../img/water-can.jpg', 'water can', 'water can');
new Pics('../img/wine-glass.jpg', 'wierd wine glass', 'wine glass');

// attach event listener
Pics.imgElements[0].addEventListener('click', Pics.randomPic(0));
Pics.imgElements[1].addEventListener('click', Pics.randomPic(1));
Pics.imgElements[2].addEventListener('click', Pics.randomPic(2));

// invoke/call
Pics.randomPic();
Pics.clickTracker();
