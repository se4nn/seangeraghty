// HORIZONTAL SCROLL

const spaceHolder = document.querySelector('.space-holder');
const sticky = document.querySelector('.sticky');
const horizontal = document.querySelector('.horizontal');
spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;

function calcDynamicHeight(ref) {
  const vw = window.innerWidth;
  const vh = sticky.offsetHeight;
  const objectWidth = ref.scrollWidth;
  return objectWidth - vw + vh + (0.1 * vw);
}

window.addEventListener('scroll', () => {
  const sticky = document.querySelector('.sticky');
  horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
});

window.addEventListener('resize', () => {
  spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
});

// COLOUR CHANGE

$(document).ready(function() {
  var $body = $('body');
  var $firstPanel = $('.panel').first();
  var firstPanelColor = $firstPanel.data('color');
  
  $body.addClass('color-' + firstPanelColor);
  
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var $panel = $(entry.target);
      
      if (entry.isIntersecting && entry.intersectionRatio >= 1) {
        var color = $panel.data('color');
        
        $body.removeClass(function (index, css) {
          return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
        });
        
        $body.addClass('color-' + color);
      }
    });
  }, { threshold: 1 });
  
  $('.panel').each(function () {
    observer.observe(this);
  });
});
