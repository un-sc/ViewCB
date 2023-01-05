import path from "path"
import Link from 'next/link';
import Head from 'next/head';
import IndexNumList from "./number";
import NoticeContent from "./notice";
import CcWarn from "./cc";

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
                        <span className="colorize_fun">
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
                        <IndexNumList />
                    </div>
                    <div className='col'>
                        <NoticeContent />
                    </div>
                    <div className="col">
                        <CcWarn />
                    </div>
                </div>
            </div>
            <hr />
            <div className="col-6">
                <h3>友情链接</h3>
                <ol className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <a href="https://www.mcnav.net/" target="_blank">
                                <div className="fw-bold">MCNav导航</div>
                            </a>
                                一个强大好用的Minecraft网址导航站，致力于收录最全面的MC网址和工具，为广大MC爱好者提供便利。
                            
                        </div>
                        <span className="badge bg-primary rounded-pill">2022-12-10</span>
                    </li>
                    {/* <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Subheading</div>
                            Content for list item
                        </div>
                        <span className="badge bg-primary rounded-pill">14</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Subheading</div>
                            Content for list item
                        </div>
                        <span className="badge bg-primary rounded-pill">14</span>
                    </li> */}
                </ol>
            </div>
        </div>
    )
}