//7d5821cbd9436ee1e95c34b7cbfc3d46

export default class searchAPI {

  static searchBeerByName(name){
    return fetch("http://api.brewerydb.com/v2/beers/?key=7d5821cbd9436ee1e95c34b7cbfc3d46&name=*" + name + "*").catch((error) => {
        console.error(error);
      });
  }

  static getBeerById(id){
    return fetch("http://api.brewerydb.com/v2/beer/" + id + "?key=7d5821cbd9436ee1e95c34b7cbfc3d46").catch((error) => {
        console.error(error);
      });
  }
}
