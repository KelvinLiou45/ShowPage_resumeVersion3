let Home = Vue.component('home', {
    template: `<article>
    <div class="article_inner">
        <introduce imgurl="./img/avatar.jpg" title="立志成為 前端開發職人"
            content="我是一名熱衷於學習的前端開發人員，既使工作再忙碌，也會利用休閒時間進修自己。現今除了學習程式語言以外，由於我對實用、美麗的設計相當感興趣，所以對於UX/UI也略有著墨學習，希望終有一日能將自身所學回饋於社會，並感動他人。">
        </introduce>
        <div class="line">
            Manners maketh man.
        </div>
        <expersion title="工作經歷、學歷"></expersion>
        <div class="line">
            You are braver than you believe.
        </div>
        <skill title="技能綜述"></skill>
    </div>
</article>`
})

//introduce start(Home)
Vue.component('introduce', {
    props: ['imgurl', 'title', 'content'],
    template: `<div class="introduce">
            <div class="introduce_inner container">
                <div class="row">
                    <div class="pic col-12">
                        <img :src="imgurl" alt="">
                    </div>
                    <div class="title col-12">
                        <p>{{ title }}</p>
                    </div>
                    <div class="content col-12">
                        <p>{{ content }}</p>
                    </div>
                    <!-- <div class="line col-12"></div> -->
                    <div class="other col-12">
                        <div class="color"></div>
                        <div class="color"></div>
                        <div class="color"></div>
                        <div class="color"></div>
                        <div class="color"></div>
                    </div>
                </div>
            </div>
        </div>`
})
//introduce end

// expersion start(Home)
Vue.component('expersion', {
    props: ['title'],
    template: `<div class="expersion">
            <div class="expersion_inner container">
                <div class="article-title">
                    {{title}}
                </div>
                <div class="row">
                    <expersion_box imgurl="img/fujitec.png"
                    time="2020/06-2017/04"
                    company="富士達股份有限公司"
                    job="營業專員"
                    content="FUJITEC是日本前四大的升降梯生產商，我主要負責拓展台灣高屏地區的市場。任職期間，順利的與數名新客戶締結合作關係，營業額約莫5千6百萬。為了朔造日商形象，協助營業單位重新製作銷售簡介。
                    "></expersion_box>
                    
                    <expersion_box imgurl="img/create.jpg"
                    time="2017/02-2014/12"
                    company="茂訊電腦股份有限公司"
                    job="業務、客服工程師"
                    content="茂訊
                                    是代理眾多筆電品牌的經銷商，前期我擔任門市及展場的銷售業務，後期則是負責售後服務的客服工程師。除了學習到門市經營所需的基本事務，也了解到從'銷售'到'服務'的一條龍工作方式。"></expersion_box>

                    <expersion_box imgurl="img/stu.jpg"
                    time="2017/02-2014/12"
                    company="樹德科技大學"
                    job="學士、助教"
                    content="就學期間順利通過java的oracle考試認證(OCJP)，以及考取Parallax Certified Professional (PCP)證照。認真負責任的學習態度，也讓我有機會擔任'課程'助教的工作，協助製作教材、並體驗難得的授課經驗。
                    "></expersion_box>
                </div>
            </div>
        </div>`
})

Vue.component('expersion_box', {
    props: ['imgurl', 'time', 'company', 'job', 'content'],
    template: `<div class="expersion_box col-lg-4 col-md-6 col-12">
                        <div class="box_inner">
                            <img :src="imgurl" alt="">
                            <div class="time">{{time}}</div>
                            <div class="company">{{company}}</div>
                            <div class="job">{{job}}</div>
                            <div class="content">
                                <p>{{content}}</p>
                            </div>
                            <div v-if="company == '富士達股份有限公司'" class="other">
                                <div class="color" style="background:#4195dc"></div>
                                <div class="color" style="background:#77334b"></div>
                                <div class="color" style="background:#ed3534"></div>
                                <div class="color" style="background:#51393c"></div>
                                <div class="color" style="background:#6c8096"></div>
                            </div>
                            <div v-else-if="company == '茂訊電腦股份有限公司'" class="other">
                                <div class="color" style="background:#303922"></div>
                                <div class="color" style="background:#ca4a4d"></div>
                                <div class="color" style="background:#3982aa"></div>
                                <div class="color" style="background:#8ec0de"></div>
                                <div class="color" style="background:#a3a0a4"></div>
                            </div>
                            <div v-else-if="company == '樹德科技大學'" class="other">
                                <div class="color" style="background:#759135"></div>
                                <div class="color" style="background:#32351c"></div>
                                <div class="color" style="background:#c1cda3"></div>
                                <div class="color" style="background:#8399a5"></div>
                                <div class="color" style="background:#765c51"></div>
                            </div>
                        </div>
                    </div>`
})
// expersion end

//skill start(Home)
Vue.component('skill', {
    props: ['title'],
    data: function () {
        return {
            pLanguage: ['HTML', 'CSS', 'JavaScript', 'Java', 'PHP'],
            framework: ['Bootstrap', 'Vue.js'],
            API: ['Bootstrap', 'YahooWeather'],
            DBMS: ['MySQL'],
            other: ['Git'],
            ux: ['Photoshop']
        }
    },
    template: ` <div class="skill">
            <div class="skill_inner container">
                <div class="article-title">
                    技能綜述
                </div>
                <div class="row">
                    <skill_box title="程式語言" :skills="this.pLanguage"></skill_box>
                    <skill_box title="框架" :skills="this.framework"></skill_box>
                    <skill_box title="API" :skills="this.API"></skill_box>
                    <skill_box title="DBMS" :skills="this.DBMS"></skill_box>
                    <skill_box title="Others" :skills="this.other"></skill_box>
                    <skill_box title="UX/UI" :skills="this.ux"></skill_box>
                </div>
            </div>
        </div>`
})

Vue.component('skill_box', {
    props: ['title', 'skills'],
    template: `<div class="skill_box col-12">
                        <p>{{ title }}:</p>
                        <span v-for="skill in skills">{{ skill }}</span>
                    </div>`
})
//skill end