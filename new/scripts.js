const spaceHolder = document.querySelector('.space-holder');
const horizontal = document.querySelector('.horizontal');
spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;

function calcDynamicHeight(ref) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const objectWidth = ref.scrollWidth;
  return objectWidth - vw + vh - 96;
}

window.addEventListener('scroll', () => {
  const sticky = document.querySelector('.sticky');
  horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
});

window.addEventListener('resize', () => {
  spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
});

// $(window).scroll(function() {
  
//   // selectors
//   var $window = $(window),
//       $body = $('body'),
//       $panel = $('.panel');
  
//   // Change 33% earlier than scroll position so colour is there when you arrive.
//   var scroll = $window.scrollLeft() + ($window.width() / 3);
 
//   $panel.each(function () {
//     var $this = $(this);
    
//     // if position is within range of this panel.
//     // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
//     // Remember we set the scroll to 33% earlier in scroll var.
//     if ($this.position().left <= scroll && $this.position().left + $this.width() > scroll) {
          
//       // Remove all classes on body with color-
//       $body.removeClass(function (index, css) {
//         return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
//       });
       
//       // Add class of currently active div
//       $body.addClass('color-' + $(this).data('color'));
//     }
//   });    
  
// }).scroll();