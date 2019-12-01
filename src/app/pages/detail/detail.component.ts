import { Component, OnInit } from '@angular/core';
import { store } from '../../../store';
import { changeTitle } from '../../../store/actions/actions';
import { ToastrService } from 'ngx-toastr';
import { DetailService } from '../../service/detail.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  consume_detail: any = [];
  cardContent: any ="";
  constructor(private _toastrService: ToastrService, private DetailService : DetailService ) {
    store.dispatch(changeTitle("明细"));
    this.DetailService.getConsumeList.apply(this);
    this.DetailService.getCardContent.apply(this);
  }
  ngOnInit() {

  }
  show(){
    this._toastrService.info('该功能尙未开发完成！', '未开放功能', {
      timeOut: 2000, positionClass:'toast-center-center'})
  }
  refresh(){
    this.DetailService.getConsumeList.apply(this);
    this.DetailService.getCardContent.apply(this);
  }


}
