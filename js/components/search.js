'use strict';

const grifosDetail = (detail) => {

  const grifosContainer = $('<div class="mapsDetail"></div>');

  const maps = $('<div></div>');
  const name = $('<h5>'+'Grifo : '+ detail.name +'</h5>');
  const address = $('<h5>'+'Dirección : '+ detail.address + '</h5>');
  grifosContainer.append(address);
  grifosContainer.append(name);
  grifosContainer.append(maps);

  return grifosContainer;
}

const reRender = (item)=>{
  item.empty();
}


const searchMaps = (update) => {
  const searchContainer = $('<div class=" row searchContainer"></div>');
  const divcont =$('<div class="border-all col s9 xl9"></div>')
  const input = $('<input type="text" class="col s11 xl11" placeholder="Ingrese tu direccion a buscar"></p>');
  const icon =$('<i class=" col s1  xl1 material-icons">search</i>')
  const container_grifos =$('<div class=" col s12  xl12"></div>')
    divcont.append(icon);
    divcont.append(input);
    searchContainer.append(container_grifos);
    searchContainer.append(divcont);

    input.on('keyup',(e) => {
      reRender(container_grifos);
      const filtrados = filterByDistrict(state.stations ,input.val());
      filtrados.forEach( function( index, value ) {
      container_grifos.append(grifosDetail(index));

    });
    searchContainer.append(container_grifos);

    });


  return searchContainer;
}
