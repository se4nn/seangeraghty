$(window).scroll(function() {
  
  var $window = $(window),
      $body = $('body'),
      $panel = $('.panel');
  
  var scroll = $window.scrollLeft() + ($window.height() / 3);
 
  $panel.each(function () {
    var $this = $(this);
    
    if ($this.position().left <= scroll && $this.position().left + $this.height() > scroll) {
          
      $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });
       
      $body.addClass('color-' + $(this).data('color'));
    }
  });    
  
}).scroll();

function transformScroll(event) {
  if (!event.deltaY) {
    return;
  }

  event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
  event.preventDefault();
}

var element = document.scrollingElement || document.documentElement;
element.addEventListener('wheel', transformScroll);