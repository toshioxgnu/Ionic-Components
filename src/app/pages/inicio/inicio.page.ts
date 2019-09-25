import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
    icon: 'american-football',
    name: 'Action-sheet',
    redirectTo: '/action-sheet'
   },
   {
    icon: 'appstore',
    name: 'Alert',
    redirectTo: '/alert'
   },
   {
    icon: 'contact',
    name: 'profile',
    redirectTo: '/avatar'
   },
   {
    icon: 'grid',
    name: 'buttons',
    redirectTo: '/buttons'
   },
   {
    icon: 'card',
    name: 'Card',
    redirectTo: '/card'
   },
   {
    icon: 'checkbox',
    name: 'Checkbox',
    redirectTo: '/check'
   },
   {
    icon: 'calendar',
    name: 'DateTime',
    redirectTo: '/date-time'
   },
   {
    icon: 'add-circle',
    name: 'Floating Buttons',
    redirectTo: '/fab'
   },
   {
    icon: 'ios-grid',
    name: 'Grid',
    redirectTo: '/grid'
   }
  ];
  constructor() { }

  ngOnInit() {
  }

}

interface Componente{
  icon: string;
  name: string;
  redirectTo: string;
}