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
                        ViewCB
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