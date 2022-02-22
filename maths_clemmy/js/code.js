$("#category-button").click(function() {
    $(".dropdown-menu-category").toggle();
});
$("#quiz-button").click(function() {
    $(".dropdown-menu-q").addClass("dropdown-menu-quiz");
});
$(".upload-btn").click(function() {
    $(".dropdown-parent").toggle();
    $(".upload").toggle();
    $(".go-to-q").toggle();
});
$('#senior').click(function() {
    $(".dropdown-menu-category").toggle();
    $('#category-button').text("Senior Category");
})
$('#junior').click(function() {
    $(".dropdown-menu-category").toggle();
    $('#category-button').text("Junior Category")
})
$("#quiz-button").click(function() {
    $(".dropdown-menu-quiz").toggle();
});
$('#speed').click(function() {
    $(".dropdown-menu-quiz").toggle();
    $('#quiz-button').text("Speed 'o' Test");
})
$('#inter').click(function() {
    $(".dropdown-menu-quiz").toggle();
    $('#quiz-button').text("Interclass Quiz");
})
$('#strength').click(function() {
    $(".dropdown-menu-quiz").toggle();
    $('#quiz-button').text("Show Your Strength");
})