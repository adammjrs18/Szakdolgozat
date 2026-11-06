import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import{MatSidenavModule} from '@angular/material/sidenav';
import{MatListModule} from '@angular/material/list';
import{MatIconModule} from '@angular/material/icon';
import{MatButtonModule} from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';





@Component({
  selector: 'app-menu',
  imports: [MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule, MatButtonModule, RouterLink, RouterOutlet],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}
