var id = function(el) {
	return document.getElementById( el );
}
var $btn = id('btn-fade'),
	$img = id('img-fade');

$btn.onclick = function(){
	var $this = this;


	if( $img.className ==='fade-out' ){
		$img.className = 'fade-in';
		$this.innerHTML = 'FadeOut';
	} else {
		$img.className = 'fade-out';
		$this.innerHTML = 'FadeIn';
	}
}
