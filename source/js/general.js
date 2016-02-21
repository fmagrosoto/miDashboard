/**
 * VERSIÓN DEL SISTEMA
 */
const version = '1.0.2';

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

// Ready?
$( document ).ready( function() {
    
    // Agregar la versión en todas las clases .version
    $('.version').text(version);
    
});
