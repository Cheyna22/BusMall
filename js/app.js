'use Strict';

// array to hold pictures
Pics.gallery = [];

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


// attach event listener
Pics.randomPic = function(index) {
  for(var i = 0; i < 3; i++) {
    var randomNum = Math.random() * Pics.gallery.length;
    var roundedDown = Math.floor(randomNum);
    var onePic = Pics.gallery[roundedDown];
    Pics.imgElements[index].src = onePic.filepath.substr(3);
  }
};

// make "NEW" instances
new Pics('../img/banana.jpg', 'Banana with cutter', 'banana');
new Pics('../img/bathroom.jpg', 'Ipad on toilet paper roll', 'bathroom');
new Pics('../img/boots.jpg', 'yellow rain boots', 'boots');
new Pics('../img/breakfast.jpg', 'yummy breakfast', 'breakfast');
new Pics('../img/bubblegum.jpg', 'meatball bubblegum', 'bubblegum');
new Pics('../img/chair.jpg', 'red chair with inverted seat', 'chair');
new Pics('../img/cthulhu.jpg', 'green alien dude', 'cthulhu');





Pics.imgElements[0].addEventListener('click', Pics.randomPic(0));
Pics.imgElements[1].addEventListener('click', Pics.randomPic(1));
Pics.imgElements[2].addEventListener('click', Pics.randomPic(2));


Pics.randomPic();
