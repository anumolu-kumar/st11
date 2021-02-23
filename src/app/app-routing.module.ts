import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { BlogMainComponent } from './components/blog-main/blog-main.component';
import { BlogArticleComponent } from './components/blog-article/blog-article.component';
import { WarrantySupportComponent } from './components/warranty-support/warranty-support.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'contact-us', component: ContactComponent},
  {path: 'warranty-support', component:WarrantySupportComponent},
  {path: 'blog', component: BlogMainComponent},
  {path: 'blog/:id', component: BlogArticleComponent},
  {path: '', pathMatch:"full", redirectTo: 'home'},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
