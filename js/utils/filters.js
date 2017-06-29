'use strict';

const filterByDistrict= (stations,query) => {
  const select =stations.filter (function(index) {
    return (index.district.toLowerCase().indexOf(query.toLowerCase())!=-1);

  })
  console.log(select);
  return select;
}
