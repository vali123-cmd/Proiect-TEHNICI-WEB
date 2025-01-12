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
    const svgContainer = document.getElementById('svgContainer');


let svgNS = "http://www.w3.org/2000/svg";
let svg = document.createElementNS(svgNS, "svg");
svg.setAttribute("width", "200");
svg.setAttribute("height", "200");
svg.setAttribute("viewBox", "0 0 200 200");


let circle = document.createElementNS(svgNS, "circle");
circle.setAttribute("cx", "100");
circle.setAttribute("cy", "100");
circle.setAttribute("r", "50");
circle.setAttribute("fill", "blue");


svg.appendChild(circle);


svgContainer.appendChild(svg);
}