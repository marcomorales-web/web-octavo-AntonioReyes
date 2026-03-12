import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from "../navbar/navbar";
import { PedidosService } from '../services/pedidos';
@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [CommonModule, Navbar],
  templateUrl: './pedidos.html',
  styleUrl: './pedidos.css'
})

export class Pedidos {
  pedidos:any[] = [];
  constructor(private pedidosService:PedidosService){}
  ngOnInit(){
    this.pedidos = this.pedidosService.obtenerPedidos();
  }

  
}