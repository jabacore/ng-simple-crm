import { Component, OnInit } from '@angular/core';
import { ICustomer } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-customers',   //--> Esta estiqyeta se pone luego en app.component.html
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  title: string;
  people: ICustomer[];

  isVisible: boolean;

  //metodo para el boton de customers.component.html
  changeVisibility(){
    if(this.isVisible){
      this.isVisible = false;
    }else{
      this.isVisible = true;
    }
  }

  constructor() { }

  ngOnInit() {
    this.title = 'customers';
    this.isVisible = true;

    this.people = [
      {
        id: 1, name: 'Javier Gonzalez', city: 'corella', orderTotal: 9.99, customerSince: new Date(2014,7,10)
      },
      {
        id: 2, name: 'Xabier marti', city: 'alsasua', orderTotal: 1.55, customerSince: new Date(2014,7,8)
      },
      {
        id: 3, name: 'fernando muerte', city: 'infierno', orderTotal: 3.55, customerSince: new Date(2014,7,10)
      }
    ];
  }

}
