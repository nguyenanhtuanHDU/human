import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NewsItemComponent } from './news-item/news-item.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';
import { NewsListComponent } from './news-list/news-list.component';
import { HomeComponent } from './home/home.component';
import { Post1Component } from './post1/post1.component';
import { LoadingComponent } from './loading/loading.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsItemComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    NewsListComponent,
    HomeComponent,
    LoadingComponent,
    PostComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
