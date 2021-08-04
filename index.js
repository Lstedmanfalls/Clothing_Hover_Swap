$("img").hover(function() {
    $(this).attr("src", $(this).attr("data-alt-src"), 
    $(this).attr("data-alt-src", $(this).attr("src"))
    );
});