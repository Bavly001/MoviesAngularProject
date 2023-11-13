import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavigateService } from 'src/app/Services/navigate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(
    private navigateService: NavigateService,
    private route: Router
  ) {}

  @Input() animated: boolean = false;

  activeRoute(routePath: string) {
    if (this.route.url.includes('?'))
      return (
        this.route.url
          .replace('/', '')
          .slice(0, this.route.url.lastIndexOf('?') - 1) === routePath
      );

    return this.route.url.replace('/', '') === routePath;
  }

  navigator(routePath: string) {
    this.navigateService.navigateTo(routePath);
  }
}
