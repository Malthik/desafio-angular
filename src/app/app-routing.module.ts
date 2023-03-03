import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './data/guard/auth.guard';
import { AddCooperativeMemberComponent } from './pages/add-cooperative-member/add-cooperative-member.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    path: 'admissao',
    component: AddCooperativeMemberComponent,
  },

  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
