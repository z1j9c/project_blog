<template>
  <div class="page_home">
    <!--页面顶部导航 begin-->
    <header class="fixed-top">
      <header-nav></header-nav>
    </header>
    <!--页面顶部导航 end-->
    <!--博客标题 begin-->
    <div class="page-title-nr">
      <div class="row">
        <div class="col back-top-style" :style="{backgroundImage:'url('+backImg+')'}"></div>
      </div>
    </div>
    <!--博客标题 end-->
    <!--页面正文 begin-->
    <div class="container">
     <div class="row">
      <!--左侧 begin-->
       <div class="col-sm-3">
         <!--博客关注数据-->
         <div class="card card_mg" data-aos-once="true" data-aos-delay="400" data-aos-easing="ease">
           <div class="card-body text-left">
             <h5 class="card-title">博客数据</h5>
             <div class="card-text text-center">
               <div class="row">
                 <div class="col">12</div>
                 <div class="col">1</div>
                 <div class="col">278</div>
               </div>
               <div class="row">
                 <div class="col">关注</div>
                 <div class="col">喜欢</div>
                 <div class="col">人气</div>
               </div>
             </div>
           </div>
         </div>
         <!--博客图片-->
         <div class="card card_mg" data-aos-once="true" data-aos-delay="400" data-aos-easing="ease">
           <img src="../../../static/image/asdgdsfg.png" class="card-img-top img-fluid">
           <div class="card-body text-left">
             <h4 class="card-title">标题</h4>
             <p class="card-text">阿斯顿发射点v支持v秩序</p>
           </div>
         </div>
         <!--搜索图片-->
         <div class="card card_mg" data-aos-once="true" data-aos="fade-up" data-aos-delay="400" data-aos-easing="ease">
           <div class="card-body text-left">
             <h5 class="card-title">搜索</h5>
             <div class="input-group mb-3">
               <input type="text" class="form-control" placeholder="输入关键字" aria-label="关键字" aria-describedby="basic-addon2">
               <div class="input-group-append">
                 <button class="btn btn-outline-secondary" type="button">搜索</button>
               </div>
             </div>
           </div>
         </div>
         <!--公告-->
         <div class="card text-left" data-aos-once="true" data-aos="fade-up" data-aos-delay="400" data-aos-easing="ease">
           <div class="card-body">
             <h5 class="card-title">公告标题</h5>
             <p class="card-text">
               豆腐干大师傅感到反感阿凡达刮大风，犯得上广泛大使馆犯得上。
               啊手动阀第三方三条天皇特瑞斯啊的风格，是个豆腐干豆腐干更是让他。
             </p>
           </div>
         </div>
       </div>
      <!--左侧 end-->
      <!--右侧 begin-->
       <div class="col-sm-9">
         <!--轮播 start-->
         <div class="card card_mg" data-aos-once="true" data-aos="fade-up" data-aos-delay="400" data-aos-easing="ease">
           <div class="card-body">
             <slider :slides="slides" :inv="invTime"></slider>
          </div>
         </div>
         <!--轮播 end-->
         <div class="card card_mg" data-aos-once="true" data-aos="fade-up" data-aos-delay="400" data-aos-easing="ease">
           <div class="card-body">
             <h5 class="text-left">而啊嘎嘎大哥阿嘎尔</h5>
             <p class="text-left">士大夫各色公司的广泛大概</p>
             <div class="text-left">
               阿道夫嘎尔尕尔哥回复的噶啊然而提高认识，奥古特供货商提供发的广泛大概，
               啊的风格它更适合规范化的fear通过双方，怪蜀黍大概豆腐干给大法官大幅刚刚。
               阿斯顿该公司股份收购的风格，阿达反光煞地方官梵蒂冈梵蒂冈放大。
             </div>
             <div>
               <span class="ml-auto text-left">阿斯顿发射点法大师傅</span>
               <span class="mr-auto text-right">为法国发到四个发的噶地方噶地方</span>
             </div>
           </div>
         </div>
         <div class="card card_mg" data-aos-once="true" data-aos="fade-up" data-aos-delay="400" data-aos-easing="ease">
           <div class="card-body">
             <h5 class="text-left">而啊嘎嘎大哥阿嘎尔</h5>
             <p class="text-left">士大夫各色公司的广泛大概</p>
             <div class="text-left">
               阿道夫嘎尔尕尔哥回复的噶啊然而提高认识，奥古特供货商提供发的广泛大概，
               啊的风格它更适合规范化的fear通过双方，怪蜀黍大概豆腐干给大法官大幅刚刚。
               阿斯顿该公司股份收购的风格，阿达反光煞地方官梵蒂冈梵蒂冈放大。
             </div>
             <div>
               <span class="ml-auto text-left">阿斯顿发射点法大师傅</span>
               <span class="mr-auto text-right">为法国发到四个发的噶地方噶地方</span>
             </div>
           </div>
         </div>
         <div class="card card_mg" data-aos-once="true" data-aos="fade-up" data-aos-delay="400" data-aos-easing="ease">
           <div class="card-body">
             <h5 class="text-left">而啊嘎嘎大哥阿嘎尔</h5>
             <p class="text-left">士大夫各色公司的广泛大概</p>
             <div class="text-left">
               阿道夫嘎尔尕尔哥回复的噶啊然而提高认识，奥古特供货商提供发的广泛大概，
               啊的风格它更适合规范化的fear通过双方，怪蜀黍大概豆腐干给大法官大幅刚刚。
               阿斯顿该公司股份收购的风格，阿达反光煞地方官梵蒂冈梵蒂冈放大。
             </div>
             <div>
               <span class="ml-auto text-left">阿斯顿发射点法大师傅</span>
               <span class="mr-auto text-right">为法国发到四个发的噶地方噶地方</span>
             </div>
           </div>
         </div>
         <div class="card card_mg" data-aos-once="true" data-aos="fade-up" data-aos-delay="400" data-aos-easing="ease">
           <div class="card-body">
             <h5 class="text-left">而啊嘎嘎大哥阿嘎尔</h5>
             <p class="text-left">士大夫各色公司的广泛大概</p>
             <div class="text-left">
               阿道夫嘎尔尕尔哥回复的噶啊然而提高认识，奥古特供货商提供发的广泛大概，
               啊的风格它更适合规范化的fear通过双方，怪蜀黍大概豆腐干给大法官大幅刚刚。
               阿斯顿该公司股份收购的风格，阿达反光煞地方官梵蒂冈梵蒂冈放大。
             </div>
             <div>
               <span class="ml-auto text-left">阿斯顿发射点法大师傅</span>
               <span class="mr-auto text-right">为法国发到四个发的噶地方噶地方</span>
             </div>
           </div>
         </div>
         <div class="card card_mg" data-aos-once="true" data-aos="fade-up" data-aos-delay="400" data-aos-easing="ease">
           <div class="card-body">
             <h5 class="text-left">而啊嘎嘎大哥阿嘎尔</h5>
             <p class="text-left">士大夫各色公司的广泛大概</p>
             <div class="text-left">
               阿道夫嘎尔尕尔哥回复的噶啊然而提高认识，奥古特供货商提供发的广泛大概，
               啊的风格它更适合规范化的fear通过双方，怪蜀黍大概豆腐干给大法官大幅刚刚。
               阿斯顿该公司股份收购的风格，阿达反光煞地方官梵蒂冈梵蒂冈放大。
             </div>
             <div>
               <span class="ml-auto text-left">阿斯顿发射点法大师傅</span>
               <span class="mr-auto text-right">为法国发到四个发的噶地方噶地方</span>
             </div>
           </div>
         </div>
         <div class="page_bot_mg" data-aos-once="true" data-aos="fade-up" data-aos-delay="400" data-aos-easing="ease">
           <ul class="pagination pagination-lg mx-0 justify-content-center w-100">
             <li class="page-item"><a class="page-link" href="#">上一页</a></li>
             <li class="page-item"><a class="page-link" href="#">1</a></li>
             <li class="page-item"><a class="page-link" href="#">2</a></li>
             <li class="page-item"><a class="page-link" href="#">3</a></li>
             <li class="page-item"><a class="page-link" href="#">下一页</a></li>
           </ul>
         </div>
       </div>
      <!--右侧 end-->
     </div>
    </div>
    <!--页面正文 end-->
    <!--页面底部页脚 begin-->
    <footer class="bg-dark">
      <footer-nav></footer-nav>
    </footer>
    <!--页面底部页脚 end-->
  </div>
</template>

<script>
// Aos.js begin
import AOS from 'aos'
import 'aos/dist/aos.css'
// Aos.js end

// 轮播组件
import sliderPage from '../../components/common/slider/pageSlider'
// 页面顶部导航
import HeaderNav from '../../components/header/header_nav'
// 页面底部导航
import FooterNav from '../../components/footer/footer_nav'
export default {
  name: 'homeIndex',
  data () {
    return {
      text: '首页',
      backImg: require('../../../static/image/wqer.png'),
      invTime: 3000,
      slides: [
        {
          src: require('../../../static/image/asdgdsfg.png'),
          title: '轮播图片一',
          href: ''
        }, {
          src: require('../../../static/image/fdsgdf.png'),
          title: '轮播图片二',
          href: ''
        }, {
          src: require('../../../static/image/cvbsd.png'),
          title: '轮播图片三',
          href: ''
        }
      ]
    }
  },
  methods: {
    elementLoadAnimate: function () {
      AOS.init({
        duration: 1000,
        easing: 'ease-out-back',
        delay: 600
      })
      AOS.refresh()
    }
  },
  mounted () {
    this.elementLoadAnimate()
  },
  components: {
    'slider': sliderPage,
    'header-nav': HeaderNav,
    'footer-nav': FooterNav
  }
}
</script>

<style scoped>
.page-title-nr{
  margin-top:55px;
  margin-bottom: 10px;
}
.page_bot_mg{
  margin-bottom:50px;
}
.card_mg{
  margin-bottom: 10px;
  margin-top: 10px;
}
.carousel-inner img{
  width: 100%;
  height:100%;
}
.back-top-style{
  background-repeat: no-repeat;
  background-size: 100% 100%;
  min-width:100%;
  min-height: 300px;
  height:300px;
  max-height: 500px;
}
</style>
