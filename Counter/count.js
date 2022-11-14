let num = 0;
console.log(num)
let buttons = document.querySelectorAll('.button');
console.log(buttons);
debugger
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == '+') {
            num = num + 1;
            document.querySelector("p").innerHTML = num;
            console.log(num);
        }
        if (e.target.innerHTML == '-') {
            num = num - 1;
            document.querySelector("p").innerHTML = num;
        }
        if (e.target.innerHTML == 'Reset') {
            num = 0;
            document.querySelector("p").innerHTML = num;
        }
    })
})