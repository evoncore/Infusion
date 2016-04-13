;(function() {

  'use strict';

  console.log('js-module required!');

  var doc,
      prevBtn,
      count,
      laptopImg,
      nextBtn,
      ratingStars,
      header;

  doc = document;
  count = 1;

  // Get Elements

  laptopImg = doc.querySelector('.laptop-img');
  prevBtn = doc.querySelector('#album-slider .prev');
  nextBtn = doc.querySelector('#album-slider .next');
  header = doc.querySelector('header');

  // Add Events

  document.addEventListener('scroll', function(){
    var y = window.pageYOffset;
    var headerHeight = header.offsetHeight;

    if (y >= 1) {
      header.style.height = '52px';
      header.style.opacity = '1';
      header.classList.add('fixed-header');
    } else if (y < 100) {
      header.style.height = '70px';
      header.classList.remove('fixed-header');
    }
  });

  prevBtn.addEventListener('click', function(e) {
    e.preventDefault();

    if (count == 1) {
      count = 4;
      imgEffect();
    } else if (laptopImg.style.opacity == 1) {
      count--;
      imgEffect();
    }

    laptopImg.src = 'img/laptop-img' + count + '.jpg';
  });

  nextBtn.addEventListener('click', function(e) {
    e.preventDefault();

    if (laptopImg.style.opacity == 1) {
      count++;
      imgEffect();
    }

    if (count > 4) {
      count = 1;
    }

    laptopImg.src = 'img/laptop-img' + count + '.jpg';
  });

  laptopImg.style.opacity = 1;
  function imgEffect() {
    var x = .1;
    laptopImg.style.opacity = x;

    var stop = setInterval(function(){
      x += .1;

      if (x >= .9) {
        clearInterval(stop);
      }

      laptopImg.style.opacity = x;
    }, 50);
  }

})();