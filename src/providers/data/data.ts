import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
/*import { Http } from '@angular/http';
import 'rxjs/add/operator/map';*/

/*
  Generated class for the DataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor(public storage: Storage) {

  }
  getData()
  {
    return this.storage.get('todos');
  }
  save(data)
  {
    let newData=JSON.stringify(data);
    this.storage.set('todos',newData);
  }

}
