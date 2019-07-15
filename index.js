import { BADFLAGS } from "dns";

function getFirstSelector(selector) {
      return document.querySelector(selector)
}

function nestedTarget() {
    return document.querySelector('#nested .target')
}


function deepestChild() {
    return recDeepestChild(document.querySelector('#grand-node'))
}

function maxBy(arr) {
    var result = arr.map(function (el) {
      return maxDepth(el);
    });
    var min = Math.max.apply(null, result);
    return arr[result.indexOf(min)];
  }


function recDeepestChild(ele) {
    if (ele.childElementCount === 0){
        return ele
    }
    return recDeepestChild(maxBy(Array.from(ele.childNodes)))
}


function maxDepth(ele){
    if (ele.childElementCount === 0){
        return 1;
    }
    
    const childrenSols = Array.from(ele.childNodes).map(
        function(child){
            return 1 + maxDepth(child)
        }
    )
    return Math.max(...childrenSols)
    
}

function increaseRankBy(n) {
    const lists = document.querySelectorAll('.ranked-list li')
    for (const node of lists) {
        node.innerHTML = Number.parseInt(node.innerHTML) + n
    }
}

