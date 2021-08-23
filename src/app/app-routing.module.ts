import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TestingComponent } from './pages/testing/testing.component';

const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'home', component: AppComponent},
  { path: 'testing', component: TestingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
