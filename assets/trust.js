/* Promotes the licence line already on each listing card into a credential chip.
   No new facts: the text is copied from the card's own licence line, with the expiry parenthetical left in the tooltip. */
(function(){
  function shortLic(s){
    return String(s||"").replace(/\s+/g," ").replace(/\s*\(exp\.[^)]*\)/ig,"").trim();
  }
  function chip(fullParts){
    var parts=fullParts.map(function(s){return String(s).replace(/\s+/g," ").trim()}).filter(Boolean);
    if(!parts.length)return null;
    var el=document.createElement("span");
    el.className="cred";
    var first=shortLic(parts[0]);
    el.textContent=first+(parts.length>1?" · +"+(parts.length-1)+" more":"");
    el.title=parts.join(" · ");
    return el;
  }
  var cards=document.querySelectorAll(".firm");
  for(var i=0;i<cards.length;i++){
    var card=cards[i],ids=card.querySelectorAll(".ids li"),slot=card.querySelector("summary > div");
    if(!ids.length||!slot||slot.querySelector(".cred"))continue;
    var parts=[];
    for(var j=0;j<ids.length;j++)parts.push(ids[j].textContent);
    var el=chip(parts);
    if(el)slot.appendChild(el);
  }
  var pills=document.querySelector(".fp-pills");
  if(pills&&!pills.querySelector(".cred")){
    var heads=document.querySelectorAll("main h2");
    for(var h=0;h<heads.length;h++){
      if(heads[h].textContent.replace(/\s+/g," ").trim()!=="Licence")continue;
      var list=heads[h].parentNode.querySelector(".fp-list");
      if(!list)break;
      var lis=list.querySelectorAll("li"),fp=[];
      for(var k=0;k<lis.length;k++)fp.push(lis[k].textContent);
      var c=chip(fp);
      if(c)pills.appendChild(c);
      break;
    }
  }
})();
