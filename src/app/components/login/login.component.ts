import { Component, OnInit } from '@angular/core';
import { store } from '../../../store';
import { changeTitle } from '../../../store/actions/actions';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title: string = '';
  constructor(private http: HttpClient) {
    store.dispatch(changeTitle("首页"));
  }
  ngOnInit() {
     this.title = store.getState().state;
  }
}
