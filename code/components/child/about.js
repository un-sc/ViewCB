import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link'
import date1 from "./cmd/json/cmds.json"
import Script from "next/script";
import { Divider } from '@arco-design/web-react';
import "@arco-design/web-react/dist/css/arco.css";
import Image from 'next/image'
import profilePic from '../../public/QQGroupQRcode2.png'
import { Segmented, QRCode, Button, Col, Row, Typography } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

const { Paragraph } = Typography;

export default function About() {
    const [level, setLevel] = useState('M');
    const [size, setSize] = useState(160);
    const increase = () => {
        setSize((prevSize) => {
            const newSize = prevSize + 10;
            if (newSize > 300) {
                return 300;
            }
            return newSize;
        });
    };
    const decline = () => {
        setSize((prevSize) => {
            const newSize = prevSize - 10;
            if (newSize < 48) {
                return 48;
            }
            return newSize;
        });
    };
    return (
        <>
            <Head>
                <title>关于 - ViewCB 我的世界指令百科全书</title>
            </Head>
            <div className='row gy-5'>
                <div className='col-12'>
                    <figure className="figure">
                        <img src="https://public.viewcb.net/images/viewcb-logo-light.png" className="figure-img img-fluid rounded" alt="ViewCB的logo" />
                        <figcaption className="figure-caption">Copyright © 2022 ViewCB. All rights reserved.</figcaption>
                    </figure>
                </div>
                <div className='col-12'>
                    <h1>ViewCB 我的世界指令百科全书</h1>
                    <Divider />
                    <h2>建设目的和初衷</h2>
                    <p className='lead'>ViewCB是一款我的世界基岩版命令的在线查阅平台，截至目前累计收录{date1.length}条指令的详细解释。本站所有内容不收取任何费用。ViewCB的创建只是用于对知识的分享，不存在任何商业化模式，它更不是赚钱的工具，您也可能发现甚至连一条广告都不存在，这更加体现了ViewCB的创办性质。</p>
                    <p className='lead'>ViewCB作为公益性的在线查阅平台，将不存在任何的收入形式，我们也努力将维护成本压至最低，每月不超过50元，但依然能为您带来良好的使用体验。</p>
                    <p className='lead'>ViewCB为了避免不必要的麻烦，并不直接开放公众对文献的更改权限，但您依然可以对ViewCB做出贡献。如果您想帮助ViewCB做出改进或对内容进行修订、补充等，欢迎您<Link href="/contribute"><a>查阅此处</a></Link>。</p>
                    <p className='lead'>ViewCB始终坚持尊重原创的态度，对于内容的引用都做出了明显的标记。同时ViewCB的大部分内容均为原创，可MC指令是具有标准性的，因此难免与他人会有雷同，这就好比说很多书上都提到了相同的一元二次方程解法，难道你能说他们是抄袭而来的吗？恐怕不行。</p>
                    <h2>关于ViewCB网站的建设</h2>
                    <p className='lead'>对于ViewCB网站的建设，我始终坚持快速、简洁、无障碍的理念。本站通过<a href='https://nodejs.org/' target='_blank'>Node.js</a>、<a href='https://reactjs.org/'>React</a>、<a href="https://nextjs.org/" target="_blank">Next.js</a>构建，通过<a href='https://arco.design/' target='_blank'>ArcoDesign</a>、<a href="https://v5.bootcss.com/" target="_blank">Bootstrap</a>、<a href='https://ant.design/' target="_blank">AntDesign</a>生成UI。通过构建时预渲染、服务端渲染、路由预加载、智能打包、零配置等和<a href='https://www.aliyun.com/product/dcdn' target='_blank'>阿里云DCDN</a>来实现高速访问。</p>
                    <h2>加入ViewCB的QQ频道</h2>
                    <Row gutter={[24, 16]}>
                        <Col>
                            <QRCode
                                style={{
                                    marginBottom: 16,
                                }}
                                errorLevel={level}
                                value={"https://pd.qq.com/s/ffzks7nc7"}
                                icon='https://public.viewcb.net/images/ViewTheViewCB.PNG'
                                size={size}
                                iconSize={size / 4}
                            />
                        </Col>
                        <Col>
                            <Row gutter={[24, 16]}>
                                <Col><Button.Group
                                    style={{
                                        marginBottom: 16,
                                    }}
                                >
                                    <Button onClick={decline} disabled={size <= 48} icon={<MinusOutlined />}>
                                        Smaller
                                    </Button>
                                    <Button onClick={increase} disabled={size >= 300} icon={<PlusOutlined />}>
                                        Larger
                                    </Button>
                                </Button.Group></Col>
                            </Row>
                            <Row gutter={[24, 16]}>
                                <Col>
                                    <Segmented options={['L', 'M', 'Q', 'H']} value={level} onChange={setLevel} />
                                </Col>
                            </Row>
                            <Row style={{marginTop:20}}>
                                <Col><p className='lead'>QQ频道号：</p></Col>
                                <Col><a target="_blank" href='https://pd.qq.com/s/ffzks7nc7'><Paragraph style={{ fontSize: "1.25rem", fontWeight: 300, color: "#5757ff" }} copyable >viewcb271828</Paragraph></a></Col>
                            </Row>
                        </Col>
                    </Row>
                    <p>PS：二维码越复杂，识别准确率越高，但是不适应小图片或分辨率低的图片(会看不清楚)，您可以自己调整二维码复杂率和图片大小，以适应不同场合。</p>
                    <h2>写在最后</h2>
                    <p className='lead'>曾经有一个国王问小牧童永恒有多少秒，牧童说在世界的尽头，一片荒芜的雾霭中伫立着一颗古老的参天大树，它就是生命树。当老树伸懒腰时枝头那只沉睡百年的小鸟醒了过来， 它就是时间鸟。这一次的醒来时间鸟又要开始一次艰辛的旅行，飞行中遇到狂风，它逆风向前，一直飞，一直飞，遇到了闪电、轰雷、暴雨……时间鸟不畏艰辛，还是一直飞，突然一道曙光穿透了厚厚的云层，时间鸟便跟着那道曙光穿越了云层，来到了它夜以继日寻找的钻石山。时间鸟便开始用喙琢磨钻石山的表面直到时间鸟的喙恢复了锋利，它便往归途飞去。时间鸟终于历经艰辛回到了生命树的枝头又沉沉的睡去了，等待着下一个一百年的到来继续琢磨钻石山，直到钻石山被磨平，永恒就过了一秒。​</p>
                    <div id='map' style={{ height: 400 + 'px', width: 100 + "%" }}></div>
                    <Script
                        id='chartIndex'
                        onReady={() => {
                            var chartDom = document.getElementById('map');
                            var myChart = echarts.init(chartDom);
                            var option;

                            option = {
                                graphic: {
                                    elements: [
                                        {
                                            type: 'text',
                                            left: 'center',
                                            top: 'center',
                                            style: {
                                                text: 'ViewCB.net',
                                                fontSize: 80,
                                                fontWeight: 'bold',
                                                lineDash: [0, 200],
                                                lineDashOffset: 0,
                                                fill: 'transparent',
                                                stroke: '#000',
                                                lineWidth: 1
                                            },
                                            keyframeAnimation: {
                                                duration: 3000,
                                                loop: true,
                                                keyframes: [
                                                    {
                                                        percent: 0.7,
                                                        style: {
                                                            fill: 'transparent',
                                                            lineDashOffset: 200,
                                                            lineDash: [200, 0]
                                                        }
                                                    },
                                                    {
                                                        // Stop for a while.
                                                        percent: 0.8,
                                                        style: {
                                                            fill: 'transparent'
                                                        }
                                                    },
                                                    {
                                                        percent: 1,
                                                        style: {
                                                            fill: 'black'
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            };

                            option && myChart.setOption(option);

                        }}
                        dangerouslySetInnerHTML={{
                            __html: ``,
                        }}
                    />
                </div>
            </div>
        </>
    )
}
