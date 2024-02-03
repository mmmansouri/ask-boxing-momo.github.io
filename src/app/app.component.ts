import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./pages/home/home.component";
import { InfiniteScrollComponent } from "./components/infinite-scroll-component/infinite-scroll.component";
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink,HomeComponent, HeaderComponent, FooterComponent, InfiniteScrollComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ask-boxing-momo';
}
