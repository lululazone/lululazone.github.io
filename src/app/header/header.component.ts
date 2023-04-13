import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items!: MenuItem[];

  position: string = 'top';

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'assets/images/home.png',
        command: () => {
          this.router.navigateByUrl(`/home`);
        }
      },
      {
        label: 'About',
        icon: 'assets/images/avatar.png',
        command: () => {
          this.router.navigateByUrl(`/about`);
        }
      },
      {
        label: 'Projet',
        icon: 'assets/images/projet.png',
        command: () => {
          this.router.navigateByUrl(`/projects`);
        }
      },
      {
        label: 'Contact',
        icon: 'assets/images/contact.png',
        command: () => {
          this.router.navigateByUrl(`/contact`);
        }
      }
    ];
  }

}
