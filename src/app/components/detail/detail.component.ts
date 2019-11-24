import { Component, OnInit } from '@angular/core';
import { store } from '../../../store';
import { changeTitle } from '../../../store/actions/actions';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  constructor(private _toastrService: ToastrService) {
    store.dispatch(changeTitle("明细"));
  }
  show(){
    this._toastrService.info('该功能尙未开发完成！', '未开放功能', {
      timeOut: 2000, positionClass:'toast-center-center'})
  }
  ngOnInit() {

  }
// 消费详情列表模拟接口返回的数据，其余数据就不采用接口形式了
  consume_detail = [
    {
      "title":"今天",
      "is_first":1,
      "list":[{
        "pic":'assets/image/icon-wine.png',
        "position":'支付宝-某某消费(北京)有限公司',
        "detail":"零食烟酒 信用卡2233 09:12:12",
        "flag":"1",
        "consume_amount":23.23,
        "balance":222288.20
      }]
    },
    {
      "title":"昨天",
      "is_first":0,
      "list":[{
        "pic":'assets/image/icon-wine.png',
        "position":'支付宝-xxx消费(大连)有限公司',
        "detail":"烟酒副食 信用卡2233 12:22:12",
        "flag":0,
        "consume_amount":24.01,
        "balance":222345.21
      },
        {
          "pic":'assets/image/icon-wine.png',
          "position":'支付宝-aaa消费(beijing)有限公司',
          "detail":"烟酒副食 信用卡2233 12:12:55",
          "flag":1,
          "consume_amount":124.01,
          "balance":222469.21
        }
      ]
    },
    {
      "title":"11月20日",
      "is_first":0,
      "list":[{
        "pic":'assets/image/icon-wine.png',
        "position":'支付宝-bbb消费(大连)有限公司',
        "detail":"烟酒副食 信用卡2233 22:10:09",
        "flag":0,
        "consume_amount":44.04,
        "balance":222999.64
      },
        {
          "pic":'assets/image/icon-wine.png',
          "position":'支付宝-aaa消费(beijing)有限公司',
          "detail":"烟酒副食 信用卡2233 12:12:55",
          "flag":0,
          "consume_amount":1.03,
          "balance":223000.64
        }
      ]
    },
  ]

}
