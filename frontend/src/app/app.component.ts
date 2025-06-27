import { Component } from '@angular/core';
import {NavigationEnd, Router, RouterLink, RouterOutlet} from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';
import {MatAnchor, MatIconButton} from '@angular/material/button';
import {MatTooltip} from '@angular/material/tooltip';
import {filter} from 'rxjs';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, MatToolbar, MatIcon, MatIconButton, RouterLink, MatTooltip, MatAnchor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  hideLinks = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const hiddenRoutes = ['/list', '/form'];
        this.hideLinks = hiddenRoutes.includes(event.urlAfterRedirects);
      });
  }
}
