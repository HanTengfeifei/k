import React from 'react';
import {Card, Row, Col, Alert, Icon ,Input, Button,Modal} from 'antd';

// import reqwest from 'reqwest';
import './Video.less';
import $ from 'jquery';


class VideoList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      VideoList: [],
    };
    this.fresh=this.fresh.bind(this);
  }

  componentDidMount() {

    const context=this;
    $.ajax({
      url: 'http://localhost:3000/video',
      type: 'get',
      dataType: 'json',
      data: {

      },
      success: function (data) {
        context.setState(
          {
           VideoList:data

          }
        );
      }
    });
  }
  fresh(){
    const context=this;
    $.ajax({
      url: 'http://localhost:3000/video',
      type: 'get',
      dataType: 'json',
      data: {

      },
      success: function (data) {
        context.setState(
          {
            VideoList:data

          }
        );
      }
    });
  }

  render() {
    const {VideoList} = this.state;
    return (

      <div>
        <div className="roletitlet">
          <Row>
            <span>视频</span>
          </Row>

        </div>

        <main>
          <Row gutter={16}>
            <Card title="英语演讲系列">
              <p
                style={{
                  fontSize: 14,
                  color: 'rgba(0, 0, 0, 0.85)',
                  marginBottom: 16,
                  fontWeight: 500,
                }}
              >
                英语演讲系列
              </p>

              {VideoList.map((item) => {
                return (
                  <Card
                    type="inner"
                    title={item.title}
                    extra={<a href="#">More</a>}
                  >
                    <video   style={{width:"70%",height:"100%"}}   controls={"controls"} src={item.url}/>
                    <div className="roleeditde">
                      {/*<Button size="small" className="edit" type="primary" onClick={this.showModal}>*/}
                      {/*<Icon type="edit"/>*/}
                      {/*编辑*/}
                      {/*</Button>*/}
                      <Button size="small" type="info" className="delete"  onClick={(e) => {
                        e.stopPropagation();
                        var context = this;
                        const id = item.id;
                        Modal.confirm({
                          title: '您确定要删除这个视频嘛？',
                          content: '删除后，该视频将不能恢复！！！',
                          onOk() {
                            $.ajax({
                              url: 'http://localhost:3000/video/'+id,
                              type: 'delete',
                              dataType: 'json',
                              data: {

                              },
                              success: function (data) {
                                context.fresh();
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


                );
              })
              }
            </Card>



          </Row>
        </main>
      </div>
    );
  }
}


export default VideoList;
