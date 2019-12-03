function realizarBusca() {
    var info = document.getElementById("inputGroupSelect04").value;

    var URL = "https://jsonplaceholder.typicode.com/users/" + info;

    fetch(URL, { method: "GET" })
        .then(response => response.json())
        .then(json => preencheHTML(json));

}

function preencheHTML(json) {
    var result = document.getElementById("result");
    //result.innerHTML = JSON.stringify(json);
    result.innerHTML+= '<div class="card text-white bg-dark mb-3" style="max-width: 18rem;"><div class="card-header">Dados</div><div class="card-body"><h5 class="card-title">Informações sobre '+ json.name +'</h5><p class="card-text">'+ "Nome: " + json.name + "<br>" + "Nome de Usuário: " + json.username + "<br>" + "Email: " + json.email + "<br>"+"Rua: " + json.address.street + "<br>"+"Suite: " + json.address.suite + "<br>"+"Cidade: " + json.address.city + "<br>"+"Código Postal: " + json.address.zipcode + "<br>"+"Endereço-Geo: " + json.address.geo + "<br>"+"Telefone: " + json.phone + "<br>"+"Site: " + json.website + "<br>"+"Nome da Companhia: " + json.company.name + "<br>"+"Slogan: " + json.company.catchPhrase + "<br>"+"Área de atuação: " + json.company.bs + "<br>"+'</p></div></div>'
    
    
    

}