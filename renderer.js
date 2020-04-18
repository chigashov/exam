

var _curTime = 0;
var IntervalTime = 0;
var timerInput = document.getElementById("time"); 
var Start = document.getElementById('start');
var Pause = document.getElementById('pause');
var Reset = document.getElementById('reset');
var Timer;
var Interval;


Start.addEventListener
(
    'click',
    ()=>
    {
        IntervalTime = Number(timerInput.value)-_curTime
        Interval = setInterval
        (
            ()=>
            {
                _curTime++;
                displayTime();
            },
            1000
        )
        Timer = setTimeout
        (
            ()=>
            {
                clearInterval(Interval);
                alert('Время вышло');
            },
            IntervalTime*1000
        )
    }
)
Pause.addEventListener
(
    'click',
    ()=>
    {
        clearInterval(Interval);
        clearTimeout(Timer);
    }
)

Reset.addEventListener
(
    'click',
    ()=>
    {
        clearInterval(Interval);
        clearTimeout(Timer);
        _curTime = 0;
        IntervalTime = 0;
        displayTime();
    }
)


const displayTime = ()=>
{
    var hour = Math.floor(_curTime/3600);
    var minute = Math.floor((_curTime%3600)/60)
    var second = _curTime%60;

    document.getElementById('timer').innerText = ''+hour+':'+minute+':'+second;

}