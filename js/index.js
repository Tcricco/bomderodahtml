
var db = openDatabase("formtraf","1.0","Banco de dados embarcado",8096)

/* checar a existencia do banco,
caso o mesmo não exista, direciona
a tela de configuração de webservice*/

db.transaction(function(testar){
    testar.executeSql("SELECT count(*) as flag FROM sqlite_master WHERE type='table' AND name='funcionario';",[], function(db, resultado){
    var teste = resultado.rows
    sessionStorage.setItem('tabela',teste[0].flag)
    })
})

if(sessionStorage.getItem('tabela') != null){

    window.location.assign("login.html")
} else {

    window.location.assign("config.html")
}


  
