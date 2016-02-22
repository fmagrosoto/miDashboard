
/// <reference path="general.js" />

/**
 * Verificar que no haya una sesión iniciada
 * @author Fernando Magrosoto <@fmagrosoto>
 */
$(function(){
    $.get('api/ajax_verSesion.php')
    .done( function( response ){
        if(response === 'sesIni'){
            location.replace('/dashboard.html');
        }
    })
    .fail( function( error ){
        console.error(error.responseText);
        alertar('Atención','No se puede verificar la sesión.');
        $('#botIniSes').prop('disabled',true);
    });
});

// Al pulsar el link de "Olvidé mi contraseña"
$('#pwdOlvidada').click( function() {
    alertar('Contraseña olvidada','Contactar con el administrador del Sistema.');
});


// Enviar el formulario de inicio de sesión por medio de AJAX
$('#formIniSes').submit( function(e) {
    e.preventDefault();
    var botSub = $('#botIniSes'),
        txtBotSub = botSub.html(),
        usuario = this.usuario.value,
        pwd = this.pwd.value,
        sp,
        elForm = this;
    
    // Antes que nada, deshabilitar el botón
    botSub.prop('disabled',true).html('Enviando...');
    
    // Resetear las clases de fallidos o correctos
    $('.form-control-feedback').remove();
    $('.form-group').removeClass('has-error');
    
    
    // Validar campos (para el caso que el navegador no soporte
    // los atrubutos 'required' de HTML5)
    if(usuario === '' || usuario.length < 4){
        alertar('Aviso','El campo USUARIO no es válido.');
        $('#group-usuario').addClass('has-error');
        sp = "<span class='glyphicon glyphicon-remove form-control-feedback' " +
        "aria-hidden='true'></span>";
        $('#input-usuario').append(sp);
        botSub.prop('disabled',false).html(txtBotSub);
        return;
    }
    
    if(pwd === '' || pwd.length < 6){
        alertar('Aviso','El campo CONTRASEÑA no es válido.');
        $('#group-password').addClass('has-error');
        sp = "<span class='glyphicon glyphicon-remove form-control-feedback' " +
        "aria-hidden='true'></span>";
        $('#input-password').append(sp);
        botSub.prop('disabled',false).html(txtBotSub);
        return;
    }
    
    // Enviar por medio de AJAX
    $.post('/api/ajax_iniSes.php',{
        'usuario':usuario,
        'password':pwd
    })
    // En caso de que la conexión haya sido satisfaoria
    .done( function( response ) {
        
        // En caso de que no haya un usuario
        if(response === 'usrDes'){
            alertar('Aviso','El USUARIO no existe.');
            $('#group-usuario').addClass('has-error');
            sp = "<span class='glyphicon glyphicon-remove form-control-feedback' " +
            "aria-hidden='true'></span>";
            $('#input-usuario').append(sp);
        }
        // En caso de que no sea el password
        else if(response === 'pwdDes'){
            alertar('Aviso','La CONTRASEÑA no coincide.');
            $('#group-password').addClass('has-error');
            sp = "<span class='glyphicon glyphicon-remove form-control-feedback' " +
            "aria-hidden='true'></span>";
            $('#input-password').append(sp);
        }
        // En caso de que los dato sean correctos
        else if(response === 'ok'){
            location.replace('/dashboard.html');
            return;
        }
        // En culquier otro caso...
        else {
            alertar('Aviso','Ha ocurrido un error inesperado. Intentar más tarde.');
            console.error(response);
        }
        
    })
    // En caso de que haya ocurrido algún error con la comunicación
    .fail( function(error) {
        console.error(error.responseText + ' - ' + error.status + ' - ' + error.statusText);
        alertar('Atención','Ha ocurrido un error interno. Intentar más tarde.');
        
    })
    // Siempre...
    .always( function() {
        botSub.prop('disabled',false).html(txtBotSub);
        elForm.reset();
    });

    
});