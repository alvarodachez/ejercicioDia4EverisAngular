import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: MenuItem[];

  title = 'ejercicioDia4';


  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: "/" },
      { label: 'Search', icon: 'pi pi-fw pi-search', routerLink: "search" }
    ];

  }
}
