import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Registro } from './registro/registro';
import { RecuperarContrasena } from './recuperar-contrasena/recuperar-contrasena';
import { Home } from './home/home';
import { Menu } from './menu/menu';
import { Pedidos } from './pedidos/pedidos';

export const routes: Routes = [

    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'registro', component: Registro },
    { path: 'recuperar', component: RecuperarContrasena },
    { path: 'home', component: Home },
    { path: 'pedidos', component: Pedidos },
    { path: 'menu', component: Menu}
];