function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function conectaServidor(){
    document.getElementById("salvar").addEventListener("click", function(){
    localStorage.setItem('servidor',"http://" + document.getElementById('api').value + ":5000/")
    let data = fazGet(localStorage.getItem('servidor'));
    try{
       sessionStorage.setItem('resposta',JSON.parse(data));
       alert(sessionStorage.getItem('resposta').length)
    } catch(e){
        alert("erro: "+ e.message)
    }

    window.location.assign('baixando.html')

})}

window.addEventListener("load", conectaServidor)
