window.onload = function(){
    var buton = document.getElementById("bt");
    meciForm = document.getElementById("meci");
    var isLoggedIn = 'false';
    var loginformbg = document.querySelector(".loginform-bg");
    var logout = document.getElementById("logout");
    var listameciuri = document.getElementById("listameciuri");
    logout.style.display = "none";
    if(!localStorage.getItem('isLoggedIn'))
    {
        localStorage.setItem('isLoggedIn', 'false');
    }
    else
    {
        isLoggedIn = localStorage.getItem('isLoggedIn');
    }
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

    var loginForm = document.getElementById('logare');
    loginForm.onsubmit = function(event){
        event.preventDefault();
                var username = document.getElementById("username").value;
                var password = document.getElementById("password").value;
                let regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[%!£"$%&*()]).{8,}$/
                if(!regex.test(password))
                {
                    window.parent.location = window.parent.location.href;
                    alert("Parola trebuie sa contina cel putin 8 caractere, o litera mare, o cifra si un caracter special.");
                }
                var xhr = new XMLHttpRequest();
                xhr.open("GET", "conturi.xml", true);
        
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        var xmlDoc = xhr.responseXML;
                        var users = xmlDoc.getElementsByTagName("user");
                        var authenticated = false;
        
                        for (var i = 0; i < users.length; i++) {
                            var xmlUsername = users[i].getElementsByTagName("username")[0].textContent;
                            var xmlPassword = users[i].getElementsByTagName("password")[0].textContent;
        
                            if (username == xmlUsername && password == xmlPassword) {
                                authenticated = true;
                                break;
                            }
                        }
                        if (authenticated) {

                            localStorage.setItem('isLoggedIn', 'true');      
                            loginForm.style.display = "None";

                            message = document.getElementById("games");
                            message.innerHTML = 'Meciurile mele:';
                            meciForm.style.display="block";
                            loginformbg.style.marginLeft = "8%";  
                            listameciuri.style.display = "block";
                            logout.style.display = "block"; 
                            
                            var request = fetch("http://localhost:8000/contmeci.json");

                                request.then(function(response){
                                    if(response.status=='200')
                                        return response.text();
                                    else
                                        throw "eroare";
                                })
                                .then(function(text) {
                                    let datajson = JSON.parse(text);
                                    for (const [key, value] of Object.entries(datajson.arbitri[username])) {
                                    meci = document.createElement("div");
                                    meci.style.zIndex = '10';
                                    meci.style.display = 'block';
                                    meci.innerHTML = key.toUpperCase() +  " " + value;
                                    listameciuri.appendChild(meci);
                                    }
                                })
                                .catch(function(err){
                                    console.log(err);
                                });
                            
                            meciForm.onsubmit = function(event){

                                event.preventDefault();
                                event.stopPropagation();
                                var stringMeci = document.getElementById("numemeci").value;
                                var datadisputarii = document.getElementById("data").value;
                                var stringKm = document.getElementById("km").value;
                               
                                meci = document.createElement("div");
                                meci.style.zIndex = '10';
                                meci.style.display = 'block';
                                meci.innerHTML = stringMeci.toUpperCase() +  " " + datadisputarii + " " + stringKm + " km";
                                listameciuri.appendChild(meci);



                            }             
                            logout.onclick = function(){
                                localStorage.setItem('isLoggedIn', 'false');
                                window.parent.location = window.parent.location.href;
                            }

                            


                            
                        } else {
                            alert("Parola gresita");
                        }
                        
                    }
                };
        
                xhr.send();
            
    }
}

