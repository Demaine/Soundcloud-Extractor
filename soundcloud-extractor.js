if (location.hostname == "soundcloud.com"){
  var targets=document.querySelectorAll(".userMain .soundTitle__titleContainer");
  if (targets.length > 0) {
    let s="";
    for(i=0; i<targets.length; i++){
      var item=targets[i].querySelector(".soundTitle__title");
      var title=item.innerText;
      var link=item.href;
      var date=targets[i].querySelector(".relativeTime").dateTime.slice(0,10);
      s+=`<div><a href="${link}">${title}</a>[${date}]</div>`;
    }
    myWindow=window.open('','');
    myWindow.document.write(s);
    myWindow.focus();
  }
  else {
    alert("Error: No tracks found!");
  }
}
else {
  alert("This extractor only works on Soundcloud.com!");
}