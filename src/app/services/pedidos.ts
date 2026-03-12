import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})

export class PedidosService {
  pedidos:any[] = [];
  agregarPedido(pedido:any){
    this.pedidos.push(pedido);
  }
  obtenerPedidos(){
    return this.pedidos;
  }
}
