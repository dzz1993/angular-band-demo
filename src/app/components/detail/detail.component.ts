import { Component, OnInit } from '@angular/core';
import { store } from '../../../store';
import { changeTitle } from '../../../store/actions/actions';
import { ToastrService } from 'ngx-toastr';
import '../../../assets/js/mock.js'
import axios from 'axios';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  consume_detail: any = [];
  cardContent: any ="";
  constructor(private _toastrService: ToastrService) {
    store.dispatch(changeTitle("明细"));
  }
  ngOnInit() {
    this.getConsumeList();
    this.getCardContent();
  }

  show(){
    this._toastrService.info('该功能尙未开发完成！', '未开放功能', {
      timeOut: 2000, positionClass:'toast-center-center'})
  }
  refresh(){
    this.getConsumeList();
    this.getCardContent();
  }
  getConsumeList = function() {
    //使用内置的get请求获取mock数据报错，这个没去深究原因，换了自己习惯的axios
    //this.http.get(url).subscribe(res=>{ this.anyList = res });
    axios.get('/api/getConsumeList').then((response)=>{
      this.consume_detail = response.data.obj;
    });
  };
  getCardContent = function() {
    let me = this;
    axios.get('/api/getCardContent').then(function(response) {
      me.cardContent = response.data.obj;
      console.log(me.cardContent);
    });
  }


}
