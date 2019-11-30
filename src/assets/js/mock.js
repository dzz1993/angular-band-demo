import Mock from 'mockjs';
// 例1
Mock.mock('/api/getConsumeList', function () {
  return Mock.mock({
    status: 1,
    msg: '获取成功',
    //mack.js时间没法灵活处理，比如能指定日期，只能多写一些???
    obj: [
      {
        'title':"今天",
        "is_first":1,
        "list|1-3":[{
          "pic":'assets/image/icon-wine.png',
          "position":'支付宝-@cword( 4 )(北京)有限公司',
          "detail|1":["零食烟酒 信用卡2233 @time('HH:mm:ss') 其他品类" + " 信用卡2233 @time('HH:mm:ss')" ] ,
          "flag|1":[0,1],
          "consume_amount":'@float(10, 200, 2, 2)',
          "balance":'@float(6900, 20000, 2, 2)',
        }
        ]
      },
      {
        'title':"昨天",
        "is_first":0,
        "list|1-3":[{
          "pic":'assets/image/icon-wine.png',
          "position":'支付宝-@cword( 4 )(北京)有限公司',
          "detail|1":["零食烟酒 信用卡2233 @time('HH:mm:ss')", "其他品类" + " 信用卡2233 @time('HH:mm:ss')" ] ,
          "flag|1":[0,1],
          "consume_amount":'@float(10, 200, 2, 2)',
          "balance":'@float(6900, 20000, 2, 2)',
        }]
      },
      {
        'title':"2019-11-29",
        "is_first":0,
        "list|1-3":[{
          "pic":'assets/image/icon-wine.png',
          "position":'支付宝-'+'@cword(4)'+'(北京)有限公司',
          "detail|1":["零食烟酒"+ " 信用卡2233 @time('HH:mm:ss')", "其他品类" + " 信用卡2233  @time('HH:mm:ss')"] ,
          "flag|1":[0,1],
          "consume_amount":'@float(10, 200, 2, 2)',
          "balance":'@float(6900, 20000, 2, 2)',
        }]
      },
      {
        'title':"2019-11-28",
        "is_first":0,
        "list|1-3":[{
          "pic":'assets/image/icon-wine.png',
          "position|1":'支付宝-'+'@cword(4)'+'(北京)有限公司',
          "detail|1":["零食烟酒"+ " 信用卡2233 @time('HH:mm:ss')"  , "其他品类" + " 信用卡2233 @time('HH:mm:ss')" ] ,
          "flag|1":[0,1],
          "consume_amount":'@float(10, 200, 2, 2)',
          "balance":'@float(6900, 20000, 2, 2)',
        }]
      }
    ]

  })
});

Mock.mock('/api/getCardContent', function () {
  return Mock.mock({
    status: 1,
    msg: '获取成功',
    obj: {
      "month": '12',
      "year": '2019',
      "in": '@float(10, 200, 2, 2)',
      "out": '@float(10, 200, 2, 2)',
      "leave": '@float(6900, 20000, 2, 2)'
    }
  })
});
