import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordDetailComponent } from './dictionary/word-detail/word-detail.component';
import { WordListComponent } from './dictionary/word-list/word-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WordDetailComponent,
    WordListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
