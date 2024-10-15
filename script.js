//Todo:
let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach(button => {
      button.addEventListener('click', (e) => {
            if (e.target.innerHTML == '=') {
                  string = eval(string);
                  document.getElementById("3").innerHTML = "You Calculated  SuccesFully" + string;
                  document.querySelector('input').value = string;
            }
            else if (e.target.innerHTML == 'C') {
                  string = "";
                  document.getElementById("2").innerHTML = "Earesed SuccessFully" + string;
                  document.querySelector('input').value = string;
            }
            else {
                  console.log(e.target);
                  string = string + e.target.innerHTML;
                  document.querySelector(' input').value = string;

            }

      })
})
