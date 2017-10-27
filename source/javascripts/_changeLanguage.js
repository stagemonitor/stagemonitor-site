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
	var language;
    if (navigator.languages != undefined) {
        language = navigator.languages[0];
    } else {
        language = navigator.language;
    }

    if(language.indexOf("-") > 0){
		language = language.substring(0,language.indexOf("-"));
	}
	
    return language;
}
