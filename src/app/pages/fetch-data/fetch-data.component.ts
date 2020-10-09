import { Component, OnDestroy, OnInit } from '@angular/core';
import { FetchDataService } from './fetch-data.service';
import { Subject} from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';
import { IUser } from './IUser';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.scss']
})
export class FetchDataComponent implements OnInit, OnDestroy {
  constructor(private fetchDataService: FetchDataService) {}
  data: Array<IUser>;
  filter$: Subject<string>;
  titles: Array<string>;

  filterValue = '';
  filterControl = new FormControl('');
  isFilterLoad = false;

  ngOnInit(): void {
    this.initFilter();
    this.renderData();
  }

  private renderData(): void {
    this.fetchDataService.getUsers()
      .pipe(
        map(data => {
          console.log('===> map', data);
          this.titles = this.fetchDataService.generateTitles(data[0]);
          return data.filter(item => {
            return item.name.toLowerCase().includes(this.filterControl.value.toLowerCase());
          });
        }),
      )
      .subscribe({
        next: data => {
          console.log('===> next', data);
          this.data = data;
        },
        error: err => {
          console.log('===> error', err);
        },
        complete: () => {
          console.log('===> complete');
          this.isLoadFilter(false);
        },
      });
  }

  ngOnDestroy(): void {
    this.filter$.unsubscribe();
  }

  private initFilter(): void {
    this.filterControl.valueChanges
      .pipe(
        debounceTime(1000)
      )
      .subscribe(value => {
        console.log('initFilter', value);
        this.isLoadFilter(true);
        this.renderData();
      });
    this.filter$ = new Subject();
  }

  private isLoadFilter(isLoad: boolean): void {
    this.isFilterLoad = isLoad;
  }
}
