/*

const txt1 = document.getElementById('Mijntekst');
const txt2 = document.getElementById('Mijntekst2');
const btn1 = document.getElementById('mijnKnop');
const out1 = document.getElementById('output1');
const out2 = document.getElementById('output2');

function fun1() {
    out1.innerHTML = txt1.value;
}

function fun2() {
    out2.innerHTML = txt2.value;
}


btn1.addEventListener('click',fun1,);
btn1.addEventListener('click',fun2,);

*/

//De code van Look

function commitcomment() {
    var element = document.createElement('div');
    var text = document.getElementById("commenttext").value;
    var comname = document.getElementById("commentname").value;
    // var newComment = document.getElementById('tag-id').innerHTML = text;

    if (text != "") {
        event.preventDefault()
        console.log('Adding comment');
        element.innerHTML = "Naam: " + comname + "<br><brx>" + "Opmerking: "   + "<br><brx>" + text;
        element.className = "card card-body bg-light";
        document.getElementById('commentbox').appendChild(element);
        // document.body.appendChild(element);

    } else {
        alert("Het is leeg!")
    }
}

document.getElementById("commitcom").addEventListener("click", commitcomment);