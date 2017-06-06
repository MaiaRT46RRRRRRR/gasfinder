'use strict';

const mapsDetails = (update) => {
  // const container = $('<div class="movieDetail"></div>');
  // const title = $('<h1>'+state.selectedMovie.title+'</h1>');
  const container = $('<divclass="mapsDetail"></div>');
  const maps = $('<div></div>');
  const name = $('<h1>'+'Grifo '+state.selectedMovie.name +'</h1>');
  const address = $('<h1>'+'Grifo '+state.selectedMovie.address + '</h1>');
  const district = $('<h1>'+'Grifo '+state.selectedMovie.district + '</h1>');
  const products = $('<h1>'+'Grifo '+state.selectedMovie.products + '</h1>');
  const button = $('<button>Regresar</button>') ;

  container.append(button);
  container.append(products);
  container.append(district);
  container.append(address);
  container.append(name);
  container.append(maps);

  button.on('click',(e) => {
    e.preventDefault();
    state.selectedMovie = null;
    update();
  })

  return container;
}
