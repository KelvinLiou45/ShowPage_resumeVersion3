let About = Vue.component('about', {
    template: `<article>
        <div class="article_inner">
            <div class="about">
                <div class="about_inner container">
                    <div class="row">

                        <art title="個人介紹"
                            content="我的名字是劉承楷，也可以稱呼我為Kelvin，出生於高雄，家中成員有媽媽及一個哥哥。從小家中雖然不算富裕，但家裡秉持著正派的言教及身教，使我養成了「誠實」及「踏實」的性格，不但比較容易找到知心的朋友，也時常能受到師長的信賴。也因為這個原因，不乏有擔任幹部及助教的經驗，不但讓學習生涯更為豐富，也培養了自己在工作上的責任心。">
                        </art>

                        <art2 title="工作經歷" sec1="富士達股份有限公司" sec2="茂訊電腦股份有限公司" sec3="不二致果(高雄不二家)" content1="FUJITEC
                        是日本前四大的升降梯生產商，我主要負責拓展台灣高屏地區的市場。任職期間順利與數名新客戶締結合作關係，營業額約莫5千6百萬。為了朔造日商形象，協助營業單位重新製作銷售簡介。
                    " content2="茂訊
                    是代理眾多筆電品牌的經銷商，前期我擔任門市及展場的銷售業務，後期則是負責售後服務的客服工程師。除了學習到門市經營所需的基本事務，也了解到從'
                            銷售'到'服務'的一條龍工作方式。 " content3="
                            學生時期的打工經驗，負責產品的包裝及裝箱作業。因為受到主管的賞識，被挑選為小組長，帶領4名工讀生進行訂單的包裝作業。這對於初次步入職場的自己，是一個很大的肯定。 ">
                        </art2>


                        <art title="興趣及期勉" content="我平時喜歡閱讀設計、心理學相關的書籍，也喜歡看日本的電影及綜藝節目。我喜歡日本的原因，除了他們的設計水平相當高之外，他們特有的「職人精神」也讓我深深的著迷。
                        「職人精神」不只是對於工作的敬業態度，它的表現也能牽引身邊的事物，甚至是改變社會 (在 <a
                            href='https://zh.wikipedia.org/wiki/%E5%85%A8%E8%83%BD%E4%BD%8F%E5%AE%85%E6%94%B9%E9%80%A0%E7%8E%8B'>大改造!!劇的ビフォーアフター</a>
                        中你可以看得到)。
                        所以我時常鞭策自己努力提升能力，希望自己的專業也能帶有一份「職人精神」，創造出另人滿意及感動的服務。"></art>
                        
                        <art title="未來展望"
                            content="從事銷售工作多年，突然轉職為軟體工程師是一項相當大的決定。除了希望自己能有更強的專業能力，塑造自己所希望的職人形象以外。另一方面也是希望能藉有自己的努力，創造穩定的收入回饋給家庭。「每天都要比昨天的自己更進步」是我現在秉持的座右銘，既使現在的我在於開發的能力還不夠專業，但結合我多年的行銷經驗，我期望在未來的5年養成足以擔任PM的能力，我也相信只要秉持著「認真努力」及「願意付出」的工作態度，自己一定可以做得到。">
                        </art>

                    </div>
                </div>
            </div>
        </div>
    </article>`
})
// art start(about)
Vue.component('art', {
    props: ['title', 'content'],
    template: ` <div class="art col-12">
                            <div class="art_inner">
                                <div class="article-title">{{ title }}</div>
                                <div class="content">
                                    <p>
                                        {{ content }}
                                    </p>
                                </div>
                            </div>
                        </div>`
})
Vue.component('art2', {
    props: ['title', 'sec1', 'sec2', 'sec3', 'content1', 'content2', 'content3'],
    template: `<div class="art col-12">
                            <div class="art_inner">
                                <div class="article-title">{{ title }}</div>
                                <div class="content">
                                    <h5>{{ sec1 }}</h5>
                                    <p>{{ content1 }}</p>
                                    <h5>{{ sec2 }}</h5>
                                    <p>{{ content2 }}</p>
                                    <h5>{{ sec3 }}</h5>
                                    <p>{{ content3 }}</p>
                                </div>
                            </div>
                        </div>`
})
// art end(about)