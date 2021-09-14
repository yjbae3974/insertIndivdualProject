const start = document.querySelector("#start");
const main = document.querySelector(".main");
const qna = document.querySelector(".qna");
const result = document.querySelector(".result");
const HIDDEN_CLASSNAME = "hidden";



function addAnswer(answerText, qNum){
    var answer = document.querySelector(".answerbox");
    var answerButton = document.createElement('button');
    answerButton.classList.add('answerList');
    answer.appendChild(answerButton);
    answerButton.innerHTML = answerText;
    answer.addEventListener("click", function (){
        var children = document.querySelectorAll('.answerList');
        console.log(children)
        for (let i = 0; i < children.length; i++){
            children[i].classList.add(HIDDEN_CLASSNAME);
            
        }
        goNext(++qNum);
    }, false);
}

function goNext(qNum){
    var qBox = document.querySelector(".qBox");
    qBox.innerHTML = qnaList[qNum].q;
    let i;
    for (i in qnaList[qNum].a){
        addAnswer(qnaList[qNum].a[i].answer, qNum);
    }
}

function starttest(){
    main.classList.add(HIDDEN_CLASSNAME);
    qna.classList.remove(HIDDEN_CLASSNAME);
    let qNum = 0;
    goNext(qNum);
}

start.addEventListener("click", starttest);


