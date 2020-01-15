ready = function(){
    if ($('body').attr('data-loaded') == 'T'){
        return;
    }
    $(function(){ $(document).foundation(); });
    $('body').attr('data-loaded','T');
};

$(document).ready(ready);
$(document).on('turbolinks:load', ready);
$(document).foundation();
console.log("bruh");