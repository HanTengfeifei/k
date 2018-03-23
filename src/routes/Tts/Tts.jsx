import React  from "react";
import "./Tts.less";
import reqwest from "reqwest";
import $ from 'jquery';
import md5 from "md5";
import { Card, Col, Row ,Button} from 'antd';
 import Plyr from 'react-plyr';


class Tts extends React.Component{
  constructor(props){
    super(props);
    //设置state
    this.state={

      url:""

    }
    this.doAjax=this.doAjax.bind(this);

  }

  doAjax(){
    var content =this;
    const value =encodeURI(document.getElementById("input").value);

this.setState({

url:value

  });
    var audio=document.getElementById("audio");
    audio.load();
    audio.currentTime = 0;
    audio.play();
  }
  render(){
    const url="http://tts.baidu.com/text2audio?lan=zh&&ie=UTF-8&spd=2&text="+this.state.url;
    return(<div>
        <Row gutter={12}>

          <video poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg?v1" controls crossOrigin>

            <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.mp4" type="video/mp4"/>
              <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.webm" type="video/webm"/>


                <track kind="captions" label="English" srcLang="en" src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt"
                       default/>


                  <a href="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.mp4" download>Download</a>
          </video>

          <Button  type="primary"  ghost  onClick={()=>this.doAjax()}>语音合成</Button>
          <Col span={12}>
            <h1>输入框:</h1>
            <textarea  ref="input" name="" defaultValue={"请输入内容"}      className="inputClass" id="input" cols="50" rows="20"></textarea>
          </Col>
          <Col span={12}>
            <audio  id="audio" autoPlay={"autoplay"}>
              <source src={url} type="audio/mp3"/>
              <source src={url} type="audio/mpeg"/>
                <embed  autostart="true" height="0" width="0" src={url}/>

            </audio>

          </Col>
        </Row>
      </div>

    )
  }

}
export default Tts;
