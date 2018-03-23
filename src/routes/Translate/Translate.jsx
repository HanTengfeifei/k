import React  from "react";
import "./Translate.less";
import reqwest from "reqwest";
import $ from 'jquery';
import md5 from "md5";
import { Card, Col, Row ,Button } from 'antd';


class Translate extends React.Component{
  constructor(props){
    super(props);
    //设置state
    this.state={

      outputValue:"",
      all:""
    }
    this.doAjax=this.doAjax.bind(this);
this.tts=this.tts.bind(this);
  }

  doAjax(e){
    var content =this;
    const value =e.target.value;
    console.log(12333);
    var appkey = '19b9b327c6ef4388';
    var key = 'nwn8MQOKNwcrMDkzJQD9wIgqSYtm78K8';//注意：暴露appSecret，有被盗用造成损失的风险
    var salt = (new Date).getTime();
    var query = value;
    // 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
    var from = 'auto';
    var to = 'auto';
    var str1 = appkey + query + salt +key;
    var sign = md5(str1);

    $.ajax({
      url: 'http://openapi.youdao.com/api',
      type: 'post',
      dataType: 'jsonp',
      data: {
        q: query,
        appKey: appkey,
        salt: salt,
        from: from,
        to: to,
        sign: sign
      },
      success: function (data) {
        content.setState(
          {
            outputValue:data.translation

          }
        );

      }
    });
  }
  tts(){
    this.setState({
      all:"",
    })
    var content =this;
    var value =document.getElementById("text").value;
    console.log(value);
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
    const outputValue=this.state.outputValue;
    return(<div>
        <Row gutter={8}>
          <Col span={12}>

            <marquee behavior="alternate"></marquee>
          </Col>

        <Col span={12}>
          <Button  type="primary"  ghost  onClick={this.tts}>合成语音</Button>

        </Col>
        </Row>
          <Row gutter={8}>
            <Col span={12}>


        <h1>请输入要翻译的文本:</h1>
              <textarea name="" defaultValue={"请输入内容"}  onBlur={(e)=>this.doAjax(e)}    className="inputClass" id="" cols="50" rows="20"></textarea>
            </Col>

            <Col span={12}>
              <audio   id="audio" autoPlay={"autoplay"}>
                <source  cache="false" src={all} type="audio/mp3"/>
                {/*<source src={all} type="audio/mpeg"/>*/}
                {/*<embed  autostart="true" height="0" width="0" src={all}/>*/}
                {console.log(all)}
              </audio>
            </Col>
            <Col span={10}>
              <h1>翻译后的文本:</h1>
        <textarea name="" id="text"  value={outputValue} className="outputClass"  cols="50" rows="20"></textarea>

            </Col>

          </Row>

      </div>

    )
  }

}
export default Translate;
