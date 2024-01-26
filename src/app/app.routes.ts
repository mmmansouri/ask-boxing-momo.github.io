import { Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AdultsComponent } from "./adults/adults.component";
import { KidsComponent } from "./kids/kids.component";
import { TheClubComponent } from "./the-club/the-club.component";
import { LadiesComponent } from "./ladies/ladies.component";
import { TheMuayThaiComponent } from "./the-muay-thai/the-muay-thai.component";
import {AccessToLocalsComponent} from "./access-to-locals/access-to-locals.component";

export const routes: Routes = [
  { 'path':'', component: HomeComponent },
  { 'path':'adults', component: AdultsComponent },
  { 'path':'kids', component: KidsComponent },
  { 'path':'the-club', component: TheClubComponent },
  { 'path':'ladies', component: LadiesComponent },
  { 'path':'the-muay-thai', component: TheMuayThaiComponent },
  { 'path':'access-to-locals', component: AccessToLocalsComponent },
  //Wild Card Route for 404 request
  { path: '**', pathMatch: 'full',
    component: HomeComponent },
];
