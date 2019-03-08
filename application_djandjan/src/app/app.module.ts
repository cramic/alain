import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HistoryComponent } from './history/history.component';
import { FooterComponent } from './footer/footer.component';
import { ChiensComponent } from './chiens/chiens.component';
import { NicheesComponent } from './nichees/nichees.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ChiensElevageService } from './services/chiens-elevage.service';
import { MaleComponent } from './male/male.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HistoryComponent,
    FooterComponent,
    ChiensComponent,
    NicheesComponent,
    WelcomeComponent,
    MaleComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ChiensElevageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
