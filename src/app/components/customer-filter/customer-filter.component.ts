import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-filter',
  templateUrl: './customer-filter.component.html',
  styleUrls: ['./customer-filter.component.scss']
})
export class CustomerFilterComponent implements OnInit {

  readonly name: string = "Customer filter"
  readonly discardFiltersButtonLabel: string = "Discard filters"
  readonly applyFiltersButtonLabel: string = "Apply filters"

  constructor() { }

  ngOnInit(): void {
  }

  onDiscardFiltersButtonClick() {
    console.log("Discard Filters Clicked!")
  }

  onApplyFiltersButtonClick() {
    console.log("Apply Filters Clicked!")
  }

}
