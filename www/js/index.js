document.getElementById("getPosition").addEventListener("click",getPosition);

function getPosition(){
    var watchID = navigator.geolocation.getCurrentPosition(onSuccess,onError);

}

function onSuccess(position){
    var lat=position.coords.latitude;
    var lon=position.coords.longitude;
    alert('latitude: '+lat+'\n'+'longitude: '+lon+'\n');
}

function onError(error){
    alert('code: '+error.code+'\n'+'message: '+error.message+'\n');
}
