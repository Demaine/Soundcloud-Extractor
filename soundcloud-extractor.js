javascript:(function(){
  var targets=document.querySelectorAll(".userMain .soundTitle__titleContainer");
  let s="";
  for (i=0; i<targets.length; i++) {
    var title=targets[i].querySelector(".soundTitle__title").innerText;
    s+=`<div><a href="#">${title}</a></div>`;
  }
  myWindow=window.open('','');
  myWindow.document.write(s);
  myWindow.focus();
})()