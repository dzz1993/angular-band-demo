import { Injectable } from '@angular/core';
import { ServiceModule } from './service.module';
import axios from 'axios';
import '../../assets/js/mock.js';

@Injectable({
  providedIn: ServiceModule
})
export class DetailService {
  consume_detail: any;
  cardContent: any;//定义这两个属性没有任何意义，就是不想看提示工具报错
  constructor() { }

 getConsumeList()  {
    //this.http.get(url).subscribe(res=>{ this.anyList = res });//使用内置的get请求获取mock数据报错，这个没去深究原因，换了自己习惯的axios
    axios.get('/api/getConsumeList').then((response)=>{
      this.consume_detail = response.data.obj;
    });
  };
 getCardContent() {
    axios.get('/api/getCardContent').then((response) =>{
      this.cardContent = response.data.obj;
    });
  }
}
