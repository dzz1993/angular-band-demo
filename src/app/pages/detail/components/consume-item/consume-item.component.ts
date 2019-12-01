import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-consume-item',
  templateUrl: './consume-item.component.html',
  styleUrls: ['./consume-item.component.css']
})
export class ConsumeItemComponent implements OnInit {
  @Input() consume_item: any;
  constructor() { }

  ngOnInit() {
  }

}
