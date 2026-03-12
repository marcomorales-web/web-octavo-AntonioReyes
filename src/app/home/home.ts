import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from "../navbar/navbar";
import { Api } from '../services/api';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Navbar],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
    resultado:any;

  constructor(private api:Api){}

  ngOnInit(){

    this.api.buscarApi("coffee")
    .subscribe(data =>{
      console.log(data);
      this.resultado = data;
    });

  }
}