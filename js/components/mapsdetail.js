'use strict';

const mapsDetails = (update) => {

  const container = $('<div class="grifoDetail"></div>');
  const maps = $('<div class="container_mapa"></div>');
  const name = $('<h5>'+'Grifo '+state.selectedStation.name +'</h5>');
  container.append(maps);
  container.append(name);

  const products = state.selectedStation.products ;
  products.forEach(function(index){
    const valores  = $('<span class="lista">'+''+ index + '</span>');
    container.append(valores);
  });

  const button = $('<button>Regresar</button>') ;
  container.append(button);

  button.on('click',(e) => {
    e.preventDefault();
    state.selectedStation = null;
    update();
  })

  return container;
}
