import { Component, OnInit } from '@angular/core';
import { AbstractSource } from '../../../services/test-provide/abstractSource';

@Component({
  selector: 'app-switch-services',
  templateUrl: './switch-services.component.html',
  styleUrls: ['./switch-services.component.scss'],
})
export class SwitchServicesComponent implements OnInit {
  public data: Array<number>;

  constructor(private _sourceService: AbstractSource) {}

  ngOnInit(): void {
    this.data = this._sourceService.getPosts();
    console.log('====> this.data', this.data);
  }
}
