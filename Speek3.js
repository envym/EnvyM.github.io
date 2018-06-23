 function changeStyleBig(){
             var SizeOftextGet = document.getElementById('textarea').style.fontSize
             var SizeOftextArr = SizeOftextGet.split('');
             var SizeOftextSrting;
             var SizeOftextFinalInt;

              for (var e = 0; e < SizeOftextArr.length; e++){
                if(SizeOftextArr[e] == "p" || SizeOftextArr[e] == "t"){
                  SizeOftextArr[e] = "";}
              }

              SizeOftextSrting = SizeOftextArr.join('');
              SizeOftextFinalInt = parseInt(SizeOftextSrting, 10);
              SizeOftextFinalInt = SizeOftextFinalInt+2;
              document.getElementById('textarea').style.fontSize = SizeOftextFinalInt+'pt';     
}

      function changeStyleSmall(){
             var SizeOftextGet = document.getElementById('textarea').style.fontSize
             var SizeOftextArr = SizeOftextGet.split('');
             var SizeOftextSrting;
             var SizeOftextFinalInt;

              for (var e = 0; e < SizeOftextArr.length; e++){
                if(SizeOftextArr[e] == "p" || SizeOftextArr[e] == "t"){
                  SizeOftextArr[e] = "";}
              }

              SizeOftextSrting = SizeOftextArr.join('');
              SizeOftextFinalInt = parseInt(SizeOftextSrting, 10);
              SizeOftextFinalInt = SizeOftextFinalInt-2;
              document.getElementById('textarea').style.fontSize = SizeOftextFinalInt+'pt';     
}




    var recognizing;
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    reset();
    recognition.onend = reset;

    recognition.onresult = function (event) {
      for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          var words = event.results[i][0].transcript;
        }

        var arr = words.split(' ');

          for (var i = 0; i < arr.length; i++) {
              if (arr[i] == "Антон" && arr[i+1] == "Антон"){
            alert( 'Вам сообщение ' + arr[i] );
            textarea.value += arr[i] + " ";
            //i++;
            arr.splice(i, i+1);
            }
            else if (arr[i] == "сделать" && arr[i+1] == "текст" && arr[i+2] == "больше"){
              changeStyleBig();
              //i = i + 2;
              arr.splice(i, i);
              arr.splice(i, i+1);
              arr.splice(i, i+2);
            }
             else if (arr[i] == "сделать" && arr[i+1] == "текст" && arr[i+2] == "меньше"){
              changeStyleSmall();
              //i = i + 2;
              arr.splice(i, i);
              arr.splice(i, i+1);
              arr.splice(i, i+2);
            }
             else if (arr[i] == "сделать" && arr[i+1] == "текст" && arr[i+2] == "красным"){
               document.getElementById('textarea').style.color = "red";
              arr.splice(i, i);
              arr.splice(i, i+1);
              arr.splice(i, i+2);
            }
              else if (arr[i] == "сделать" && arr[i+1] == "текст" && arr[i+2] == "оранжевым"){
               document.getElementById('textarea').style.color = "orange";
              arr.splice(i, i);
              arr.splice(i, i+1);
              arr.splice(i, i+2);
            }
              else if (arr[i] == "сделать" && arr[i+1] == "текст" && arr[i+2] == "желтым"){
               document.getElementById('textarea').style.color = "yellow";
              arr.splice(i, i);
              arr.splice(i, i+1);
              arr.splice(i, i+2);
            }
            else if (arr[i] == "сделать" && arr[i+1] == "текст" && arr[i+2] == "зелёным"){
               document.getElementById('textarea').style.color = "green";
              arr.splice(i, i);
              arr.splice(i, i+1);
              arr.splice(i, i+2);
            }
            else if (arr[i] == "сделать" && arr[i+1] == "текст" && arr[i+2] == "голубым"){
               document.getElementById('textarea').style.color = "blue";
              arr.splice(i, i);
              arr.splice(i, i+1);
              arr.splice(i, i+2);
            }
                else if (arr[i] == "сделать" && arr[i+1] == "текст" && arr[i+2] == "синим"){
               document.getElementById('textarea').style.color = "blue";
              arr.splice(i, i);
              arr.splice(i, i+1);
              arr.splice(i, i+2);
            }
              else if (arr[i] == "сделать" && arr[i+1] == "текст" && arr[i+2] == "фиолетовым"){
               document.getElementById('textarea').style.color = "purple";
              arr.splice(i, i);
              arr.splice(i, i+1);
              arr.splice(i, i+2);
            }

             else{
             null;
            } 
          }
            alert(arr);
           var arrString = arr.join(' ');
           alert(arrString);
           textarea.value += arrString;
      }
    }

    function reset() {
      recognizing = false;
      button.innerHTML = "Click to Speak";
    }

    function toggleStartStop() {
      if (recognizing) {
        recognition.stop();
        reset();
      } else {
        recognition.start();
        recognizing = true;
        button.innerHTML = "Click to Stop";
        textarea.value += ' ';
      }
    }