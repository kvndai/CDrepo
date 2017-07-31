import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AnswerComponent } from './answer/answer.component';
// import { QuestionComponent } from './question/question.component';
import { EventInfoComponent } from './event-info/event-info.component';
// import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', component: DashboardComponent},
  { path: 'eventinfo', component: EventInfoComponent },
  // { path: 'question/:id', component: QuestionComponent },
  // { path: 'question/:id/answer', component: AnswerComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
