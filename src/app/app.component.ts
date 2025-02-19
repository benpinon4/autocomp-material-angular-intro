import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
@ViewChild('autocompleteElem') autocomplete: MatAutocomplete | undefined;
  title = 'autocomplete';
  optionStore: string[] = [];
  options: string[] = [];
  loadingData = false;

  dataSubject = new Subject<string>();
text: any;

  ngOnInit() {
    const mockOptions = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
    const randomOptions = [];

    for (let i = 0; i < 50; i++) {
      const randomIndex = Math.floor(Math.random() * mockOptions.length);
      randomOptions.push(mockOptions[randomIndex]);
    }

    this.optionStore = randomOptions;
    this.options = this.optionStore.slice(0, 10);
  }

  filterData(event: string): void { 
    const filterValue = event.toLowerCase();
    this.options = this.optionStore.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}