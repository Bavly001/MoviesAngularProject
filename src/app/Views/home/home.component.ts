import { RouteService } from './../../Services/route.service';
import { NavigateService } from './../../Services/navigate.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(
    private navigateService: NavigateService,
    private routeService: RouteService
  ) {
    routeService.logoutButtonEmitter.subscribe((val) => (this.auth = val));
  }

  auth: boolean = this.routeService.auth();

  exploreMore(
    routePath: string,
    frame: HTMLDivElement,
    components: HTMLDivElement | HTMLFormElement
  ) {
    frame.classList.replace('popup', 'close');
    components.classList.replace('appear', 'disappear');
    setTimeout(() => {
      components.classList.add('opacity-0');
    }, 2000);

    setTimeout(() => {
      this.navigateService.navigateTo(routePath, { prev: 'home' });
    }, 3500);
  }

  onSubmit(form: NgForm, frame: HTMLDivElement, components: HTMLFormElement) {
    if (
      form.value.email === 'a_bavly@yahoo.com' &&
      form.value.password === '123456789'
    ) {
      this.routeService.login();
      this.exploreMore('movies', frame, components);
    } else {
      form.resetForm();
      alert('Invalid Email or Password ... Please, Try Again!');
    }
  }
}
