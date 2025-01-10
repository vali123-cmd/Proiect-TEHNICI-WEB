window.onload = function(){
    var buton = document.getElementById("bt");
    letter = document.getElementById("firstletter");
    r = Math.floor(Math.random() * 256)
    g = Math.floor(Math.random() * 256)
    b = Math.floor(Math.random() * 256)
    letter.style.color = `rgb(${r} ${g} ${b})`
        buton.onclick = function(){
        var nv = document.getElementById("nv");
        var divcl = document.getElementById("cor");
        if (nv.style.display == 'block')
        {
            nv.style.display = 'none';
            divcl.style.display = 'none';
        }
        else
        {
            nv.style.display = 'block';
            divcl.style.display = 'block';
        }
    }
}