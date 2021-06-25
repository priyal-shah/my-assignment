$(function(){

$("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });
});

(function(global){

var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};	
function setvalue(){
	var tt1=document.querySelector('t1').value+"shah";
	insertHtml(t1,tt1);
}

})(window);