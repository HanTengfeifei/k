import React from 'react';
import {Card, Row, Col, Alert, Icon ,Input, Button,Modal} from 'antd';


// import reqwest from 'reqwest';
import './Audio.less';
import $ from 'jquery';


const Search = Input.Search;


class RoleList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      link: [],
    };
    this.fresh=this.fresh.bind(this);
  }

  componentDidMount() {

    const context=this;
    $.ajax({
      url: 'http://localhost:3000/link',
      type: 'get',
      dataType: 'json',
      data: {

      },
      success: function (data) {
        context.setState(
          {
            link:data

          }
        );
      }
    });
  }
  fresh(){
    const context=this;
    $.ajax({
      url: 'http://localhost:3000/link',
      type: 'get',
      dataType: 'json',
      data: {

      },
      success: function (data) {
        context.setState(
          {
            link:data

          }
        );
      }
    });
  }

  //查询所有角色
  // findRoleAll = () => {
  //   var context=this;
  //   RequireUtils.baseRequire('role/findRoleAll',{},function (data) {
  //     context.setState({
  //       roleList: data
  //     });
  //   }.bind(this));
  // }

  //搜索
  // roleSearchBox = () => {
  //   this.setState({ loading: true });
  //   RequireUtils.baseRequire('role/searchRole',{
  //     "name_rl":$(".rolesearchfix").val(),
  //   },function (data) {
  //     console.log(data);
  //     this.setState({
  //       roleList: data
  //     });
  //   }.bind(this));
  // };

  render() {
    const {link} = this.state;
    return (
      <div>
        <div className="roletitle">
          <Row>
          <span>听力模块</span>
          </Row>

        </div>

        <main>
          <Row gutter={16}>
          <Card title="听力">
            <p
              style={{
                fontSize: 14,
                color: 'rgba(0, 0, 0, 0.85)',
                marginBottom: 16,
                fontWeight: 500,
              }}
            >
              听力
            </p>

            {link.map((item) => {



  // const st = str.Replace(/\r\n/g,"<br>");
  // const stri = st.Replace(/\n/g,"<br>");
  // var string = str.replace(/\n/g, "");

              return (

                <Card
                  type="inner"
                  title={item.title}
                  extra={<a href="#">More</a>}
                >
                  <audio  style={{width:"100%"}} controls={"controls"} src={item.src}/>

                  <div>{ item.content?(item.content.replace(/\r\n/g,"<br>")):"" }</div>

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
                        title: '您确定要删除这个听力吗？',
                        content: '删除后，听力将被清除无法恢复',
                        onOk() {
                          $.ajax({
                            url: 'http://localhost:3000/link/'+id,
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


export default RoleList;
