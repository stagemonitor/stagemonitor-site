$( ".language" ).click(function() {
	localStorage.setItem('language', $(this).attr("id"));
	if($(this).attr("id") === "en"){
		window.location.href = "/";
	}else {
		window.location.href = $(this).attr("id");
	}
});


$(function() {
    var language = localStorage.getItem('language');
    if(!language){
        language = getBrowserLanguage();
    }
    if(language.length > 0 && language !== "en" && window.location.pathname === "/"){
        $( "#"+language).click();
    }
});

function getBrowserLanguage(){
    if (navigator.languages != undefined) {
        return navigator.languages[0];
    } else {
        return navigator.language;
    }
}
