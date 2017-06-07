const GmapsM = (update)=>{

  const  mapa = $('<div  id="map" class="container_mapa"></div>');
  console.log("entro Gmaps");

  $( _ => {

   const map = new GMaps({
        div: '#map',
        zoom: 16,
        lat: -12.043333,
        lng: -77.028333,
        click: function(e) {
          alert('click');
        },
        // dragend: function(e) {
        //   alert('dragend');
        // }
      });

      GMaps.geolocate({
          success: function(position) {
            map.setCenter(position.coords.latitude, position.coords.longitude);
            map.addMarker({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
              title: 'Estas aqui',
            });
            // map.travelRoute({
            //   origin: [position.coords.latitude, position.coords.longitude],
            //   destination: [state.selectedStation.lat, state.selectedStation.long],
            //   travelMode: 'driving',
            // });
            map.drawRoute({
              origin: [position.coords.latitude, position.coords.longitude],
              destination: [state.selectedStation.lat,state.selectedStation.long],
              travelMode: 'driving',
              strokeColor: '#131540',
              strokeOpacity: 0.6,
              strokeWeight: 6
            });

          },
          error: function(error) {
            alert('Geolocation failed: '+error.message);
          },
          not_supported: function() {
            alert("Your browser does not support geolocation");
          },
      });
  });

    return mapa;
}
