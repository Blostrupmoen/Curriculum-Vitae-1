$(document).on('click', '.nyLinje', function(){
    var html = '<input class="inpYear" type="text" name=" value"=""><input class="inpPlace" type="text" name="" value=""><input class="inpSub" type="text" name="" value=""><button type="button" class="addService">Ny Linje</button>';
  $(this).parent().append(html);
});
