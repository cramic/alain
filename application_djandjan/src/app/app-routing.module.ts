import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { HistoryComponent } from './history/history.component';
import { ChiensComponent } from './chiens/chiens.component';
import { NicheesComponent } from './nichees/nichees.component';
import { MaleComponent } from './male/male.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent},
  { path: 'history', component: HistoryComponent },
  { path: 'chiens', component: ChiensComponent },
  { path: 'nichees', component: NicheesComponent },
  { path: 'male', component: MaleComponent },
  { path: 'results', component: ResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
      this.router.navigate(['home']);
    };
  }
}
