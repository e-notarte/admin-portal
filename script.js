const chatbox =
document.getElementById("chatbox");

function addMessage(text,type){

    const div =
    document.createElement("div");

    div.style.marginBottom = "10px";

    div.innerHTML =
    `<strong>${type}:</strong> ${text}`;

    chatbox.appendChild(div);

    chatbox.scrollTop =
    chatbox.scrollHeight;
}

function askBot(){

    const input =
    document.getElementById("question");

    const question =
    input.value.trim();

    if(!question) return;

    addMessage(question,"You");

    let answer =
    "I can answer questions about reservations soon.";

    if(question.toLowerCase().includes("conference")){
        answer =
        "Checking conference room schedule...";
    }

    addMessage(answer,"Bot");

    input.value = "";
}