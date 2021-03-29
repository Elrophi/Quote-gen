import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  title = 'welcome to Status-Quotes';
  quotes:Quote[] = [
    new Quote (1,'African','Life','he greatest glory in living lies not in never falling, but in rising every time we fall','Nelson Mandela', new Date(2021,1,12),0,0),
    new Quote (2,'American','Humanity','Your time is limited, so do not waste it living someone elses life. Do not be trapped by dogma – which is living with the results of other peoples thinking.','Steve Jobs',new Date(2021,3,22),0,0),
  ];
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }  
  addedQuote(quote){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  quoteDelete(isRead, index){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }
 
  displayInfo(index){
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
