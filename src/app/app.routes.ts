import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Registro } from './registro/registro';
import { RecuperarContrasena } from './recuperar-contrasena/recuperar-contrasena';
import { Home } from './home/home';


export const routes: Routes = [
    { path: '', component: Login },
    { path: 'login', component: Login },
    { path: 'registro', component: Registro },
    { path: 'recuperar', component: RecuperarContrasena },
    { path: 'home', component: Home }
];