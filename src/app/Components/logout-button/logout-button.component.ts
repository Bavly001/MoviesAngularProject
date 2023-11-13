import { RouteService } from './../../Services/route.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.css'],
})
export class LogoutButtonComponent {
  constructor(private routeService: RouteService) {
    console.log('logout - ' + this.auth);
    routeService.logoutButtonEmitter.subscribe((val) => (this.auth = val));
  }
  auth: boolean = this.routeService.auth();
  logout() {
    this.routeService.logout();
    this.auth = this.routeService.auth();
  }
}
