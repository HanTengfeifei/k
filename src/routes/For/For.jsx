import React  from "react";
import "./For.less";
import reqwest from "reqwest";
import $ from 'jquery';
import md5 from "md5";
import { Card, Col, Row } from 'antd';


class Translate extends React.Component{
  constructor(props){
    super(props);
    //设置state
    this.state={
inputValue:"",
      outputValue:"",
      all:"",

    }
    this.doAjax=this.doAjax.bind(this);
// this.change=this.change.bind(this);
  }
// change(e){
//     var content=this;
//   content.setState({
//    inputValue: e.target.value
//   });
// }
  doAjax(e){
    this.setState({
      all:"",


    })
    var content =this;
    var value =e.currentTarget.value;
console.log(value);
    // var appkey = '19b9b327c6ef4388';
    // var key = 'nwn8MQOKNwcrMDkzJQD9wIgqSYtm78K8';//注意：暴露appSecret，有被盗用造成损失的风险
    // var salt = (new Date).getTime();
    // var query = value;
    // // 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
    // var from = 'auto';
    // var to = 'auto';
    // var str1 = appkey + query + salt +key;
    // var sign = md5(str1);
    //
    // $.ajax({
    //   url: "https://openapi.baidu.com/oauth/2.0/token?grant_type=client_credentials&"+"client_id=25kb5bHiEO7HbUhB1v8siQxU" + "&client_secret=UZFhbb1Aw9stdiGffmlcB6PoWm9NjYO1",
    //   type: 'post',
    //   dataType: 'jsonp',
    // //   data:JSON.stringify( {
    // //     grant_type:"client_credentials",
    // //     client_id:"25kb5bHiEO7HbUhB1v8siQxU",
    // // client_secret:"UZFhbb1Aw9stdiGffmlcB6PoWm9NjYO1 "
    // //
    // //   }),
    //   success: function (data) {
    //   doIt();
    //
    //   },
    //
    // });

var time=new Date().getTime();

    var access_token="24.6583064f39aaf9154c7950b72def028b.2592000.1522421290.282335-10866290";
var url="http://tsn.baidu.com/text2audio?";
    var  tex=encodeURI(value);
 var other="lan=zh&ctp=1&cuid="+time+"&tok="+access_token+"&tex="+tex+"&vol=9&per=0&spd=5&pit=5&time="+time;
 var all=url+other;

    this.setState({
      all:all
    });
    var audio=document.getElementById("audio");
    audio.load();
    audio.currentTime = 0;
    audio.play();
  }
  render(){

 const all=this.state.all;
    return(<div>
        <Row gutter={12}>

          <Col span={12}>
            <h1>输入框:</h1>
            <textarea  ref={"input"} name=""   onBlur={(e)=>this.doAjax(e)}     className="inputClass" id="" cols="50" rows="20"></textarea>
          </Col>
          <Col span={12}>
            <audio   id="audio" autoPlay={"autoplay"}>
              <source  cache="false" src={all} type="audio/mp3"/>
              {/*<source src={all} type="audio/mpeg"/>*/}
              {/*<embed  autostart="true" height="0" width="0" src={all}/>*/}
              {console.log(all)}
          </audio>

          </Col>
        </Row>
      </div>

    )
  }

}
export default Translate;
