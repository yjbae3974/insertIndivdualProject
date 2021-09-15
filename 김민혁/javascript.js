// function alignList(list){
    // li = list.querySelector('li');
    // $(list).css({
        // 'border-left': 'solid black 1px',
        // 'border-right': 'solid black 1px'
    // });
// }

function addVocaSet(voca, meaning) {
    var ul = document. getElementById("vocabularySets");
    var li = document. createElement("li");
    li. appendChild(document. createTextNode(voca + '\t' + meaning));
    ul. appendChild(li);

    // alignList(ul);
    }

function plusClicked(){
    var addVocabulary = document.getElementById('vocabulary').value;
    var addMeaning = document.getElementById('meaning').value;

    if (!addVocabulary | !addMeaning){
        alert('fill the blank!');
    }
    else{
        addVocaSet(addVocabulary, addMeaning);
        // removeButton();
    }
}

function removeButton(){
    
}