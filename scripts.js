// HORIZONTAL SCROLL

const spaceHolder = document.querySelector('.space-holder');
const horizontal = document.querySelector('.horizontal');
spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;

function calcDynamicHeight(ref) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const panelCount = document.querySelectorAll('.panel').length;
  const gapSize = 5; // Adjust the gap size as needed
  const totalGap = (panelCount - 1) * gapSize;

  if (vw >= 720) {
    return (panelCount * (0.8 * vh)) + (totalGap * (vw / 100)); // 80vh per panel including gaps
  } else {
    return (panelCount * (0.8 * vw)) + (totalGap * 1.8 * (vw / 100)); // 80vw per panel including gaps
  }
}

$(document.body).on('touchmove', scrollGallery); // for mobile
$(window).on('scroll', scrollGallery); 

// callback
function scrollGallery(){ 
  requestAnimationFrame(() => {
    const sticky = document.querySelector('.sticky');
    horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
  });
}

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
