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
    var tekst_do_napisania = ['W twoim domu:', '-Chodźcie wnuki, opowiem wam historię.', 'Podczas lotu samolotem:', '- Hej synu, popatrz przez okno, za niedługo będziemy przelatywać nad jakąś wyspą - powiedziałeś.', 'Uwaga, silnik się uszkodził, proszę zastosować procedurę zabezpieczenia - powiedział pilot.', '- O boże! - krzyczysz', 'Na wyspie:', 'Mineło około 5 godzin.', '- Co się stało - zapytałeś się samego siebie, ale teraz sam sobie wszystko przypominasz - co się stało z moim synem?!', 'Spotykasz trzech żywych ludzi i oni dołączają do ciebie.']
    var tekst_wyswietlany;
    console.log(tekst_do_napisania);
    var pojemnik = document.querySelector('#pojemnik');
}
function menuglowne()
{
    var pojemnik = document.querySelector('#pojemnik');
    pojemnik.innerHTML = '<h1>Przygoda na bezludnej wyspie!</h1><input type="button" value="Start!" onclick="start()"/> <br/><input type="button" value="Opcje" onclick="opcje()"> <br/><input type="button" value="Informacje o grze" onclick="info()">';
}