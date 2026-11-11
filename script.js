function login() {
    let name = document.getElementById("name").value;
    alert("Welcome " + name);

    document.getElementById("question").innerHTML =
        "HTML stands for? A) Hyper Text Markup Language";
}

function showResult() {
    document.getElementById("result").innerHTML =
        "Your Score: 1/1";
}