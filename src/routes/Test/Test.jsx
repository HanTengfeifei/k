import { Radio,Avatar } from 'antd';
import { Card ,Modal,Button,Icon  } from 'antd';
import React from "react";
import RequireUtils from '../../utils/index';
import "./Test.less"
import { connect } from 'dva';

import { withRouter } from 'dva/router';
import $ from 'jquery';
const RadioGroup = Radio.Group;


class TestAll extends React.Component {
  constructor(props){
    super(props);
    //设置state
    this.state = {
      score:0,
result:[],
      test:[]
    }
this.save=this.save.bind(this);
    this.getScore=this.getScore.bind(this);
this.fresh=this.fresh.bind(this);

  }
  fresh(){
    const context=this;
    $.ajax({
      url: 'http://localhost:3000/test',
      type: 'get',
      dataType: 'json',
      data: {

      },
      success: function (data) {
        context.setState(
          {
            test:data

          }
        );


      }
    });
  }
  componentDidMount(){
    const context=this;
    $.ajax({
      url: 'http://localhost:3000/test',
      type: 'get',
      dataType: 'json',
      data: {

      },
      success: function (data) {
         context.setState(
           {
             test:data

          }
         );


      }
    });
}

save(){

//
   var result=[];
   this.state.test.forEach( (item)=>{
     const ref= item.ref;
    const number=+item.answer;
console.log(ref);
if(this.refs[ref].getIt()===number){
  result.push(2);
}
else{
  result.push(0);
}


});

 this.setState({
  result :result
})
 }
getScore(){
  var score=0;
  var result=this.state.result;

  for(var i in result)
  {
    score+=result[i];

  }
  this.setState({
    score:score
  });

}

  render() {
    const {test}=this.state;

    return (
      <div>


        <div >
          <Avatar style={{ backgroundColor: '#f56a00', verticalAlign: 'middle' }} size="large">
            {this.state.score}
          </Avatar>
          <Button type="primary" icon="download" size={"default"} onClick={this.save.bind(this)}>save</Button>
          <Button type="primary" ghost onClick={this.getScore}>查看分数</Button></div>

        {test.map((item)=>(

          <Test   sent={this.fresh} ref={item.ref}  item ={item}/>
        ))}
      </div>

  );
  }
}

export default withRouter(connect(({ test }) => ({ test }))(TestAll));
class Test extends React.Component {
  constructor(props){
    super(props);
    //设置state
    this.state = {
value:0
    };

  }

  onChange = (e) => {

    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }


getIt=()=>{
    const context=this;
    const it=context.state.value;
return it;
}
  render() {

    const item=this.props.item;
    return (
      <div>
        <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Card title={item.title} bordered={false} style={{ width: "100%" }}>
            <RadioGroup onChange={this.onChange} value={this.state.value} >
              <Radio value={1}>{item.first}</Radio>
              <Radio value={2}>{item.second}</Radio>
              <Radio value={3}>{item.third}</Radio>
              <Radio value={4}>{item.fourth}</Radio>
            </RadioGroup>
            <div className="roleeditde">
              {/*<Button size="small" className="edit" type="primary" onClick={this.showModal}>*/}
                {/*<Icon type="edit"/>*/}
                {/*编辑*/}
              {/*</Button>*/}
              <Button size="small" type="info" className="delete"  onClick={(e) => {
                e.stopPropagation();
                var context = this;
                const id = this.props.item.id;
                Modal.confirm({
                  title: '您确定要删除这道题目吗？',
                  content: '删除后，该题目将被清除',
                  onOk() {
                    $.ajax({
                      url: 'http://localhost:3000/test/'+id,
                      type: 'delete',
                      dataType: 'json',
                      data: {

                      },
                      success: function (data) {
                        context.props.sent();
                        alert("删除成功！");
                      }
                    });
                  },
                  onCancel() {
                    console.log('Cancel');
                  },
                });
              }}>
                <Icon type="delete"/> 删除
              </Button>
            </div>
          </Card>
        </div>

      </div>
    );
  }
}
