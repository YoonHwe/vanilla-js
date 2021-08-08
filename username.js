const username = document.querySelector("#username");
const usernameInput = document.querySelector("#username input:first-child");
const usernameSubmit = document.querySelector("#username_submit");
const usernameInputs = document.querySelector("#username_input");
const showUsername = document.querySelector("#username h1");
const savedUsername = localStorage.getItem("username");
console.log(savedUsername);
if(savedUsername === null){
    usernameInputs.classList.remove("hidden");
    showUsername.classList.add("hidden");
}
else{
    usernameInputs.classList.add("hidden");
    showUsername.classList.remove("hidden");
    showUsername.innerText = `Hello! ${savedUsername}`;
}

function submitName(event){//이름 제출 => 제출 하면 이름 보이게 & 제출폼 안보이게
    event.preventDefault();
    console.log(usernameInput.value);
    const usernameStore = usernameInput.value;
    localStorage.setItem("username", usernameStore);
    const usernameGot = localStorage.getItem("username");
    showUsername.innerText = `Hello! ${usernameGot}`;
    usernameInputs.classList.add("hidden");
    showUsername.classList.remove("hidden");
}
usernameSubmit.addEventListener("click", submitName);