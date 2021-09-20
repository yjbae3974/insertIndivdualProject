
// function alignList(list){
    // li = list.querySelector('li');
    // $(list).css({
        // 'border-left': 'solid black 1px',
        // 'border-right': 'solid black 1px'
    // });
// }
let vocas = new Array();
// let lis = new Array();

function addVocaSet(voca, meaning) {
    var vocaSet = new Object();
    var ul = document. getElementsByClassName("vocabularySets")[0];
    var li = document. createElement("li");
    vocaSet.voca = voca;
    vocaSet.meaning = meaning;
    vocas.push(vocaSet);
    li. appendChild(document. createTextNode(vocaSet.voca + '\t' + vocaSet.meaning));
    ul. appendChild(li);
    var button = document.createElement("button");
    li.appendChild(button);
    button.innerText = "X";
    button.addEventListener("click", removeButton);
}

function modifyVocaSet(voca, meaning){
    var ul = document. getElementsByClassName("vocabularySets")[0];
    var liIndex =  vocas.findIndex(obj => {return obj.voca === voca});
    // console.log(a);
    // console.log($("ul li:nth-child("+a+")").firstChild);
    ul.children[liIndex].childNodes[0].nodeValue = voca + "\t" + meaning;
    console.log(ul.children[liIndex].childNodes[0]);
    //  = voca + "\t" + meaning;
    // innerText = voca + "\t" + meaning;
}
//vocas.findIndex(obj => {return obj.voca === voca})

// function addVocaSet(voca, meaning) {
//     var vocaSet = new Object();
//     var ul = document. getElementsByClassName("vocabularySets")[0];
//     var li = document. createElement("li");
//     vocaSet.voca = voca;
//     vocaSet.meaning = meaning;
//     vocas.push(vocaSet);
//     li. appendChild(document. createTextNode(voca + '\t' + meaning));
//     ul. appendChild(li);
//     var button = document.createElement("button");
//     li.appendChild(button);
//     button.innerText = "X";
//     button.addEventListener("click", removeButton);
// }


// function showVocaSet(){
//     for (i = 0; i < array.length; i++)
//     document.writeln((i+1) + ": " + array[i]);
//     var ul = document. getElementsByClassName("vocabularySets")[0];
//     var li = document. createElement("li");
//     for
//     li. appendChild(document. createTextNode(voca + '\t' + meaning));
//     ul. appendChild(li);
//     var button = document.createElement("button");
//     li.appendChild(button);
//     button.innerText = "X";
//     button.addEventListener("click", removeButton);//remove버튼에 array에서도 지우는 기능 추가
// }


function plusClicked(){
    var addVocabulary = document.getElementsByClassName('vocabulary')[0].value.trim();
    var addMeaning = document.getElementsByClassName('meaning')[0].value.trim();

    if (!addVocabulary | !addMeaning){
        alert('fill the blank!');
    }
    else{
        if(vocas.find(obj => {return obj.voca === addVocabulary})){

            var splitMeaning = vocas[vocas.findIndex(obj => {return obj.voca === addVocabulary})].meaning.split(/[\s,]+/);
            var accord = false;
            for(var i = 0; i < splitMeaning.length; i++){
                if(splitMeaning[i] === addMeaning){
                    accord = true;
                    break;
                }
            }

            if(accord){
                alert("already have same voca!");

            }
            else{
                vocas[vocas.findIndex(obj => {return obj.voca === addVocabulary})].meaning = vocas[vocas.findIndex(obj => {return obj.voca === addVocabulary})].meaning + ", " + addMeaning;
                modifyVocaSet(vocas[vocas.findIndex(obj => {return obj.voca === addVocabulary})].voca, vocas[vocas.findIndex(obj => {return obj.voca === addVocabulary})].meaning);
                // showVocaSet();
            }
        }
        else{
            addVocaSet(addVocabulary, addMeaning);
            // showVocaSet();
        }
    }
}

    
function removeButton(event){//remove버튼에 array에서도 지우는 기능 추가
    console.log(vocas.findIndex(obj => {return obj.voca === event.target.parentElement.innerText.split(' ')[0]}));
    vocas.splice(vocas.findIndex(obj => {return obj.voca === (event.target.parentElement.innerText.split(' ')[0])}), 1);
    var removingOne = event.target.parentElement;
    removingOne.remove();
}

function reset(){
    vocas = [];
    document.getElementsByClassName('vocabularySets')[0].innerHTML = '';
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