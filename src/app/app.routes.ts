import { Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AdultsComponent } from "./adults/adults.component";
import { KidsComponent } from "./kids/kids.component";
import {TheClubComponent} from "./the-club/the-club.component";

export const routes: Routes = [
  { 'path':'', component: HomeComponent },
  { 'path':'adults', component: AdultsComponent },
  { 'path':'kids', component: KidsComponent },
  { 'path':'the-club', component: TheClubComponent }
];
