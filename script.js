function info()
{
    var pojemnik = document.querySelector('#pojemnik');
    pojemnik.innerHTML = '<h1>Informacje o grze</h1> <p style="text-align: center;">Gra przygodowa utworzona 15.04.2019 a premiera wystąpi w przyszłości. Aktualnie to wersja 0.0.1 . Gra utworzona przez Kubę Turzańskiego. Mój GitHub: <a href="https://github.com/Kuba1001t">https://github.com/Kuba1001t</a>.</p> <input type="button" value="Powrót" onclick="menuglowne()"/>';
}
function opcje()
{
    var pojemnik = document.querySelector('#pojemnik');
    pojemnik.innerHTML = '<h1>Opcje</h1> <p style="text-align: center;">W tej wersji nie ma jeszcze opcji.</p> <input type="button" value="Powrót" onclick="menuglowne()"/>';
}
function start()
{
    var pojemnik = document.querySelector('#pojemnik');
}
function menuglowne()
{
    var pojemnik = document.querySelector('#pojemnik');
    pojemnik.innerHTML = '<h1>Przygoda na bezludnej wyspie!</h1><input type="button" value="Start!" onclick="start()"/> <br/><input type="button" value="Opcje" onclick="opcje()"> <br/><input type="button" value="Informacje o grze" onclick="info()">';
}