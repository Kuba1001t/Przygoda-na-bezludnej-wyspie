var czujnik1 = true;
var czujnik2 = false;
var historia1 = 0;
window.addEventListener('keydown', start)
//********************************************************************************************************
function info()
{
    var pojemnik = document.querySelector('#pojemnik');
    pojemnik.innerHTML = '<h1>Informacje o grze</h1> <p style="text-align: center;">Gra przygodowa utworzona 15.04.2019 a premiera wystąpi w przyszłości. Aktualnie to wersja 0.0.2 . Gra utworzona przez Kubę Turzańskiego. Mój GitHub: <a href="https://github.com/Kuba1001t">https://github.com/Kuba1001t</a>.</p> <input type="button" value="Powrót" onclick="menuglowne()"/>';
}
function opcje()
{
    var pojemnik = document.querySelector('#pojemnik');
    pojemnik.innerHTML = '<h1>Opcje</h1> <p style="text-align: center;">W tej wersji nie ma jeszcze opcji.</p> <input type="button" value="Powrót" onclick="menuglowne()"/>';
}
function menuglowne()
{
    var pojemnik = document.querySelector('#pojemnik');
    pojemnik.innerHTML = '<h1>Przygoda na bezludnej wyspie!</h1><input type="button" value="Start!" onclick="start()"/> <br/><input type="button" value="Opcje" onclick="opcje()"> <br/><input type="button" value="Informacje o grze" onclick="info()">';
}
function start()
{
    if(czujnik1 == true || czujnik2 == true)
    {
        var tekst_do_napisania = ['-Chodźcie wnuki, opowiem wam historię.', 'Podczas lotu samolotem:', '- Hej synu, popatrz przez okno, za niedługo będziemy przelatywać nad jakąś wyspą - powiedziałeś.', 'Uwaga, silnik się uszkodził, proszę zastosować procedurę zabezpieczenia - powiedział pilot.', '- O boże! - krzyczysz', 'Na wyspie:', 'Mineło około 5 godzin.', '- Co się stało - zapytałeś się samego siebie, ale teraz sam sobie wszystko przypominasz - co się stało z moim synem?!', 'Spotykasz trzech żywych ludzi i oni dołączają do ciebie.'];
        var pojemnik = document.querySelector('#pojemnik');
        if (historia1 == 9)
        {
            location.href = "lokacja1/index.html";
        }
        if (czujnik1 == true)
        {
            pojemnik.innerHTML = '';
            czujnik1 = false;
            czujnik2 = true;
        }
        var zawartosc = pojemnik.value;
        pojemnik.innerHTML = zawartosc + '<br/>' + tekst_do_napisania[historia1];
        historia1++;
    }
}