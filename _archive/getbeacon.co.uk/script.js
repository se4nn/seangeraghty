function hide() {
var theSubmitButton = document.getElementById('mc-embedded-subscribe');

theSubmitButton.onclick = function(){
      if($("#mce-success-response").css("display", "block")) {
    	var theFormItself = 
		document.getElementById('mc-embedded-subscribe');
		theFormItself.style.display = 'none';
		var theFormItself = 
		document.getElementById('mce-FNAME');
		theFormItself.style.display = 'none'; 
		var theFormItself = 
		document.getElementById('mce-EMAIL');
		theFormItself.style.display = 'none'; 
    }
}
}