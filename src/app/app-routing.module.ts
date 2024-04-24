import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HealthcheckComponent } from './healthcheck/healthcheck.component';
import { PartnersComponent } from './partners/partners.component';
import { ToolsComponent } from './tools/tools.component';
import { HelplineComponent } from './helpline/helpline.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'health-check', component: HealthcheckComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'tools', component: ToolsComponent },
  { path: 'login', component: LoginComponent},
  { path: 'sign-up', component: SignupComponent},
  { path: 'helpline', component: HelplineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
