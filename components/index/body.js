import path from "path"
import React from 'react';
import ReactDOM from "react-dom";
import { Divider, Card } from '@arco-design/web-react';
const { Meta } = Card;
import Link from 'next/link';
import Head from 'next/head';
import IndexNumList from "./number";
import NoticeContent from "./notice";
import CcWarn from "./cc";
import RandomCard from "./random";
import date1 from "../child/cmd/json/cmds.json"
import date2 from "../child/cmd/json/other.json"
import Script from "next/script";


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
            <Divider
                style={{
                    borderBottomStyle: 'dashed',
                }}
            />
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
                    <Divider />
                    <div className="card-body">
                        <h5 className="card-title"><b>应用实例</b></h5>
                        <p className="card-text">这里有一些通过指令实现的功能，为您提供解决方案和参考内容。</p>
                        <a href="#" className="btn btn-primary">开发中...</a>
                    </div>
                </div>
            </div>
            <Divider
                style={{
                    borderBottomStyle: 'dashed',
                }}
            />
            <div className="col-12">
                <div className='row'>
                    <div className='col' style={{ marginTop: 10, marginBottom: 10 }}>
                        <IndexNumList />
                    </div>
                    <div className='col' style={{ marginTop: 10, marginBottom: 10 }}>
                        <NoticeContent />
                    </div>
                    <div className="col" style={{ marginTop: 10, marginBottom: 10 }}>
                        <CcWarn />
                    </div>
                    <div className="col" style={{ marginTop: 10, marginBottom: 10 }}>
                        <div id="chart" style={{ height: 100 + "%", width: 100 + "%" }}></div>
                        <Script
                            id='chartIndex'
                            onReady={() => {
                                echarts.init(document.getElementById('chart')).setOption({
                                    title: {
                                        text: '指令新增统计'
                                    },
                                    tooltip: {},
                                    xAxis: {
                                        data: ['2022/7','2022/8','2022/9','2022/10','2022/11','2022/12']
                                    },
                                    yAxis: {},
                                    series: [
                                        {
                                            name: '当月新增指令详解',
                                            type: 'line',
                                            data: [26,3,0,5,0,1]
                                        }
                                    ]
                                },'dark')
                            }}
                            dangerouslySetInnerHTML={{
                                __html: ``,
                            }}
                        />
                    </div>
                </div>
            </div>
            <Divider
                style={{
                    borderBottomStyle: 'dashed',
                }}
            />
            <h3>随机内容推荐</h3>
            <RandomCard />
            <Divider
                style={{
                    borderBottomStyle: 'dashed',
                }}
            />
            <h3>友情链接</h3>
            <div className="col-6 col-sm-12">
                <div style={{ display: 'flex' }} >
                    <a href='https://www.mcnav.net/' target='_blank'>
                        <Card
                            hoverable
                            style={{ width: 360 }}
                            cover={
                                <div style={{ height: 'auto', overflow: 'hidden', backgroundColor: "#1d1d1d" }}>
                                    <img
                                        style={{ width: '100%' }}
                                        alt='dessert'
                                        src='https://unsc.oss-accelerate.aliyuncs.com/ViewCB/Images/mcnav.gif'
                                    />
                                </div>
                            }
                        >
                            <Meta
                                title='MCNav导航'
                                description={
                                    <>
                                        一个强大好用的Minecraft网址导航站，致力于收录最全面的MC网址和工具，为广大MC爱好者提供便利。
                                    </>
                                }
                            />
                        </Card>
                    </a>
                </div>
            </div>
        </div>
    )
}