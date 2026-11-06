import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'appointment', component: AppointmentComponent}
];
