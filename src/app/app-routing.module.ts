import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, CanActivate } from '@angular/router'

import { MainFeedComponent } from './main-feed/main-feed.component'

import { AuthGuard } from './auth.guard'

const routes: Routes = [
{ path: '**', component: MainFeedComponent }  
]
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
