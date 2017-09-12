function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  var nodes = document.querySelectorAll('div.target');
  return nodes[0];
}

function deepestChild(){
  var deepestChild;
  var nodes = document.getElementById('grand-node').querySelectorAll('div');
  for(let i = 0; i < nodes.length; i++){
    if(nodes[i].querySelectorAll('div').length === 0){
      deepestChild = nodes[i];
      return deepestChild;
    }
  }
}

function increaseRankBy(n){
  var nodes = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < nodes.length; i++){
    nodes[i].innerHTML = parseInt(nodes[i].innerHTML) + parseInt(n);
  }
}
