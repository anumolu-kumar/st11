import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { WarrantySupportComponent } from './components/warranty-support/warranty-support.component';
import { BlogMainComponent } from './components/blog-main/blog-main.component';
import { BlogArticleComponent } from './components/blog-article/blog-article.component';
import { AboutComponent } from './components/about/about.component';
import { FeatureComponent } from './components/feature/feature.component';
import { MainComponent } from './components/main/main.component';
import { EffecientComponent } from './components/effecient/effecient.component';
import { ModesComponent } from './components/modes/modes.component';
import { SleekestComponent } from './components/sleekest/sleekest.component';
import { InnerComponent } from './components/inner/inner.component';
import { ObjectlistComponent } from './components/objectlist/objectlist.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { YoutubeComponent } from './components/youtube/youtube.component';
import { PressComponent } from './components/press/press.component';
import { InstagramComponent } from './components/instagram/instagram.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    WarrantySupportComponent,
    BlogMainComponent,
    BlogArticleComponent,
    AboutComponent,
    FeatureComponent,
    MainComponent,
    EffecientComponent,
    ModesComponent,
    SleekestComponent,
    InnerComponent,
    ObjectlistComponent,
    PurchaseComponent,
    YoutubeComponent,
    PressComponent,
    InstagramComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
