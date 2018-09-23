function createHeadDataTable(end) {
    dados = [];
    aux_campos = [];
    $.when(
    $.ajax({
        "url": end?end:"http://localhost:8080/WEB/web/contextforms/alunos",
        "type": "GET",
        "success": function (data) {
            dados = data;
            localStorage.setItem("dados_contexto_config", JSON.stringify(data));
        }
    }).then(function(){
    if (localStorage.getItem("dados_contexto_config") != null) {
        dados_local = JSON.parse(localStorage.getItem("dados_contexto_config"));
        var aux_table = document.getElementById("table_grid_central");
        var line = "<thead><tr>";
        var column = "";

        for (var i = 0; i < dados_local.length; i++) {
            column += "<th>" + dados_local[i].titulo + "</th>";
            console.log(dados_local[i]);
        }

        line += column + "</tr></thead>";
        console.log(line);
        aux_table.insertAdjacentHTML('beforeend', line);


        for (var i = 0; i < dados_local.length; i++) {
            aux_campos.push({"data": dados_local[i].campo});
            console.log(aux_campos);
        }
    }
}));

    dados = [];
    $.when(
            $.ajax({
                "url": "http://localhost:8080/WEB/web/usuarios/find/",
                "type": "GET",
                "success": function (data) {
                    dados = data;
                    localStorage.setItem("dados", JSON.stringify(data));
                }
            })
            ).then(function () {
        $('#table_grid_central').DataTable({
            data: JSON.parse(localStorage.dados),
            responsive: true,
            "columns": aux_campos,
            "language": {
                "lengthMenu": "Exibir _MENU_ Registros por Pagina",
                "zeroRecords": "Nao há registros!",
                "info": "Paginas _PAGE_ de _PAGES_",
                "infoEmpty": "Sem registros!",
                "infoFiltered": "(Filtrados em _MAX_ registros)",
                "search": "Procurar:  ",
                "paginate": {
                    "previous": "Anterior",
                    "next": "Proximo"
                }
            }
        });

    }
    );
}

/*
 $.when(
 $.ajax({
 "url": "http://localhost:8080/WEB/web/usuarios/find/",
 "type": "GET",
 "success": function (data) {
 dados = data;
 localStorage.setItem("dados", JSON.stringify(data));
 }
 })
 ).then(function () {
 $('#table_grid_central').DataTable({
 data: JSON.parse(localStorage.dados),
 responsive: true,
 "columns": [
 {"data": "i_alunos"},
 {"data": "nome"},
 {"data": "dataNascimento"},
 {"data": "sexo"},
 {"data": "nomeSocial"},
 {"data": "codigoInep"},
 {"data": "i_enderecos"},
 {"data": "estadoCivil"}
 ],
 "language": {
 "lengthMenu": "Exibir _MENU_ Registros por Pagina",
 "zeroRecords": "Nao há registros!",
 "info": "Paginas _PAGE_ de _PAGES_",
 "infoEmpty": "Sem registros!",
 "infoFiltered": "(Filtrados em _MAX_ registros)",
 "search": "Procurar:  ",
 "paginate": {
 "previous": "Anterior",
 "next": "Proximo"
 }
 }
 });
 
 }
 );
 /*
 if (localStorage.dados === null) {
 dados = [];
 $.ajax({
 "url": "http://localhost:8080/WEB/web/usuarios/find/",
 "type": "GET",
 "success": function (data) {
 dados = data;
 localStorage.setItem("dados", JSON.stringify(data));
 }
 }).then(function () {
 $(document).ready(function () {
 $('#table_grid_central').DataTable({
 data: JSON.parse(localStorage.dados),
 responsive: true,
 "columns": [
 {"data": "i_alunos"},
 {"data": "nome"},
 {"data": "dataNascimento"},
 {"data": "sexo"},
 {"data": "nomeSocial"},
 {"data": "codigoInep"},
 {"data": "i_enderecos"},
 {"data": "estadoCivil"}
 ],
 "language": {
 "lengthMenu": "Exibir _MENU_ Registros por Pagina",
 "zeroRecords": "Nao há registros!",
 "info": "Paginas _PAGE_ de _PAGES_",
 "infoEmpty": "Sem registros!",
 "infoFiltered": "(Filtrados em _MAX_ registros)",
 "search": "Procurar:  ",
 "paginate": {
 "previous": "Anterior",
 "next": "Proximo"
 }
 }
 });
 
 });
 });
 
 }
 */