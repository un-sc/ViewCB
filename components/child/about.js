import Head from 'next/head';
import Link from 'next/link'
import pageNum from '../../public/count'

export default function About() {
    return (
        <>
            <Head>
                <title>关于 - ViewCB 我的世界指令百科全书</title>
            </Head>
            <div className='row gy-5'>
                <div className='col-12'>
                    <figure className="figure">
                        <img src="https://unsc.oss-accelerate.aliyuncs.com/ViewCB/Images/logo.PNG" className="figure-img img-fluid rounded" alt="..." />
                            <figcaption className="figure-caption">Copyright © 2022 ViewCB. All rights reserved.</figcaption>
                    </figure>
                </div>
                <div className='col-12'>
                    <h1>ViewCB 我的世界指令百科全书</h1>
                    <hr />
                    <h2>建设目的和初衷</h2>
                    <p className='lead'>ViewCB是一款我的世界基岩版命令的在线查阅平台，截至目前累计收录{pageNum[0].cmd}条指令的详细解释。本站所有内容不收取任何费用。ViewCB的创建只是用于对知识的分享，不存在任何商业化模式，它更不是赚钱的工具，您也可能发现甚至连一条广告都不存在，这更加体现了ViewCB的创办性质。</p>
                    <p className='lead'>ViewCB作为公益性的在线查阅平台，将不存在任何的收入形式，我们也努力将维护成本压至最低，每月不超过50元，但依然能为您带来良好的使用体验。</p>
                    <p className='lead'>ViewCB为了避免不必要的麻烦，并不直接开放公众对文献的更改权限，但您依然可以对ViewCB做出贡献。如果您想帮助ViewCB做出改进或对内容进行修订、补充等，欢迎您<Link href="/contribute"><a>查阅此处</a></Link>。</p>
                    <p className='lead'>ViewCB始终坚持尊重原创的态度，对于内容的引用都做出了明显的标记。同时ViewCB的大部分内容均为原创，可MC指令是具有标准性的，因此难免与他人会有雷同，这就好比说很多书上都提到了相同的一元二次方程解法，难道你能说他们是抄袭而来的吗？恐怕不行。</p>
                    <h2>关于ViewCB网站的建设</h2>
                    <p className='lead'>对于ViewCB网站的建设，我始终坚持快速、简洁、无障碍的理念。本站通过<a href="https://nextjs.org/" target="_blank">Next.js</a>构建，通过<a href="https://v5.bootcss.com/" target="_blank">Bootstrap</a>生成UI。</p>
                    {/* <h2>参与贡献人员</h2>
                    <p className='lead'>每一位为为ViewCB做出贡献的人员都会被记录在此，他们让ViewCB变得更好。</p>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    人员列表
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className='row'>
                                        <div className='col-2'>
                                            <div className="card">
                                                <img src="https://avatars.githubusercontent.com/u/63138574?v=4" className="card-img-top" alt="联安" />
                                                <div className="card-body">
                                                    <p className="card-text">联安：ViewCB的发起人</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <h2>写在最后</h2>
                    <p className='lead'>曾经有一个国王问小牧童永恒有多少秒，牧童说在世界的尽头，一片荒芜的雾霭中伫立着一颗古老的参天大树，它就是生命树。当老树伸懒腰时枝头那只沉睡百年的小鸟醒了过来， 它就是时间鸟。这一次的醒来时间鸟又要开始一次艰辛的旅行，飞行中遇到狂风，它逆风向前，一直飞，一直飞，遇到了闪电、轰雷、暴雨……时间鸟不畏艰辛，还是一直飞，突然一道曙光穿透了厚厚的云层，时间鸟便跟着那道曙光穿越了云层，来到了它夜以继日寻找的钻石山。时间鸟便开始用喙琢磨钻石山的表面直到时间鸟的喙恢复了锋利，它便往归途飞去。时间鸟终于历经艰辛回到了生命树的枝头又沉沉的睡去了，等待着下一个一百年的到来继续琢磨钻石山，直到钻石山被磨平，永恒就过了一秒。​</p>
                </div>
            </div>
        </>
    )
}