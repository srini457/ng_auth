import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { AuthGuard } from './auth.guard';


const routes: Routes=[
  {path:'', redirectTo:'register', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'events', component: EventsComponent},
  {path:'specialEvents',canActivate: [AuthGuard], component: SpecialEventsComponent, 
  // canActivate: [AuthGuard] 
}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule  ]
})
export class AppRoutingModule { }
