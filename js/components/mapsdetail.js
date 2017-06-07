'use strict';

const mapsDetails = (update) => {

  const container = $('<div class="grifoDetail"></div>');
  const hr =$('<hr>');
  const name = $('<h5>'+'Grifo '+state.selectedStation.name +'</h5>');
  const address = $('<p>'+'Grifo '+state.selectedStation.address +'</p>');
  container.append(name);
  container.append(hr);
  container.append(address);

  const products = state.selectedStation.products ;
  products.forEach(function(index){
    const valores  = $('<span class="lista">'+''+ index + '</span>');
    container.append(valores);
  });

  const button = $('<br><button>Regresar</button>') ;
  container.append(button);

  button.on('click',(e) => {
    e.preventDefault();
    state.selectedStation = null;
    update();
  })

  return container;
}
