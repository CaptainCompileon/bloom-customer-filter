import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FilterStep } from 'src/app/models/interfaces/filter-step.model';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-customer-filter',
  templateUrl: './customer-filter.component.html',
  styleUrls: ['./customer-filter.component.scss']
})
export class CustomerFilterComponent implements OnInit {

  readonly name: string = "Customer filter"
  readonly discardFiltersButtonLabel: string = "Discard filters"
  readonly applyFiltersButtonLabel: string = "Apply filters"
  readonly addFunnelStepButtonLabel: string = "Add funell step"

  filterSteps$!: Observable<FilterStep[]>;


  constructor(private filterService: FilterService) {

   }

  ngOnInit(): void {
    this.filterService.addFilterStep();
    this.filterSteps$ = this.filterService.FilterSteps

  }

  onDiscardFiltersButtonClick() {
    console.log("Discard Filters Clicked!")
  }

  onApplyFiltersButtonClick() {
    console.log("Apply Filters Clicked!")
    console.log(this.filterService.Filter);
  }

  onAddFunnelStepClick() {
    console.log("Add Funnel Step Clicked!")
    this.filterService.addFilterStep();
  }

}
