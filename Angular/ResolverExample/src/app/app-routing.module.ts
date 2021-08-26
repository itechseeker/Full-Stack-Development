import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostResolverService } from './post-table/post-resolver.service';
import { PostTableComponent } from './post-table/post-table.component';

// Set path for each route componenent
const routes: Routes = [
  {path:'post', component: PostTableComponent, resolve:{posts:PostResolverService}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
