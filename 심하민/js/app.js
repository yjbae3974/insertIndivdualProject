const start = document.querySelector("#start");
const main = document.querySelector(".main");
const qna = document.querySelector(".qna");
const result = document.querySelector(".result");
const HIDDEN_CLASSNAME = "hidden";
const end = qnaList.length;
const select = [];
const restart = document.querySelector("#restart");

function calResult(){
    var point = [
        {name: 'mouse', value: 0 , key: 0},
        {name: 'cow', value: 0 , key: 1},
        {name: 'tiger', value: 0 , key: 2},
        {name: 'rabbit', value: 0 , key: 3},
        {name: 'dragon', value: 0 , key: 4},
        {name: 'snake', value: 0 , key: 5},
        {name: 'horse', value: 0 , key: 6},
        {name: 'sheep', value: 0 , key: 7},
        {name: 'monkey', value: 0 , key: 8},
        {name: 'chick', value: 0 , key: 9},
        {name: 'dog', value: 0 , key: 10},
        {name: 'pig', value: 0 , key: 11}
    ]
    for (let i = 0; i<end; i++){
        var target = qnaList[i].a[select[i]];
        for (let j = 0; j<target.type.length; j++){
            for (let k = 0; k<point.length;k++){
                if(target.type[j] === point[k].name){
                    point[k].value += 1;
                }
            }
        }
    }
    var resultArray = point.sort(function(a,b){
        if(a.value>b.value){
            return -1;
        }
        if(a.value<b.value){
            return 1;
        }
        return 0;
    });
    let resultword = resultArray[0].key;
    return resultword;
}

function addAnswer(answerText, qNum, idx){
    var answer = document.querySelector(".answerbox");
    var answerButton = document.createElement('button');
    answerButton.classList.add('answerList');
    answer.appendChild(answerButton);
    answerButton.innerHTML = answerText;
    
    answerButton.addEventListener("click", function (){
        var children = document.querySelectorAll('.answerList');
        for (let i = 0; i < children.length; i++){
            children[i].classList.add('remove');
        }
        var el = document.querySelectorAll('.remove')
        for (let i = 0; i <el.length;i++){
            el[i].remove();
        }
        select[qNum] = idx;
        goNext(++qNum);
    }, false);
}

function setResult(){
    let point = calResult();
    const imgdiv = document.querySelector('.resultImg');
    var resultImg = document.createElement('img');
    var imgURL = 'img/image_' + (point+1) + '.png';
    resultImg.src = imgURL;
    resultImg.alt = point;
    resultImg.classList.add("imgList");
    imgdiv.appendChild(resultImg);
    const resultName = document.querySelector(".resultname");
    resultName.innerHTML = infoList[point].name;

    const resultDescription = document.querySelector(".resultDescription");
    resultDescription.innerHTML = infoList[point].desc;
    
}

function goResult(){
    qna.classList.add(HIDDEN_CLASSNAME);
    result.classList.remove(HIDDEN_CLASSNAME);
    setResult();
}

function goNext(qNum){
    if(qNum === end){
        goResult();
        return;
    }
    var qBox = document.querySelector(".qBox");
    qBox.innerHTML = qnaList[qNum].q;
    let i;
    for (i in qnaList[qNum].a){
        addAnswer(qnaList[qNum].a[i].answer, qNum, i);
    }
    const status = document.querySelector(".statusbar");
    const statusSmall = document.querySelector(".statusbarSmall");
    const state = document.querySelector(".state")
    let percent = 100/end*(qNum+1);
    status.style.width = percent+'%';
    //status.style.opacity = percent*0.01;
    status.innerHTML = "현재 진행률 : " + parseInt(percent) + "%" ;
    statusSmall.style.width = percent+'%';
    // statusSmall.style.opacity = percent*0.01;
    statusSmall.innerHTML = parseInt(percent) + "%" ;
    if (percent<20){
        status.style.fontSize = "8px";
    }
    else{
        status.style.fontSize = "15px";
    }
}

function starttest(){
    main.classList.add(HIDDEN_CLASSNAME);
    qna.classList.remove(HIDDEN_CLASSNAME);
    let qNum = 0;
    goNext(qNum);
}
function restartTest(){
    main.classList.remove(HIDDEN_CLASSNAME);
    result.classList.add(HIDDEN_CLASSNAME);
    const imgList = document.querySelectorAll(".imgList");
    for (let i=0;i<imgList.length;i++)
    imgList[i].classList.add(HIDDEN_CLASSNAME);
}

start.addEventListener("click", starttest);

restart.addEventListener("click", restartTest);

