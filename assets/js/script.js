var element_to_scroll_to = document.getElementById('anchor1');


var yo = document.getElementById('123');
console.log(yo)

yo.addEventListener('click', ()=>{

  console.log("ok")
  element_to_scroll_to.scrollIntoView({behavior: "smooth"});

})
