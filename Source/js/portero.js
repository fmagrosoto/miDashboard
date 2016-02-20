
/// <reference path="general.js" />

// Al pulsar el link de "Olvidé mi contraseña"
$('#pwdOlvidada').click( function() {
    alert('Contactar con el administrador del Sistema.');
});


// Ready?
$( document ).ready( function() {
    
    // Agregar la versión en todas las clases .version
    $('.version').text(version);
    
});


// Enviar el formulario de inicio de sesión por medio de AJAX
$('#formIniSes').submit( function(e) {
    e.preventDefault();
    var botSub = $('#botIniSes'),
        txtBotSub = botSub.html(),
        usuario = this.usuario.value,
        pwd = this.pwd.value,
        sp;
    
    // Antes que nada, deshabilitar el botón
    botSub.prop('disabled',true).html('Enviando...');
    
    // Resetear las clases de fallidos o correctos
    $('.form-control-feedback').remove();
    $('.form-group').removeClass('has-error');
    
    
    // Validar campos (para el caso que el navegador no soporte
    // los atrubutos 'required' de HTML5)
    if(usuario === '' || usuario.length < 4){
        alert('NO');
        $('#group-usuario').addClass('has-error');
        sp = "<span class='glyphicon glyphicon-remove form-control-feedback' " +
        "aria-hidden='true'></span>";
        $('#input-usuario').append(sp);
        botSub.prop('disabled',false).html(txtBotSub);
        return;
    }
    
    if(pwd === '' || pwd.length < 6){
        alert('NO');
        $('#group-password').addClass('has-error');
        sp = "<span class='glyphicon glyphicon-remove form-control-feedback' " +
        "aria-hidden='true'></span>";
        $('#input-password').append(sp);
        botSub.prop('disabled',false).html(txtBotSub);
        return;
    }

    
});