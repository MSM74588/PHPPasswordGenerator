const form = document.querySelector('form')
const ul = document.querySelector('ul')
const button = document.querySelector('button')
const inputt = document.getElementById('item')
let itemsArray = localStorage.getItem('items')
  ? JSON.parse(localStorage.getItem('items'))
  : []

localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))

const liMaker = (text) => {
  const li = document.createElement('li')
  li.textContent = text
  ul.appendChild(li)
}

form.addEventListener('submit', function (e) {
  e.preventDefault()

  itemsArray.push(inputt.value)
  localStorage.setItem('items', JSON.stringify(itemsArray))
  liMaker(inputt.value)
  inputt.value = ''
})

data.forEach((item) => {
  liMaker(item)
})



  
  function getPassword(){
    var chars = "1234567890qwertyuiopasdfghjklzxcvbnm,!@#$%^&*()_+QWERTYUIOP{}ASDFGHJKL:ZXCVBNM<>?";
    var passwordLength = document.getElementById("lengthInput").value;
    var password = "";
    var problem = "Please Enter value greater than 0"
    
    
    
    for (var i=0; i<passwordLength; i++){
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber,randomNumber+1);
    }
    if(passwordLength > 0){
        document.getElementById("password").value = password
    } else {
        document.getElementById("password").value = problem
    }
    
    }


   
   
    function jumblePassword(){



        var insertedText = document.getElementById("jumbleinput").value;

                                 function getRandomInt(n) {
                                  return Math.floor(Math.random() * n);
                                }
                                function shuffle(s) {
                                  var arr = s.split('');           // Convert String to array
                                  var n = arr.length;              // Length of the array
                                
                                  for(var i=0 ; i<n-1 ; ++i) {
                                    var j = getRandomInt(n);       // Get random of [0, n-1]

                                    var temp = arr[i];             // Swap arr[i] and arr[j]
                                    arr[i] = arr[j];
                                    arr[j] = temp;
                                  }

                                  s = arr.join('');                // Convert Array to string
                                  return s;                        // Return shuffled string
                                }
                                var s = insertedText;
                                s = shuffle(s);
                                console.log(s);
                                
        
        document.getElementById("jumblePass").value = s
    }
    
    

    window.onload = function() {
    document.getElementById("lengthInput").focus();
    };

    var input = document.getElementById("lengthInput");
    
    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
           event.preventDefault();
            document.getElementById("myBtn").click();
       }
    });

    
    var input = document.getElementById("lengthInput");
    
    input.addEventListener("keydown", function(event1) {
        if (event1.keyCode === (16 && 67)) {
           event1.preventDefault();
            document.getElementById("password").select();
       }
    });

    // input.addEventListener("keydown", function(event2) {
    //     if (event2.keyCode === 16) {  //shift
    //        event2.preventDefault();
    //         document.getElementsByName("jumbleinput").focus();
    //    }
    // });
    
    
    
    // if(map[16] && map[67]){ // SHIFT+C
    //      var copyText = document.getElementById("password").value;

    //      /* Select the text field */
    //      copyText.select();
    //      /* Copy the text inside the text field */
    //      document.execCommand("copy");

    //      /* Alert the copied text */
    //      alert("Copied the text: " + copyText.value);
    // }

    
    function storage(){

            localStorage.setItem('key', 'value')
        }


            function continuee(){
                localStorage.clear();
                while (ul.firstChild) {
                    ul.removeChild(ul.firstChild)
                  }
            }

            function erase(){
                if (confirm("Are you sure to Clear all Passwords?")) {
                    continuee()
                  } else {
                    exit();
                  }
            }