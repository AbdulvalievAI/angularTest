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

@Component({
  selector: 'app-cdkscrolling',
  templateUrl: './cdkscrolling.component.html',
  styleUrls: ['./cdkscrolling.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CDKScrollingComponent implements OnInit, AfterViewInit {
  public itemSize = 50;
  public scrolledIndexChangeNum: number;

  @ViewChild('viewport') viewport: CdkVirtualScrollViewport;
  public window: Window;
  public readonly numbers1: Array<number> = new Array(500)
    .fill(null)
    .map((_, index) => index);

  constructor(private _scrollDispatcher: ScrollDispatcher) {}

  ngOnInit(): void {
    this.window = window;
  }

  public scrolledIndexChange(num: number): void {
    this.scrolledIndexChangeNum = num;
  }

  ngAfterViewInit(): void {
    // this._scrollDispatcher.scrolled().subscribe((value) => {
    //   console.log('Dispatcher scrolled', value);
    // });
    // this._scrollDispatcher
    //   .ancestorScrolled(this.viewport1.getElementRef(), 1000)
    //   .subscribe((value) => {
    //     console.log('ancestorScrolled', value);
    //     console.log('=========================');
    //     console.log('ancestorScrolled');
    //     console.log('getViewportSize', this.viewport1.getViewportSize());
    //
    //     console.log(
    //       'getAncestorScrollContainers',
    //       this._scrollDispatcher.getAncestorScrollContainers(
    //         this.viewport1.getElementRef()
    //       )
    //     );
    //   });
    // this.viewport.elementScrolled().subscribe((value) => {
    //   console.log('viewport | elementScrolled', value);
    // });
  }

  public objectToString(value: any): string {
    return JSON.stringify(value);
  }
}
