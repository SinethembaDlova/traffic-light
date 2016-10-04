captureTimeChange(captureTrafficLightChange);

function captureTrafficLightChange(number)
{
    //write your code here!
    // number is the value entered in the text on the screen
    if(number > 40)
    {
      go()

    }

    else if(number > 30 && number < 40)
    {
      caution()
    }

    else
    {
      stop()
    }
};

var counter = 0;
var number;

function showNumber(num){
    if (!number){
        number = document.querySelector("#number");
    }
    number.innerHTML = counter;
}

function interval()
{
        counter++;
        // write some code here
        if(counter > 40)
        {
          go()

          if (counter ===60)
          {
            counter = 0;
          }
        }

        else if(counter > 30 && counter < 40)
        {
          caution()
        }

        else
        {
          stop()
        };
        showNumber(counter);
}
setInterval(interval, 500);
