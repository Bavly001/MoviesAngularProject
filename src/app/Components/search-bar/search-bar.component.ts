import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() sendSearchValue!: (searchValue: string) => void;

  onChangeSearch(event: Event) {
    this.sendSearchValue((event.target as HTMLInputElement).value);
  }
}
