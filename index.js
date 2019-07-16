function getFirstSelector(selector){
    return document.querySelector(selector);
}

function nestedTarget(){
    return document.querySelector('#nested .target');
}

function increaseRankBy(n){
    let num = document.querySelectorAll('.ranked-list li');
    for (let i = 0; i < num.length; i++){
        num[i].innerHTML = parseInt(num[i].innerHTML) + n;
    }
}

function deepestChild(){
    return document.querySelector('#grand-node div div div div');
}