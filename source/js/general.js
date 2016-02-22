/**
 * VERSIÓN DEL SISTEMA
 */
const version = '1.0.2';

// Menú vertical
var menuV = [
    {titulo:'Dashboard',link:'/dashboard.html',icon:'glyphicon glyphicon-home'},
    {titulo:'SeccionA',link:'/seccionA.html',icon:'glyphicon glyphicon-triangle-right'},
    {titulo:'SeccionB',link:'/seccionB.html',icon:'glyphicon glyphicon-triangle-right'},
    {titulo:'SeccionC',link:'/seccionC.html',icon:'glyphicon glyphicon-triangle-right'},
    {titulo:'SeccionD',link:'/seccionD.html',icon:'glyphicon glyphicon-triangle-right'},
    {titulo:'SeccionE',link:'/seccionE.html',icon:'glyphicon glyphicon-triangle-right'}
];

// Nombre del cliente
const cliente = 'El cliente';

/**
 * Pintar el menú vertical
 * @author Fernando Magrosoto V. <@fmagrosoto>
 * @param {string} nPag El Nombre de la página
 */
function pintarMenuV(nPag) {
    $.each(menuV,function(i,v){
        var cada = "<li>";
        cada += "<a href='"+v.link+"' class='botMenV'>"+
        "<span class='"+v.icon+"'></span>&nbsp;"+
        v.titulo+"</a>"
        cada += "</li>";
        $('#menuVertical').append(cada);
    });
    
    // Agregar clase 'active' al LI padre del a con el texto pasado como parámetro
    if(nPag !== null){
        var botones = document.querySelectorAll('.botMenV');
        for (var x = 0; x < botones.length; x++){
            
            // OJO: Quitar espacios en blanco derivado del &nbsp;
            var txt = botones[x].childNodes[1].textContent.trim();
            
            if(txt === nPag){
                botones[x].parentElement.className = 'active';
            }
            
        }
    }
}

/**
 * Pintar nombre del cliente
 * @author Fernando Magrosoto V <@fmagrosoto>
 */
function pintarCliente() {
    $('.nCliente').text(cliente);
}

/**
 * FUNCIÓN PARA MOSTRAR UNA ALERTA USANDO MODAL DE BOOTSTRAP
 * @version 1.0
 * @author Fernando Magrosoto <@fmagrosoto>
 * @param string titulo El título de la ventana de alerta
 * @param string mensaje El mensaje de la alerta 
 * @copyright left copy 2016
 */
function alertar(titulo,mensaje) {
    var alerta = "<div id='laAlerta' " +
      "class='modal fade bs-example-modal-sm' " + 
      "tabindex='-1' " + 
      "role='dialog'>" +
        "<div class='modal-dialog modal-sm'>" +
            "<div class='modal-content'>" +
                "<div class='modal-header'>" +
                    "<button type='button' " +
                    "class='close' " +
                    "data-dismiss='modal' " + 
                    "aria-label='Cerrar'>" +
                        "<span aria-hidden='true'>&times;</span>" +
                    "</button>" +
                    "<h4 class='modal-title'>"+ titulo +"</h4>" +
                "</div>" +
                "<div class='modal-body'>" +
                    "<p>"+ mensaje +"</p>" +
                "</div>" +
                "<div class='modal-footer'>" +
                    "<button type='button' " +
                    "class='btn btn-default' " +
                    "data-dismiss='modal'>Cerrar</button>" +
                "</div>" +
           "</div><!-- /.modal-content -->" +
       "</div><!-- /.modal-dialog -->" +
     "</div><!-- /.modal -->";
    
    $( 'body' ).prepend(alerta);
    $('#laAlerta').modal('show');
    
    $('#laAlerta').on('hidden.bs.modal', function (e) {
        $('#laAlerta').remove();
    });
}


/**
 * Verificar si son usuarios válidos
 * @author Fernando Magrosoto <@fmagrosoto>
 */
function verificarSesion() {
    $.get('api/ajax_verSesion.php')
    .done( function(response) {
        if(response !== 'sesIni'){
            location.replace('/');
            return;
        }
    })
    .fail( function(error){
        console.error(error);
        location.replace('/');
        return;
    });
}

// Ready?
$( document ).ready( function() {
    
    // Agregar la versión en todas las clases .version
    $('.version').text(version);
    
    // Pintar nombre del cliente
    pintarCliente();
    
});
