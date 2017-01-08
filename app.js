console.log('have fun !');

/*Je pense avoir compris le principe. 
Mais je n'arrive juste pas à l'appliquer. 
Il est bientôt minuit, mon cerveau 
est en grève*/


$('input').bind('keyup', function(e) {
    var input = $(this).val();
    if (e.which == 13) {
        $(this).val()
    }
})




/*var prenom = $("#first_name").val();
var ndf = $("last_name");
var ville = $("city");


console.log(prenom);  */