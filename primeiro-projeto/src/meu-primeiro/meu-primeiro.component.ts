import { Component } from "@angular/core";  //importando classe da biblioteca 

@Component({       //Decorator/Anotation: serve para passar informações adicionais para o compilador como: (meta dados)
    selector: 'meu-primeiro-component',
    template: `
        <p>Meu primeiro component com Angular 2!</p>
    `
})   
export  class MeuPrimeiroComponent { } //Criação de classe seguindo ES6  -  export: expor a classe para outros arquivos