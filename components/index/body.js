import path from "path"
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import pageNum from '../../public/count'

export default function IndexBody() {
    return (
        <div className='row gy-5'>
            <Head>
                <title>ViewCB - 我的世界指令百科全书</title>
                <meta name="keywords" content="我的世界指令,基岩版命令,命令教程" />
                <meta name="description" content="ViewCB - 我的世界基岩版的命令百科全书，为您带来无障碍、易于理解的基岩版指令百科。" />

            </Head>
            <div className="col-12">
                <div className="row gy-5">
                    <div className="col-12">
                        <h1 className="display-1 text-center"><b>MC-BE指令权威指南</b></h1>
                    </div>
                    <div className="col-12">
                        <h5 className="display-5 text-center">为您带来无障碍、易于理解的我的世界基岩版指令百科</h5>
                    </div>
                </div>
            </div>
            <hr />
            <div className="col-12">
                <div className="card text-center">
                    <div className="card-header">
                        <span class="colorize_fun">
                            <span style={{ color: "#ff0000" }}>V</span>
                            <span style={{ color: "#cc0032" }}>i</span>
                            <span style={{ color: "#990064" }}>e</span>
                            <span style={{ color: "#660097" }}>w</span>
                            <span style={{ color: "#3200c9" }}>C</span>
                            <span style={{ color: "#0000fc" }}>B</span>
                        </span>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title"><b>指令详解</b></h5>
                        <p className="card-text">本站拥有我的世界基岩版详细的指令详解内容，包括指令的参数列表、用法举例、属性ID等等，帮助您在第一时间内获取您想要的内容。</p>
                        <Link href="/commands">
                            <a className="btn btn-primary">Get Start</a>
                        </Link>
                    </div>
                    <hr />
                    <div className="card-body">
                        <h5 className="card-title"><b>应用实例</b></h5>
                        <p className="card-text">这里有一些通过指令实现的功能，为您提供解决方案和参考内容。</p>
                        <a href="#" className="btn btn-primary">开发中...</a>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <div className='row'>
                    <div className='col'>
                        <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                累计收录指令详解
                                <span className="badge bg-primary rounded-pill">{pageNum[0].cmd}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                累计指令应用实例
                                <span className="badge bg-primary rounded-pill">{pageNum[1].use}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                累计页面数
                                <span className="badge bg-primary rounded-pill">{pageNum[2].pages}</span>
                            </li>
                        </ul>
                    </div>
                    <div className='col'>
                        <div className="list-group">
                            <div className="list-group-item list-group-item-action active" aria-current="true">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">内容编撰中</h5>
                                    <small>2022-7-11</small>
                                </div>
                                <p className="mb-1">本站正在努力编撰指令详解内容中，未来会不断进行补充完善！</p>
                                <small>路漫漫其修远兮，吾将上下而求索。</small>
                            </div>
                            {/* <a href="#" className="list-group-item list-group-item-action">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">List group item heading</h5>
                                    <small className="text-muted">3 days ago</small>
                                </div>
                                <p className="mb-1">Some placeholder content in a paragraph.</p>
                                <small className="text-muted">And some muted small print.</small>
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="col-6">
                <h3>友情链接</h3>
                <ol class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                            <a href="https://www.mcnav.net/" target="_blank" style={{color:"black"}}>
                                <div class="fw-bold">MCNav导航</div>
                                一个强大好用的Minecraft网址导航站，致力于收录最全面的MC网址和工具，为广大MC爱好者提供便利。
                            </a>
                        </div>
                        <span class="badge bg-primary rounded-pill">2022-12-10</span>
                    </li>
                    {/* <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                            <div class="fw-bold">Subheading</div>
                            Content for list item
                        </div>
                        <span class="badge bg-primary rounded-pill">14</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                            <div class="fw-bold">Subheading</div>
                            Content for list item
                        </div>
                        <span class="badge bg-primary rounded-pill">14</span>
                    </li> */}
                </ol>
            </div>
            {/* <Script
                src="https://unsc.oss-cn-hongkong.aliyuncs.com/ViewCB/JavaScript/count.js"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            /> */}
            <script src="https://unsc.oss-accelerate.aliyuncs.com/ViewCB/JavaScript/count.js" />
            <Script
                src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            />
            {/* <Script
                src="https://cdn.bootcdn.net/ajax/libs/echarts/5.3.3/echarts.min.js"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            /> */}
            {/* <Script
                src="https://unsc.oss-accelerate.aliyuncs.com/ViewCB/JavaScript/echarts/countInf.js"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            /> */}

        </div>
    )
}