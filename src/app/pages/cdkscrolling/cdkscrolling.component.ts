import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  CdkVirtualScrollViewport,
  ScrollDispatcher,
} from '@angular/cdk/scrolling';
import { BehaviorSubject } from 'rxjs';
import { filter, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-cdkscrolling',
  templateUrl: './cdkscrolling.component.html',
  styleUrls: ['./cdkscrolling.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CDKScrollingComponent implements OnInit, AfterViewInit {
  public itemSize = 50;
  public scrolledIndexChangeNum: number;
  private lengthItems = 0;
  @ViewChild('scrollCDK') scrollCDK: CdkVirtualScrollViewport;
  public window: Window;

  public items = new BehaviorSubject<string[]>([]);

  constructor(private _scrollDispatcher: ScrollDispatcher) {}

  ngOnInit(): void {
    this.window = window;
  }

  public scrolledIndexChange(num: number): void {
    this.scrolledIndexChangeNum = num;
  }

  ngAfterViewInit(): void {
    this.scrollCDK
      .elementScrolled()
      .pipe(
        filter(() => {
          return this.scrollCDK.measureScrollOffset('bottom') <= 100;
        }),
        throttleTime(300)
      )
      .subscribe(this.scrolledHandler.bind(this));
    setTimeout(this.scrolledHandler.bind(this), 300);
  }

  private scrolledHandler(): void {
    const newItems = this.getNewItems();
    this.setNewItems(newItems);
  }

  public objectToString(value: any): string {
    return JSON.stringify(value);
  }

  private getNewItems(): Array<string> {
    const newItems: Array<number> = [];
    for (
      let i = this.items.value.length;
      i < this.items.value.length + 30;
      i++
    ) {
      newItems.push(i);
    }
    return newItems.map<string>((value) => `Item ${value}`);
  }

  private setNewItems(newItems: Array<string>): void {
    this.items.next([...this.items.value, ...newItems]);
    this.lengthItems = this.items.value.length;
  }
}
