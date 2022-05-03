import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {RatingModule} from 'ng-starrating';
import {FormsModule} from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { TagsComponent } from './tags/tags.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ZoomDirective } from './shared/directives/zoom.directive';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'search/:searchTerm', component:HomeComponent},
  {path:'tag/:tag', component:HomeComponent},
  {path:'food/:id', component:FoodPageComponent},
  {path:'cart-page', component: CartPageComponent},

  // {path: '**', component: NotFoundComponent},
  // {path:'search/:searchTerm', component:HomeComponent},
  // {path:'tag/:tag', component:HomeComponent},
  // {path:'food/:id', component:FoodPageComponent},
  // {path:'cart-page', component: CartPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    FoodPageComponent,
    CartPageComponent,
    NotFoundComponent,
    ZoomDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    RatingModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
