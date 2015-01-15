$.getJSON('js/notices.json', function(data) {
    var output=data.banner[0];
    document.getElementById("notice").innerHTML=output;
});