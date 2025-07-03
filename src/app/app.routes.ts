import { Routes } from '@angular/router';
import { NavBar } from './componentes/nav-bar/nav-bar';
import path from 'path';
import { Component } from '@angular/core';
import { Carta } from './componentes/carta/carta';
import { Login } from './vistas/login/login';

export const routes: Routes = [
    
    {path: '', component: Login},
    {path: 'carta', component: Carta}
];
