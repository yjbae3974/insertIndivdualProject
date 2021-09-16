
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
    var button = document.createElement("button");
    li.appendChild(button);
    button.innerText = "X";
    button.addEventListener("click", removeButton);
    }

function plusClicked(){
    var addVocabulary = document.getElementById('vocabulary').value;
    var addMeaning = document.getElementById('meaning').value;

    if (!addVocabulary | !addMeaning){
        alert('fill the blank!');
    }
    else{
        addVocaSet(addVocabulary, addMeaning);
    }
}
    
function removeButton(event){
    var removingOne = event.target.parentElement;
    removingOne.remove();
}

// function createRemoveButton(){
//     var remove_btn = documnet.createElement("BUTTON");
//     remove_btn.id 
// }

// function removeButton(li){
//     list = document.querySelectorAll('li');
//     // var remove_btn;
//     var remove_btn = document.createElement("BUTTON");
//     remove_btn.id = i;
//     remove_btn.className = "remove";
//     remove_btn.onclick = function(){
//         removeChild(remove_btn.id);
//     };
//     for(var i = 0; i < list.length; i++){
//         list[i].appendChild(remove_btn);
//     }    
// }

// var input = document.getElementById('vocabulary') + '\t' + document.getElementById('meaning');
// var button = document.getElementById('plus');
// var list = document.getElementById('vocabularySets');
// var cnt = 1;

// // button.addEventListener('click', clickButton);

// function clickButton() {
//     var temp = document.createElement('li');
//     temp.setAttribute("class", "list-group-item");
//     temp.setAttribute("id", "li"+cnt);
//     temp.innerHTML = input.value;
//     temp.innerHTML += "<button style='float: right;' class='btn btn-outline-secondary' type='button' onclick='remove("+cnt+")'>삭제</button>";
//     list.appendChild(temp);
//     cnt++;
// }

// function remove(cnt) {
//     var li = document.getElementById('li'+cnt);
//     list.removeChild(li);
// }

//제거버튼 생성, 기능 추가
//단어 많아지면 페이지 넘기기
//파일에 저장해서 불러오기(새로고침하면 단어 증발돼서)
//가능하다면 단어에 예문 주석 달기