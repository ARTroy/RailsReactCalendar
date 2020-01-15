ready = function(){
    $(function(){ $(document).foundation(); });
};

$(document).on('turbolinks:load', ready);
$(document).on("load", ready);