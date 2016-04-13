$(document).ready(function() {

  'use strict';

  var workers = [

    [ // Start Group 1

      {
        'bgImg': 'img/workers/co-worker-img1.jpg',
        'photo': 'img/workers/co-worker-photo1.jpg',
        'title': 'Lorem ipsum dolor sit amet consectetur',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis suscipit est, ut imperdiet tortor. Proin sed molestie massa.'
      },

      {
        'bgImg': 'img/workers/co-worker-img2.jpg',
        'photo': 'img/workers/co-worker-photo2.jpg',
        'title': 'Lorem ipsum dolor sit amet consectetur',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis suscipit est, ut imperdiet tortor. Proin sed molestie massa.'
      },

      {
        'bgImg': 'img/workers/co-worker-img3.jpg',
        'photo': 'img/workers/co-worker-photo3.jpg',
        'title': 'Lorem ipsum dolor sit amet consectetur',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis suscipit est, ut imperdiet tortor. Proin sed molestie massa.'
      },

      {
        'bgImg': 'img/workers/co-worker-img4.jpg',
        'photo': 'img/workers/co-worker-photo4.jpg',
        'title': 'Lorem ipsum dolor sit amet consectetur',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis suscipit est, ut imperdiet tortor. Proin sed molestie massa.'
      }

    ], // End Group1


    [ // Start Group 2

      {
        'bgImg': 'img/workers/co-worker-img5.jpg',
        'photo': 'img/workers/co-worker-photo5.jpg',
        'title': 'Lorem ipsum dolor sit amet consectetur',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis suscipit est, ut imperdiet tortor. Proin sed molestie massa.'
      },

      {
        'bgImg': 'img/workers/co-worker-img6.jpg',
        'photo': 'img/workers/co-worker-photo6.jpg',
        'title': 'Lorem ipsum dolor sit amet consectetur',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis suscipit est, ut imperdiet tortor. Proin sed molestie massa.'
      },

      {
        'bgImg': 'img/workers/co-worker-img7.jpg',
        'photo': 'img/workers/co-worker-photo7.jpg',
        'title': 'Lorem ipsum dolor sit amet consectetur',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis suscipit est, ut imperdiet tortor. Proin sed molestie massa.'
      },

      {
        'bgImg': 'img/workers/co-worker-img8.jpg',
        'photo': 'img/workers/co-worker-photo8.jpg',
        'title': 'Lorem ipsum dolor sit amet consectetur',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis suscipit est, ut imperdiet tortor. Proin sed molestie massa.'
      }

    ], // End Group 2

    [ // Start Group 3

      {
        'bgImg': 'img/workers/co-worker-img9.jpg',
        'photo': 'img/workers/co-worker-photo9.jpg',
        'title': 'Lorem ipsum dolor sit amet consectetur',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis suscipit est, ut imperdiet tortor. Proin sed molestie massa.'
      },

      {
        'bgImg': 'img/workers/co-worker-img10.jpg',
        'photo': 'img/workers/co-worker-photo10.jpg',
        'title': 'Lorem ipsum dolor sit amet consectetur',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis suscipit est, ut imperdiet tortor. Proin sed molestie massa.'
      },

      {
        'bgImg': 'img/workers/co-worker-img11.jpg',
        'photo': 'img/workers/co-worker-photo11.jpg',
        'title': 'Lorem ipsum dolor sit amet consectetur',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis suscipit est, ut imperdiet tortor. Proin sed molestie massa.'
      },

      {
        'bgImg': 'img/workers/co-worker-img12.jpg',
        'photo': 'img/workers/co-worker-photo12.jpg',
        'title': 'Lorem ipsum dolor sit amet consectetur',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis suscipit est, ut imperdiet tortor. Proin sed molestie massa.'
      }

    ] // End Group 3
  ];

  var nextBtn = $('.controls .next');

  $('.controls .control-btn').on('click', function(e) {
    e.preventDefault();
    
    var _this = $(this);

    for (var i = 0; i < 4; i++) {
      (function() {
        var j = i;
        var duration = 150;
        $('.co-worker img').fadeTo(50, 0.9, function() {
          _this.addClass('current');
          _this.siblings().removeClass('current');
          $('.co-worker img').eq(j).attr('src', workers[_this.index() - 1][j].bgImg).fadeTo(50, 1);
          $('.co-worker .cw-photo').eq(j).css({background: 'url(' + workers[_this.index() - 1][j].photo + ') no-repeat center'});
          $('.co-worker h3').eq(j).innerHTML = (workers[_this.index() - 1][j].title);
          $('.co-worker p').eq(j).innerHTML = (workers[_this.index() - 1][j].text);
        });
      })();
    }
  });

  nextBtn.on('click', function(e) {
  });

});