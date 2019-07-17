function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}

function  increaseRankBy(n) {
  const lists = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i< lists.length; i++) {
    //console.log(parseInt(lists[i].innerHTML) + n)
    lists[i].innerHTML = (parseInt(lists[i].innerHTML) + n).toString()
  }
}
