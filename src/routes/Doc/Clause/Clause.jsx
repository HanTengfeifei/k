import React from 'react';
import { Tabs, Radio } from 'antd';
import {Divider,BackTop} from 'antd';
import { Card } from 'antd';
import './Clause.less';
const TabPane = Tabs.TabPane;


class SlidingTabsDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'top',
    };
  }
  handleModeChange = (e) => {
    const mode = e.target.value;
    this.setState({ mode });
  }
  render() {
    const { mode } = this.state;
    const toTopProps={
      visibilityHeight:300,
      target:()=>document.getElementById('scroll'),
    };
    return (
      <div>
        <BackTop {...toTopProps} >
          <div className="ant-back-top-inner">TOP</div>
        </BackTop>

        <Radio.Group onChange={this.handleModeChange} value={mode} style={{ marginBottom: 8 }}>
          <Radio.Button value="top">Horizontal</Radio.Button>
          <Radio.Button value="left">Vertical</Radio.Button>
        </Radio.Group>
        <Tabs
          defaultActiveKey="1"
          tabPosition={mode}
          style={{ height: '100%'}}
        >
          <TabPane tab="从句的定义" key="1">
            <h1>从句是什么，主句是什么</h1>
            <br/>
            <Divider/>
            <div>
              <p>
                当我们在表达时，有时句子中的某个成分需要用另一条句子来表达。
                这种情况下，整个句子就叫主句，而表迏主句中某个成分的句子就是从句。
                例如，定语从句用于充当定语。按照从句所代表的句子成分的不同，
                可以把从句分为6种：定语从句，状语从句，宾语从句，主语从句，
                同位语从句和表语从句。其中，因为宾语从句、主语从句和同位语从
                句代表的是主句中的名词性成分，所以这三种从句又统称为名词性从句。
                (表语从句在结构上也与名词性从句相似，所以也可以归入名词性从句。)
              </p>
              <br/>
              <Divider/>
              <p>虽然从句一般都包含句子的要素如主语和谓语，但从句不能独立成句，
                只能充当主句中的某个成分。
                从句前面一般由引导词如that, who, whom, which, when, why, how, whether
                等作引导。下面就各种从句举几个例子，
                各种从句的详细知识可看相关章节。</p>
            </div>
            <Divider/>
            <h1>什么是定语从句？</h1>
            <p>定语从句是形容词性从句， 用来修饰主句中的名词或代词。其作用相当于定语，故称定语从句。 被定语从句所修饰的对象称为先行词。 定语从句一般紧随它所修饰的先行词之后, 并由关系代词或关系副词引导。

            </p>
            <Divider/>
            <h1>关系代词引导的定语从句</h1>
            <div>

            <p>定语从句是形容词性从句， 用来修饰主句中的名词或代词。其作用相当于定语，故称定语从句。 被定语从句所修饰的对象称为先行词。 定语从句一般紧随它所修饰的先行词之后, 并由关系代词或关系副词引导。

            </p>

            </div>
            <Divider/>
            <h1>关系代词引导的定语从句</h1>
            <div>

            <p>定语从句是形容词性从句， 用来修饰主句中的名词或代词。其作用相当于定语，故称定语从句。 被定语从句所修饰的对象称为先行词。 定语从句一般紧随它所修饰的先行词之后, 并由关系代词或关系副词引导。

            </p>

            </div>

          </TabPane>
          <TabPane tab="定语从句" key="2">
            <Divider/>
            <h1>什么是限定性定语从句？</h1>
            <p>限制性定语从句用于限定或说明其所修饰的词的范围或性质等。从句与先行词关系密切，如果省略的话则会造成主句意义不完整。先行词在定语从句中充当某个语法成份(如充当主语、宾语，定语或状语等)。
            </p>
            <Card title="关系代词引导的定语从句" extra={<a href="#">More</a>} style={{ width: "100%"}}>
             <p> 1) 由 that 引导的定语从句 </p><br/>
              <p>that 可以指人或物。 在定语从句中作主语、宾语或表语， 作宾语或表语时可以省略。</p><br/>
             <p> * The man that visited our school is from Australia．到访我们学校的那个人来自澳大利亚。</p><br/>
              <p>* Is oxygen the only gas that helps fire burn? 氧气是唯一的助燃气体吗？</p><br/>
              <p>* The girl (that) I saw is called Mary. 我见到的那个女孩名叫玛丽。</p><br/>
             <p> * Is there anything else (that) you require? 你还需要别的东西吗？</p><br/>
              <p>* My hometown is no longer the place (that) it used to be. 我的家乡再也不是以前那个样子了。
              </p>
              <Divider/><br/>
              <p>2）由 which 引导的定语从句</p><br/>
              <p>which 指物， 在定语从句中作主语或宾语。 </p><br/>
              <p>* I do not like stories which have unhappy endings.我不喜欢有不幸结局的小说。</p><br/>
              <p>* That was a fault which could not be forgiven. 那是不能饶恕的错误。</p><br/>
              <p>* Have you seen the watch (which) I left here just now? 你看到我刚才放在这里的手表了吗？</p><br/>
              <p>* These are the wires with which different machines are connected. 这些是连接不同机器的电线。</p><br/>
              <p>* The reason for which he refused to go to the party was that they had not invited him to. 他拒绝去赴宴的原因是他没受到他们的邀请。</p>
              <Divider/><br/>
              <p>3）由 who 引导的定语从句 </p><br/>
              <p>who 指人，在定语从句中作主语。 </p><br/>
              <p>* Anybody who breaks the laws will be punished. 任何违反法律的人都将受到惩罚。 </p><br/>
              <p>* Do you know the boys who are standing over there? 你认识站在那边的那些男孩吗？</p><br/>
              <p>[注] 在口语中，可以用who代替whom, 在定语从句中作宾语。</p><br/>
              <p>* The man who I saw told me to wait. 我见到的那个人叫我等。</p><br/>
              <p>* I know the man who you were speaking to just now. 我认识你刚刚和他讲话的那个人。</p>
              <Divider/><br/>
              <p>由 whom引导的定语从句
                whom 指人，在定语从句中作宾语或表语。</p><br/>
              <p>* The doctor whom you are waiting for has left. 你一直在等的那位医生已经离开了。</p><br/>
              <p>* Is she the very person whom we must take good care of? 她就是那个我们必须好好照顾的人吗？</p><br/>
              <p>* They are looking for the patient on whom doctors just performed an operation. 他们正在寻找那位医生刚刚给他做过手术的病人。</p><br/>
              <Divider/><br/>
<p>由 whose引导的定语从句
  whose 通常指人，也可指物，在定语从句中作定语。</p><br/>
<p>* There are some students whose questions I can't answer. 有些学生的问题我回答不了。
  </p><br/>
<p>* Once there was a wise king whose name was Alfred. 从前有一个明智的叫阿尔弗雷德的英国国王。</p><br/>
<p>* They lived in a room whose window opened to the south. 他们住在一间窗户朝南开的房间里。</p><br/>
<p>* Can you see the mountain whose top is covered with snow? 你看得见山顶上覆盖着雪的那座山吗？</p><Divider/><br/>
            </Card>
            <Card title="关系副词引导的定语从句" extra={<a href="#">More</a>} style={{ width: "100%" }}>
              <p>1)	由when 引导的定语从句</p><br/>
              <p>* I'll never forget the days when I worked with you. 我永远不会忘记我与你共事的日子。</p><br/>
              <p>* Can you still remember that evening when we met for the first time? 你还记得我们第一次见面的那个晚上吗？</p><Divider/><br/>
              <p>2)	由 where 引导的定语从句</p><br/>
              <p>* This is the town where I was born. 这是我出生的城市。</p><br/>
              <p>* She would like to live in a country where it never snows. 　她喜欢住在不下雪的国家。</p><br/>
              <p>* Who can think of a situation where this phrase can be used? 谁能想出用这个短语的情况？</p><br/>
              <p>* Her career has reached the stage where she must decide what to do next. 她的事业已经到了必须决定下一步该怎么办的阶段。</p><br/>
              <p>* I've come to the point where I can't stand him. 我已经到了无法忍受他的地步。</p><br/>
             <Divider/><br/>
              <p>3)	由 why 引导的定语从句</p><br/>
              <p>* I don't know the reason why he didn't tell it to his father. 我不明白为什么他没有把这件事告诉他父亲。</p><br/>
              <p>* That's the reason why she left home. 那就是她离家出走的原因。</p><br/>
              <p>* Is this the reason why he refused our offer?　这就是他拒绝我们帮助他的理由吗？</p><br/>
              <p>* We can't accept the excuse why you were absent. 我们无法接受你缺席的借口。</p><br/>
              <p>* This is the explanation why they put off the meeting. 这是他们为何推迟会议的解释。</p><Divider/><br/>

            </Card>
            <Card title="有一些定语从句常可省列引导词" extra={<a href="#">More</a>} style={{ width: "100%" }}>
              <p>1) 一些表示时间的定语从句可以省列when</p><br/>
              <p>* You may go there any time you like. 你随便什么时候都可以去那儿。</p><br/>
              <p>* By the time you arrive in London, we will have stayed there for two weeks. 等你到达伦敦的时候我们已经在那里呆了两周了。</p><br/>
              <p>* I still remember the first time I met her. 我仍然记得我第一次见他的时候。</p><br/>
              <p>* Each time he goes to business trip, he brings a lot of living necessities. 每次出差的时候他都要带很多日常用品。</p><br/>
              <p>* Do you know the year the book was published? 你知道那本书出版的年份吗？</p> <Divider/><br/>
              <p>2) where 有时也可以省列</p><br/>
              <p>* This is the place they met yesterday. 这就是他们昨天碰头的地方。</p><br/>
              <p>* That is the place I was born. 这是我出生的地方。</p><Divider/><br/>
              <p>3) 先行词为way 时，定语从句的引导词也可以省列。</p><br/>
              <p>* I don't like the way he laughed at me. 我不喜欢他用那种方式来嘲笑我。</p><br/>
              <p>* Do it the way I showed you. 按我教你的那样做。</p><br/>
              <p>* Stop kicking my dog, or I will treat you the way you treat it! 别再踢我的狗了，不然我会用你对待它的方式修理你！</p><Divider/><br/>
            </Card>
            <Card title="宜用that 而不宜用which引导定语从句的情况" extra={<a href="#">More</a>} style={{ width: "100%" }}>
<p>1) 当先行词是anything, everything, nothing, something, few, all, none, little, some 等不定代词时。</p><br/>
<p>* Finally, the thief handed everything that he had stolen to the police. 最后，那个贼把他偷的所有东西都交给你警察。</p><br/>
<p>* This is all that I want to say at the meeting. 这就是我在会上要说的。 </p><br/>
<p>* I have nothing that is worth reading. 　我没有什么值得一读的东西。</p><br/>
<p>* Is there anything that I can do for you? 有什么我可以帮你的吗？</p><br/>
<p>* Every car that has a high price is worth what it costs. 每辆高价的车都有它的价值。</p><Divider/><br/>
              <p>2) 当先行词被序数词修饰的时候。</p><br/>
              <p>* You are the first person that I want to ask for. 你是我要见的第一个人。</p><br/>
              <p>* This is the second book that I have ever written. 这是我写的第二本书。</p><Divider/><br/>
              <p>3）当先行词被形容词最高级修饰时。</p><br/>
              <p>* This is the most beautiful city that I've ever seen. 这是我见过的最漂亮的城市。</p><br/>
              <p>* The dinner was the most expensive meal (that) we had ever had. 那是我们吃过的最贵的晚餐。</p><Divider/><br/>
              <p>4）当先行词被the very, the only, the same, the last 修饰时。</p><br/>
              <p>* This is the only painting in this style that we have. 这种风格的画我们仅有一幅。</p><br/>
              <p>* This is the very pen that I am looking for. 这正是我找的钢笔。</p><br/>
              <p>* You are the last person that I want to see. 你是我最不想见到的人。 </p><br/>
              <p>* This is the same pen that I lost last week.这就是我上周丢失的那支钢笔。</p><Divider/><br/>
              <p>5) 当先行词前面有who, which 等疑问代词时。</p><br/>
              <p>* Who that you have ever seen can beat him in chess? 你曾见过谁能在棋艺上打败他？</p><br/>
              <p>* Which is the book that you bought yesterday? 那本是你昨天买的书？</p><Divider/>
              <br/><p>6）当先行词既有人，又有动物或者物体时。</p><br/>
              <p>* He talked happily of the writer and his books that interested him. 他兴高采烈地谈起让他感兴趣的作家以及作家的书。</p><br/>
              <p>* The professor and his achievement that I heard about are admired by them .我听说的那位教授和他的成就得到他们的赞美。</p><Divider/><br/>
            </Card>
            <Divider/>
            <h1>什么是非限定性定语从句？</h1>
            <p>非限制性定语从句与先行词的关系松散，只起补充说明的作用。 去除非限制性定语从句对主句的意义影响不大。非限制性定语从句由逗号隔开，在翻译成中文时，常可译成一个并列句。引导非限制性定语从句的关系代词有 which, who, whom, whose, as; 关系副词有 when 和 where。 注意非限制性定语从句不能由关系代词that引导。
            </p>
            <Card title="非限制性定语从句" extra={<a href="#">More</a>} style={{ width: "100%" }}>
          <p>1)	由which 引导的非限制性定语从句</p><br/>
          <p>* Her house, which was built a hundred years ago, stood still in the earthquake. 那座房子在地震中依然耸立，它是一百多年前建造的。</p><br/>
          <p>* This novel, which I have read three times, is very touching. 这本小说很动人，我已经读了三遍。</p><br/>
          <p>* Recently I bought an ancient Chinese vase, the price of which was very reasonable. 我最近买了一个中国古代的花瓶，价格很合理。</p><br/>
          <p>[注] which 有时不代表一个名词， 而是代表前面整个句子或句子的一部分。</p><br/>
          <p>* The sun heats the earth, which makes it possible for plants to grow. 太阳给予大地热能，这样植物才有可能生长。</p><br/>
          <p>* He didn't pass the exam，which disappointed me. 他没通过这次考试，令我很失望</p> <Divider/><br/>
              <p>2)	由 who 引导的非限制性定语从句</p><br/>
              <p> Charlie Chaplin, who died in 1977, is considered one of the greatest and funniest actors in the history of the cinema.
                查理卓别林,卒于1977年，他被认为是电影史上最伟大最搞笑的演员之一。 </p><br/>
              <p>* Charles Smith, who was my former teacher, retired last year. 查理•史密斯去年退休了，他曾经是我的老师。</p> <Divider/><br/>

               <p> 3)	由 whom 引导的非限制性定语从句</p><br/>
               <p> * He was eager to go to the hospital to see his stepmother, whom he loved and respected as his own mother. 他急于想去医院看望他的继母,他把他的继母当作亲生母亲一样热爱和尊敬。</p><br/>
              <p>* Her sons, both of whom work abroad, rang her up this morning. 她的两个儿子今天早上打电话给她，他们都在国外工作。</p><br/>
              <p>* The eighty-nine passengers all escaped without serious injury，four of whom were Americans. 89名乘客全部脱险而没受重伤，其中有4个是美国人。</p> <Divider/><br/>
              <p>4)	由 whose 引导的非限制性定语从句</p><br/>
              <p>* Look at the building, whose roof is white. 看那栋楼，楼顶的颜色是白的。</p> <Divider/><br/>
              <p>5)	由 when引导的非限制性定语从句</p><br/>
              <p>* He will put off the picnic until May 1st, when he will be free.
                他将把郊游推迟到5月1号，那时他将有空。</p><br/>
              <p>* At the time when I saw him, he was well. 我见到他那时，他身体还不错。</p> <Divider/><br/>
              <p>6)	由 where引导的非限制性定语从句</p><br/>
              <p>* They went to London，where they lived for six months.
                他们去了伦敦，在那儿呆了六个月的时间。</p><br/>
              <p>* Some pre-school children go to a day care center, where they learn simple games and songs. 有些学龄前儿童被送到日托中心，在那他们可以学到简单的游戏和歌曲。</p><br/>
              <p>* They stood on the top of the building, from where they could see the whole city. 他们站在楼顶上，从那儿能看到整个城市。

              </p> <Divider/><br/>
            </Card>
          </TabPane>
          <TabPane tab="状语从句" key="3">
            <Card title="时间状语从句" extra={<a href="#">More</a>} style={{ width: "100%"}}>
            <p>* I'll call you when I get there. 我到了那里就给你电话</p><br/>
            <p>* She told me something interesting as we talked on our way home.　当我们在回家的路上交谈时，她告诉我一些有趣的事情。</p><br/>
            <p>* While I came home my wife was cooking dinner. 我回家时，妻子在做晚饭。</p><br/>
            <p>* Please knock at the door before you come in my bed room.在你进入我卧室之前，请敲门。</p><br/>
            <p>* His reputation will live long after his death. 他将英名永存。</p><br/>
            <p>* I will give it back to you as soon as I have read it. 我读完它就给回你</p><br/>
            <p>* He has studied very hard since he came to our school. 自从他来到我们学校，他学习就非常努力。</p><br/>
            <p>* Mary didn't go to bed until his father came back. 玛丽直到她爸爸回来后才去睡觉。</p><br/>
            <p>* You can call me whenever you like. 你什么时候给我电话都可以。</p><br/>
            <p>* Once you feel lonely, come and have a chat with me. 你一感到孤单，就来和我聊一下吧。</p><br/>
            <p>* It reminded me of the good time in the past years every time I saw the photo. 每次我看着照片都会想起过去的美好时光。</p><br/>
            <p>* Now that you are free, you can enjoy music for a while. 既然有空，你可以欣赏一下音乐。</p><br/>
            <p>【高中以上】</p><br/>
            <p>* You can come and stay with us for several days next time you visit London. 下次你来伦敦时，可以和我们一起住几天。</p><br/>
            <p>* All the students were quiet directly the teacher came in the classroom. 老师进入课室时，所以的学生立刻静下来。</p><br/>
            <p>* He turns on the computer the moment he came in. 他一进来就打开电脑。</p><br/>
            <p>* I wrote back to him immediately I received his letter. 我一收到他的信就马上回信了。</p><br/>
            <p>* He had hardly arrived when it began to snow. 他刚一到就开始下雪了。</p><br/>
            <p>* I had no sooner gone out than it began to rain. 我刚走到外面就开始下雨了。

            </p> <Divider/><br/>
          </Card>
            <Card title="条件状语从句" extra={<a href="#">More</a>} style={{ width: "100%"}}>
            <p>* We'll start our project if the president agrees. 如果总统同意的话，我们就会开展我们的项目。</p><br/>
            <p>* I'll do it better if the teacher gives me another chance.如果老师再给我一次机会，我会做得更好。</p><br/>
            <p>* Don't leave the building unless I tell you to. 除非我叫你，否则不要离开这栋楼房。</p><br/>
            <p>* You can't get a job unless you've got experience.除非你有经验，要不你找不到工作。</p><br/>
            <p>* The students will go to the Summer Palace, as long as it doesn't rain tomorrow. 只要明天不下雨，这些学生就去颐和园。</p><br/>
            <p>* So long as you help me, I shall never give up. 只要有你帮助我，我就决不会放弃。</p><br/>
            <p>【高中以上】</p><br/>
            <p>* Supposing (that) there is no pure water; what shall we drink? 假如没有纯净的水，人们喝什么？</p><br/>
            <p>* Suppose you lost your job tomorrow, what would you do? 假定你明天失业，你怎么办？</p><br/>
            <p>* Providing I get good marks, I'll go! 只要我成绩好，我就去。</p><br/>
            <p>* Provided (that) there is no position, we shall hold the meeting there. 如果没有位置的话，我们就应该在那边开会。</p><br/>
            <p>* Even if you take a taxi, you'll still miss your train. 就算你坐出租车，还是会错过火车。</p><br/>
            <p>* In case I forget, please remind me. 万一我忘记，请提醒我。</p><br/>
            <p>* I'll do it on condition that you pay for everything. 我可以做这件事，条件是你得付一切费用。</p><br/>
            <p>* Granted that you are correct, you may find it hard to prove your point. 就算你对，可你要论证这一点并非易事。</p><br/>
            <p>* I'm going, whether she likes it or not. 不管她喜不喜欢，我都要走了。</p><br/>
            <p>* Were it not for the expense, I would go to Italy. 要不是花费太大的话，我就去意大利了。</p><br/>
            <p>* Should she fall, then so would I. 如果她跌倒了，我也会跌倒的。</p><br/>
            <p>* Had it not been for your help, I might have got lost in the mountains.要不是你得帮助的话，我可能在山里迷路了。

            </p><Divider/><br/>
          </Card>
            <Card title="目的状语从句" extra={<a href="#">More</a>} style={{ width: "100%"}}>
              <p>* You must speak louder in order that you can be heard by all. 为了让大家都能听清楚，你一定要说大声一点。</p><br/>
              <p>* I came to the class early so that I could see the classmate beside me. 我赶早来上课，以便早点看到我旁边的同学。</p><br/>
              <p>* I want to expand your point of view so you can see something. 我想拓宽你们的视野以便你们看清一些东西。</p><br/>
              <p>【高中以上】</p><br/>
              <p>* Take care of yourself lest you catch cold. 好好照顾你自己，以免受凉。</p><br/>
              <p>* He walked fast for fear that he should be late. 他快走，以免迟到。</p><br/>
              <p>* I shall ring you up in case you should forget to come. 我应该给你打电话，以免你忘记来。</p><Divider/><br/>
            </Card>
            <Card title="结果状语从句" extra={<a href="#">More</a>} style={{ width: "100%"}}>
              <p>* He was so angry that he couldn't say a word. 他气得说不出话。</p><br/>
              <p>* He speaks so fast that no one can catch him. 他说话太快，无人听得明白。</p><br/>
              <p>* He is such a good person that we mustn't blame him. 他是这样好的人，我们不能怪他。</p><br/>
              <p>* They are such fine teachers that we all hold them in great respect. 他们是非常好的老师， 我们对他们极为尊敬。</p><br/>
              <p>【高中以上】</p><br/>
              <p>* Be modest, otherwise you'll lag behind. 要谦虚，否则就要落后。</p><br/>
              <p>* Hurry up, or else you'll be late. 快点，否则你要迟到了。</p><br/>
              <p>* Be careful, else you'll make a mess. 注意点，要不你会搞得一团糟。</p><br/>
              <p>* Their anxiety was such that they could not sleep. 他们如此焦虑，难以入睡。</p><br/>
              <p>* His behavior was such that everyone disliked him. 他的行为太不像话，以致于谁都讨厌他。</p><br/>
              <p>注: that 也可以单独引导结果状语从句, 如:</p><br/>
              <p>* What was the matter with the fellow that he looked so happy? 那人怎么回事，看起来这样高兴?</p><Divider/><br/>
            </Card>
            <Card title="让步状语从句" extra={<a href="#">More</a>} style={{ width: "100%"}}>
              <p>* Although it's raining, they are still working in the field. 虽然在下雨，但他们仍在地里干活。</p><br/>
              <p>* Though it was cold, she still wore a skirt. 尽管天气冷，她还是穿了裙子。</p><br/>
              <p>* We'll make a trip even though the weather is bad. 尽管天气很糟，我们还是去旅行。</p><br/>
              <p>* I'll get there even if I have to sell my house to get enough money to go by air. 就算我要卖掉房子筹够钱坐飞机，我也会去那里的。</p><br/>
              <p>* However hard I try, I cannot understand this question. 不管我怎么努力，还是弄不懂这个问题。</p><br/>
              <p>* Wherever you go, you should work hard. 不管你去哪里，都要努力工作。</p><br/>
              <p>* Whoever goes hungry, he won't. 不管别的什么人挨饿，他不会。</p><br/>
              <p>* Whatever he says, don't trust him. 不管他说什么，都不要相信他。</p><br/>
              <p>* No matter what happened, he would not say a word. 不管发生什么， 他都不会说一句话。</p><br/>
              <p>* No matter how expensive it may be, I'll take it. 无论它有多贵，我也要买下它。</p><br/>
              <p>【高中以上】</p><br/>
              <p>* Whether you play or watch TV, you mustn't disturb me. 不管你是玩还是看电视，都不要打扰到我。</p><br/>
              <p>* Much as I respect him, I can't agree to his proposal. 尽管我尊敬他，我不能同意他的建议。</p><br/>
              <p>* Tired as he was, he sat up late. 他虽然疲倦，可仍然很晚才睡。</p><br/>
              <p>* Child as he is, he knows a lot. 虽然他是个孩子，但他却很懂事。</p><br/>
              <p>* Successful as he is, he is not proud. 他虽然成功，但不骄傲。</p><br/>
              <p>* Poor though they are, they are warm-hearted. 虽然他们很穷，他们很热心。</p><Divider/><br/>
            </Card>
            <Card title="原因状语从句" extra={<a href="#">More</a>} style={{ width: "100%"}}>
              <p>* I bought the house because it was large. 我购买了这房子，只是因为它面积大。</p><br/>
              <p>* As she was ill, she didn't come to the party. 由于病了，她没来参加晚会。</p><br/>
              <p>* We didn't know what to do as we were just visiting there. 我们不知道该怎么办，因为当时我们仅仅在那里访问。</p><br/>
              <p>* Since it is so hot, let's go swimming. 既然天气这么热，我们去游泳吧。</p><br/>
              <p>* Since everyone is here, let's start. 既然大家都在，我们就开始吧。</p><br/>
              <p>【高中以上】</p><br/>
              <p>* Seeing (that) it is 10 o'clock, we'll wait no longer. 由于时间已到十点，我们不能再等了。</p><br/>

              <p>* Considering the weather, we got here quite quickly. 由于天气，我们来到真够快。</p><Divider/><br/>
            </Card>
            <Card title="方式状语从句" extra={<a href="#">More</a>} style={{ width: "100%"}}>
              <p>* I'll do as I am told to. 我会按照我被告知的那样做的。</p><br/>
              <p>* When in Rome, do as the Roman do. 入乡随俗。</p><br/>
              <p>* It looks as if the weather may pick up very soon. 看来天气很快就会好起来。</p><br/>
              <p>* He looks as though he had been hit by lighting. 他那样子就像被雷击了似的。</p><br/>
              <p>【高中以上】</p><br/>
              <p>* She looked at him the way a lot of girls did. 她像很多女孩那样看着他。</p><br/>
              <p>* You may use it however you like. 你喜欢怎样用它都行。</p><br/>
              <p>* Please spell the word the same way as I did. 请像我一样拼写这个单词。</p><br/>
              <p>* Do it like he does. 照他那样做。</p><Divider/><br/>
            </Card>
            <Card title="让步状语从句" extra={<a href="#">More</a>} style={{ width: "100%"}}>
              <p>* Although it's raining, they are still working in the field. 虽然在下雨，但他们仍在地里干活。</p><br/>
              <p>* Though it was cold, she still wore a skirt. 尽管天气冷，她还是穿了裙子。</p><br/>
              <p>* We'll make a trip even though the weather is bad. 尽管天气很糟，我们还是去旅行。</p><br/>
              <p>* I'll get there even if I have to sell my house to get enough money to go by air. 就算我要卖掉房子筹够钱坐飞机，我也会去那里的。</p><br/>
              <p>* However hard I try, I cannot understand this question. 不管我怎么努力，还是弄不懂这个问题。</p><br/>
              <p>* Whatever he says, don't trust him. 不管他说什么，都不要相信他。</p><br/>
              <p>* No matter what happened, he would not say a word. 不管发生什么， 他都不会说一句话。</p><br/>
              <p>* No matter how expensive it may be, I'll take it. 无论它有多贵，我也要买下它。</p><br/>
              <p>【高中以上】</p><br/>
              <p>* Whether you play or watch TV, you mustn't disturb me. 不管你是玩还是看电视，都不要打扰到我。</p><br/>
              <p>* Much as I respect him, I can't agree to his proposal. 尽管我尊敬他，我不能同意他的建议。</p><br/>
              <p>* Tired as he was, he sat up late. 他虽然疲倦，可仍然很晚才睡。</p><br/>
              <p>* Child as he is, he knows a lot. 虽然他是个孩子，但他却很懂事。</p><br/>
              <p>* Successful as he is, he is not proud. 他虽然成功，但不骄傲。</p><br/>
              <p>* Poor though they are, they are warm-hearted. 虽然他们很穷，他们很热心。</p><Divider/><br/>
            </Card>
            <Card title="地点状语从句" extra={<a href="#">More</a>} style={{ width: "100%"}}>
              <p>* Where there is a will, there is a way. 有志者，事竟成。</p><br/>
              <p>* I'm quite comfortable where I am. 我这里挺舒服飞。</p><br/>
              <p>* Wherever I am I will be thinking of you. 不管我在哪里，我都会想着你。</p><br/>
              <p>* You can go anywhere you want. 你想去哪里就可以去哪里。</p><br/>
              <p>* Everywhere they went, they were warmly welcomed. 他们每到一个地方，都受到热烈欢迎。</p><Divider/><br/>
            </Card>
            <Card title="比较状语从句" extra={<a href="#">More</a>} style={{ width: "100%"}}>
              <p>The day is more bright and beautiful today than it was yesterday.今天天气比昨天更加晴朗,更加美好。</p><br/>
<p>The tree is as tall as the building is．这棵树和那栋楼一样高。</p><br/>
              <p>
                This dictionary is not as useful as you think. 这本字典不如你想象的那样有用。</p><Divider/><br/>
            </Card>

          </TabPane>
          <TabPane tab="名词性从句" key="4">
            <Card title="" extra={<a href="#">More</a>} style={{ width: "100%"}}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
           </TabPane>
          <TabPane tab="宾语从句" key="5">Content of tab 5</TabPane>
          <TabPane tab="主语从句" key="6">Content of tab 6</TabPane>
          <TabPane tab="表语从句" key="7">Content of tab 7</TabPane>
          <TabPane tab="同位语从句" key="8">Content of tab 8</TabPane>
          <TabPane tab="疑问句" key="9">Content of tab 9</TabPane>
          <TabPane tab="There be" key="10">Content of tab 10</TabPane>
          <TabPane tab="祈使句" key="11">Content of tab 11</TabPane>
          <TabPane tab="感叹句" key="12">Content of tab 11</TabPane>
          <TabPane tab="强调句型" key="13">Content of tab 11</TabPane>
          <TabPane tab="虚拟语气" key="14">Content of tab 11</TabPane>
          <TabPane tab="倒装句" key="15">Content of tab 11</TabPane>
          <TabPane tab="省略句" key="16">Content of tab 11</TabPane>
          <TabPane tab="独立主格" key="17">Content of tab 11</TabPane>
          <TabPane tab="标点符号" key="18">Content of tab 11</TabPane>
          <TabPane tab="主谓一致" key="19">Content of tab 11</TabPane>
          <TabPane tab="名词" key="20">Content of tab 11</TabPane>
          <TabPane tab="形容词" key="21">Content of tab 11</TabPane>
          <TabPane tab="冠词" key="22">Content of tab 11</TabPane>
          <TabPane tab="代词" key="23">Content of tab 11</TabPane>
          <TabPane tab="介词" key="24">Content of tab 11</TabPane>
          <TabPane tab="连词" key="25">Content of tab 11</TabPane>
          <TabPane tab="副词" key="26">Content of tab 11</TabPane>
          <TabPane tab="情态动词" key="27">Content of tab 11</TabPane>
          <TabPane tab="动词" key="28">Content of tab 11</TabPane>
          <TabPane tab="动名词" key="29">Content of tab 11</TabPane>
          <TabPane tab="不定式" key="30">Content of tab 11</TabPane>
          <TabPane tab="现在分词" key="31">Content of tab 11</TabPane>
          <TabPane tab="过去分词" key="32">Content of tab 11</TabPane>
          <TabPane tab="时态" key="33">Content of tab 11</TabPane>
        </Tabs>
      </div>
    );
  }
}
export default  SlidingTabsDemo;
