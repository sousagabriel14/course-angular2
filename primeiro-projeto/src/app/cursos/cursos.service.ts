import { Injectable } from '@angular/core';

@Injectable({      //para que a classe possa ser injetada em outra classe para que o uso dela possa ser feito
  providedIn: 'root'
})


export class CursosService {


  constructor() { }

  getCursos() {
    return ['Java', 'Ext JS', 'Angular'];
  }
  
}
