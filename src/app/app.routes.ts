import { Routes } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { AdultsComponent } from "./pages/adults/adults.component";
import { KidsComponent } from "./pages/kids/kids.component";
import { TheClubComponent } from "./pages/the-club/the-club.component";
import { LadiesComponent } from "./pages/ladies/ladies.component";
import { TheMuayThaiComponent } from "./pages/the-muay-thai/the-muay-thai.component";
import { AccessToLocalsComponent } from "./pages/access-to-locals/access-to-locals.component";
import { InfiniteScrollComponent } from "./components/infinite-scroll-component/infinite-scroll.component";
import { AppComponent } from "./app.component";

export const routes: Routes = [
  { 'path':'', component: HomeComponent },
  { 'path':'adults', component: AdultsComponent },
  { 'path':'kids', component: KidsComponent },
  { 'path':'the-club', component: TheClubComponent },
  { 'path':'ladies', component: LadiesComponent },
  { 'path':'the-muay-thai', component: TheMuayThaiComponent },
  { 'path':'access-to-locals', component: AccessToLocalsComponent },
  { 'path':'background', component: InfiniteScrollComponent },

  //Wild Card Route for 404 request
  { 'path': '**', component: HomeComponent },
];
