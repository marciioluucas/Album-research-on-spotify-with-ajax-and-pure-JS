/**
 * Created by Márcio Lucas on 06/09/2016.
 */



function ajaxGet() {
    var vCampo =document.getElementById("a");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var json = this.responseText;
            var obj = JSON.parse(json);
            var totalItems = obj.albums.items.lenght;
            var html = "";
            for(var i = 0; i < obj.albums.items.length; i++){

                html += "<li>"+obj.albums.items.length + " | " + obj.albums.items[i].name+"</li>\n";
            }
            document.getElementById("listaAlbums").innerHTML = html;
        }
    };
    xhttp.open("GET", "https://api.spotify.com/v1/search?q="+vCampo.value+"&type=album", true);
    xhttp.send();
}

function ajaxPost() {

}