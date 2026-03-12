import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { PedidosService } from '../services/pedidos';

@Component({
  selector: 'app-menu',
  imports: [Navbar],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  
  constructor(private pedidosService: PedidosService){}
  agregarPedido(cafe:string, precio:number){
    const pedido = {
      cafe: cafe,
      precio: precio
    }
    this.pedidosService.agregarPedido(pedido);
    console.log("Pedido agregado", pedido);

  }
}
