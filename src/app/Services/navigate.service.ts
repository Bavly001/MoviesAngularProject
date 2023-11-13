import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigateService {
  constructor(private route: Router) {}

  navigateTo(routePath: string, params: {} = {}) {
    this.route.navigate([routePath], { queryParams: params });
  }
}
