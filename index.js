function getFirstSelector(selector){
    return document.body.querySelector(selector);
}

function nestedTarget() {
    return document.querySelector('#nested .target')
  }

  function deepestChild() {
    var node = document.querySelectorAll('#grand-node div')
    return node[node.length-1]
  }

  function increaseRankBy(n) {
    const rList = document.querySelectorAll('.ranked-list li')
    for(let i = 0; i < rList.length; i++) {
      rList[i].innerHTML = (parseInt(rList[i].innerHTML) + n).toString()
    }
  }