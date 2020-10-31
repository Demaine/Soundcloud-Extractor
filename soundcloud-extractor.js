if (location.hostname == "soundcloud.com"){
  var targets=document.querySelectorAll(".userMain .soundTitle__titleContainer");
  let s="";
  for(i=0; i<targets.length; i++){
    var item=targets[i].querySelector(".soundTitle__title");
    var title=item.innerText;
    var link=item.href;
    var date=item.querySelector(".relativeTime").dateTime;
    s+=`<div><a href="${link}">${title}</a>[${date}]</div>`;
  }
  myWindow=window.open('','');
  myWindow.document.write(s);
  myWindow.focus();
}
else {
  alert("This extractor only works on Soundcloud.com!");
}