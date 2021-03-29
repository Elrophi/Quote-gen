import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { QuotesDetailComponent } from './quotes-detail/quotes-detail.component';
import { TopQuoteDirective } from './top-quote.directive';
import { FormsModule } from '@angular/forms';
import { DateDuePipe } from './date-due.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuotesFormComponent,
    QuotesDetailComponent,
    TopQuoteDirective,
    DateDuePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
