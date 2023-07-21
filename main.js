
let hozir = "tun"

function kunTun()
{
    let aylana = document.getElementById("round");
    let otablok = document.getElementById("main");
    
    if( hozir == "tun" )
{
    aylana.style.marginLeft = "220px"
    aylana.style.backgroundColor = "orange"
    aylana.style.boxShadow = "0 0 50px yellow"
    document.body.style.backgroundColor = "white"
    otablok.style.backgroundColor = "white"
    otablok.style.border = "5px solid orange"
    hozir = "kun"
}
else
{
    aylana.style.marginLeft = "20px"
    document.body.style.backgroundColor = "gray"
    aylana.style.backgroundColor = "wheat"
    aylana.style.boxShadow = " 0 0 50px white"
    otablok.style.backgroundColor = "darkblue"
    otablok.style.border = "5px solid black"
    hozir = "tun"
}
}