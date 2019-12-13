import { Component, OnInit, Input } from '@angular/core';
import { ICustomer } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-customers-list',   //--> Esta estiqyeta se pone luego en app.component.html
  templateUrl: './customers-list.component.html',
})
export class CustomersListComponent implements OnInit {

    //PROPIEDADES
    private _customers: ICustomer[] = [];

    @Input() get customers(): ICustomer[]{
      return this._customers;
    }

    set customers(value: ICustomer[]){
      if (value){
        this.filteredCustomers = this._customers = value;
        this.calculateOrders();
      }
    }

    filteredCustomers: ICustomer[] = [];
    customersOrderTotal: number;
    currencyCode: string = "USD";

  constructor() { }

  ngOnInit() {
    
  }

  calculateOrders(){
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((cust:ICustomer) => {
      this.customersOrderTotal += cust.orderTotal;
    })
  }

  sort(prop:string){
    //Un servicio e ordenación que nos permita ordenar los valores

  }

  filter(data: string){
    if (data) {
      // -1 : No cumple
      // 1 : CUMPLE
      this.filteredCustomers = this.customers.filter((cust: ICustomer) => 
      {
        return cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1 || cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1 || cust.orderTotal.toString().indexOf(data) > -1;
      });
      } else {
        this.filteredCustomers = this.customers;
      }
        this.calculateOrders();
      }
     
  }

