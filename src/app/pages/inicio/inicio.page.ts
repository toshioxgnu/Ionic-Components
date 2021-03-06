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
   },
   {
    icon: 'infinite',
    name: 'Infinite Scroll',
    redirectTo: '/infinite-scroll'
   },
   {
    icon: 'hammer',
    name: 'Input',
    redirectTo: '/input'
   },
   {
    icon: 'list',
    name: 'List',
    redirectTo: '/list'
   },
   {
    icon: 'moon',
    name: 'Dark Mode Toggle',
    redirectTo: '/dark-mode'
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