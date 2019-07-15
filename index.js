
function getFirstSelector(selector) {
    return document.querySelector(selector);
}

function nestedTarget() {
    // y tho
    return document.querySelector('#nested .target');
}

function child(parent) {
    const select = parent.querySelector("div")
    // console.log(select);
    if (select != null) {
        return child(select);
    }
    return parent;
}

function deepestChild() {
    const grand = document.querySelector('#grand-node');
    const select = child(grand);
    return select;
}

function increaseRankBy(n) {
    const lists = document.querySelectorAll(".ranked-list");
    // console.log(lists);
    for (let i = 0; i < lists.length; i++) {
        // console.log("yo: " + lists[i].textContent);
        let text = lists[i].textContent.split();
        for (let j = 0; j < text.length; j++) {
            const intValue = parseInt(text[j]);
            text[j] = intValue+1;
        }
        const newText = text.join();
        lists[i].textContent = newText;
    }
    
}