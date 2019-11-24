//import { Component, OnInit, Input} from '@angular/core';
import { Component, OnInit} from '@angular/core';

import { store } from '../../../store';
import { changeTitle } from '../../../store/actions/actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //@Input() title: string;
  constructor() {

  }
  title: string;
  ngOnInit() {
    this.title = store.getState().state;
  }
  go_back(){
    history.go(-1);
    console.log('click');
  }
}
