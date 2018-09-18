function form_request(form) {
    $.post('http://localhost:8080/Sistema_gestao_escolar_v.2/ESTATICO/' + form + '.html', function (html) {
        $('#modal1').html(html);
    })
    $(document).ready(function () {
        $('.select').material_select();
    });
    $('.modal').modal();

}
/*
 function returnProperties(o) {
 obj = Object.getOwnPropertyNames(o).toString().split(",");
 localStorage.setItem("fieldsContext", obj);
 return obj;
 }
 function createHead() {
 vetor = localStorage.getItem("fieldsContext").split(",");
 campos = "<thead><tr>";
 for (i = 0; i < vetor.length; i++) {
 campos += "<th id=\"" + vetor[i] + "\">" + vetor[i] + "</th>";
 }
 campos += "</thead></tr>";
 $("#tableLemos").append(campos);
 
 }
 function createBodyTable(data) {
 camposContexto = localStorage.getItem("fieldsContext").split(",");
 aux_dados = JSON.parse(localStorage.context_data);
 campos = "";
 aux_linha = "";
 aux_body = "";
 for (i = 0; i < aux_dados.length; i++) {
 for (cont = 0; cont < camposContexto.length; cont++) {
 campos += "<td>" + aux_dados[i][camposContexto[cont]] + "</td>";
 }
 //$("#myTable").append("<tr>"+campos+"</tr>");
 aux_linha += "<tr>" + campos + "</tr>";
 campos = "";
 }
 //console.log(aux_linha);
 aux_body = "<tbody>" + aux_linha + "</tbody>"
 $("#tableLemos").append(aux_body);
 
 }
 function transform_table(objeto_dados) {
 returnProperties(JSON.parse(objeto_dados)[0]);
 createHead();
 createBodyTable(objeto_dados);
 }
 function removeTable() {
 aux_parent = document.getElementById("tableLemos");
 if (aux_parent) {
 aux_parent.deleteTHead();
 for (i = 0; i < aux_parent.childElementCount; i++) {
 aux_parent.children[i].remove();
 }
 }
 }
 function sortResults(prop, asc) {
 arr = arr.sort(function (a, b) {
 if (asc)
 return (a[prop] > b[prop]);
 else
 return (b[prop] > a[prop]);
 });
 localStorage.setItem("context_data", JSON.stringify(arr));
 showResults();
 }
 function showResults() {
 for (var e in arr) {
 console.log(arr[e]);
 }
 }
 function sortTable() {
 arr = JSON.parse(localStorage.context_data);
 console.log("carregou funcao sortTable()");
 $('#tableLemos th').click(function () {
 console.log("funcao carregada...");
 var id = $(this).attr('id');
 var asc = (!$(this).attr('asc')); // switch the order, true if not set
 
 // set asc="asc" when sorted in ascending order
 $('#tableLemos th').each(function () {
 $(this).removeAttr('asc');
 });
 if (asc)
 $(this).attr('asc', 'asc');
 
 sortResults(id, asc);
 });
 }
 function request(url) {
 dados = [];
 $.ajax({
 type: "GET",
 contentType: "application/json; charset=utf-8",
 //url: "http://localhost:8080/WEB/web/configFields/" + field,
 url: url ? url : "http://localhost:8080/WEB/web/usuarios/find/",
 dataType: "json",
 success: function (data) {
 dados = data;
 localStorage.setItem("context_data", JSON.stringify(data));
 transform_table(JSON.stringify(data));
 }});
 
 }
 
 
 
 */