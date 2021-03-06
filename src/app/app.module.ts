import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BadnewsPusherComponent } from './badnews-pusher/badnews-pusher.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, BadnewsPusherComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
