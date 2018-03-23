

#### 技术栈            
 👍🏻[create-react-app](https://github.com/facebookincubator/create-react-app)         
 👍🏻[ant design](https://ant.design/index-cn)       
 👍🏻[dva.js](https://github.com/dvajs/dva)     
 👍🏻[react](https://facebook.github.io/react/)     
 👍🏻[react-router](https://github.com/ReactTraining/react-router)      
 👍🏻[webpack](https://webpack.js.org/concepts/)      
 👍🏻[babel](https://babeljs.io/)     
...       

#### 特性       
 :yum:简洁的界面       
 :yum:菜单主题和布局切换       
 :yum:格栅布局，fully responsive       
 :yum:Code Splitting。开启 gzip，[首屏文件仅100多KB](https://github.com/huzzbuzz/bear-admin/blob/master/screenshot/filesize.png)，应用载入速度超快                
 :yum:高质量脚手架                 
 :yum:eject create-react-app 配置，按需定制（OR [override create-react-app webpack configs without ejecting](https://github.com/timarney/react-app-rewired)）                     
 :yum:支持更多语言特性和 polyfills，发现更多，请访问 [create-react-app](https://github.com/facebookincubator/create-react-app) 官网

#### 开始
1. 克隆源码       
```
git clone git@github.com:HanTengfeifei/k.git
```

2. 安装依赖         
```
cd k
npm i or yarn
```

3. 调试应用         
```
npm start
y

```
cd /sever
json-server db.json -w -p 3000


4. 发布应用         
```
npm run build
```
> it will builds the app for production to the build folder. your app is ready to be deployed.        


#### 更多       

如何处理异步请求？       
如何统一处理出错？            
如何 mock 数据？       
更多实战，请参阅：
   - [mockjs 文档](https://github.com/nuysoft/Mock/wiki)      
   - [dva 文档](https://github.com/dvajs/dva)     
   - [dva 知识地图](https://github.com/dvajs/dva-knowledgemap)
   - [create-react-app 文档](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)   
   - [code splitting in create-react-app](http://serverless-stack.com/chapters/code-splitting-in-create-react-app.html)

#### 致谢     
create-react-app      
react 全家桶     
antd 全家桶       

:heartbeat::heartbeat: 欢迎 star 支持 :heartbeat::heartbeat: 

<hr />     

#### 顶部菜单
![1](https://user-images.githubusercontent.com/16314691/29705003-bbcbd414-89ae-11e7-82df-1acd2a998324.jpg)
#### 左侧菜单
![2](https://user-images.githubusercontent.com/16314691/29705022-d5cb4d36-89ae-11e7-8ded-73f116e49e28.jpg)
#### 黑色主题
![3](https://user-images.githubusercontent.com/16314691/29705023-d5cbeb7e-89ae-11e7-8d38-ef003c73a6fc.jpg)
#### 个人资料
![4](https://user-images.githubusercontent.com/16314691/29705026-d5d1456a-89ae-11e7-9e1f-aad58ef1501e.jpg)
#### Antd 图标&其他
![5antd](https://user-images.githubusercontent.com/16314691/29705024-d5cdc7fa-89ae-11e7-9068-eb6f7e7ee656.jpg)
#### 自定义表格
![6](https://user-images.githubusercontent.com/16314691/29705025-d5cf6628-89ae-11e7-9548-67d076734642.jpg)
#### 自适应
![7](https://user-images.githubusercontent.com/16314691/29705027-d5deae62-89ae-11e7-82a2-e7dbd702d67d.jpg)
#### Ant-Motion Logo 动画
![8 ant](https://user-images.githubusercontent.com/16314691/29705202-9483fb74-89af-11e7-903a-f4b45b51f766.jpg)
#### Ant-Motion 详细说明切换
![9](https://user-images.githubusercontent.com/16314691/29705203-9494e63c-89af-11e7-9146-07a152e3c972.jpg)        


#### 目录结构

```bash
├── /build/           # 打包输出
├── /config/          # create-react-app 配置
│ ├── /webpack.config.dev.js/   # 开发配置
│ ├── /webpack.config.prod.js/  # 生产配置
├── /public/         # 公共文件
├── /scripts/        # create-react-app 脚本
├── /src/            # 项目源码
│ ├── /assets/      # 资源文件
│ ├── /components/  # 示例组件
│ ├── /containers/  # layout 组件
│ ├── /models/      # dva 数据模型
│ ├── /theme/       # 皮肤样式
│ ├── /utils/       # 工具函数
│ │ └── config.js    # 项目配置
│ ├── route.js      # 路由配置
│ └── index.js      # 入口文件
└── package.json    # 项目信息
```

:heartbeat::heartbeat: 欢迎 star 支持 :heartbeat::heartbeat: 
