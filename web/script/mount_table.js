function request_data_context(){
    
};
    
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