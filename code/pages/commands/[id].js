import React, { useState, useMemo } from 'react';
import { getAllPostIds, getPostData, getSortedPostsData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import Header from '../../components/header'
import Navbar from '../../components/navbar'
import Layout from '../../components/layout'
import Footer from '../../components/footer'
import PathCmd from '../../components/pathCmd'
import JavaScriptList from '../../components/import'
import Link from 'next/link';
import { Segmented, QRCode, Button, Col, Row, Typography, Modal } from 'antd';
import { MinusOutlined, PlusOutlined, } from '@ant-design/icons';
import { Notification } from '@arco-design/web-react';

const { Paragraph } = Typography;

function Keywords(text) {
    let keywords = text + ",我的世界命令,基岩版命令,命令教程"
    return keywords
}

function Description(text) {
    let description = text + " - ViewCB - 我的世界基岩版的命令百科全书，为您带来无障碍、易于理解的基岩版指令百科。"
    return description
}

export default function Post({ postData }) {
    const [level, setLevel] = useState('M');
    const [size, setSize] = useState(160);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const success = () => {
        Modal.success({
            title: "页面链接复制成功",
            content: (
                <>
                    <p className='lead'>欢迎加入ViewCB的QQ频道</p>

                    <Row>
                        <Col><p className='lead'>QQ频道号：</p></Col>
                        <Col><a target="_blank" href='https://pd.qq.com/s/ffzks7nc7'><Paragraph style={{ fontSize: "1.25rem", fontWeight: 300, color: "#5757ff" }} copyable >viewcb271828</Paragraph></a></Col>
                    </Row>
                    <QRCode
                        style={{
                            marginBottom: 16,
                        }}
                        errorLevel='M'
                        value="https://pd.qq.com/s/ffzks7nc7"
                        icon='https://public.viewcb.net/images/V.JPEG'
                        size={160}
                        iconSize={40}
                    />
                    <i>扫描二维码加入群聊</i>
                </>
            ),
        });
    };
    const error = () => {
        Modal.error({
            title: 'This is an error message',
            content: 'some messages...some messages...',
        });
    };
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
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
                <title>{postData.title} - ViewCB 我的世界指令百科全书</title>
                <meta name="keywords" content={Keywords(postData.keywords)} />
                <meta name="description" content={Description(postData.title)} />
            </Head>
            <Header />
            <Navbar />
            <Layout>
                <PathCmd pageName={postData.title} />
                <article>
                    <h1>{postData.title}</h1>
                    <div>
                        <Date dateString={postData.date} />
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                </article>
                <hr />
                本页面内容存在问题或有待完善补充？您可以<Link href="https://www.wenjuan.com/s/UZBZJv18XE3/"><a target="_blank">前往此处</a></Link>提交您的宝贵意见
                <hr />
                <h3>分享本页面</h3>
                <Row gutter={[24, 16]}>
                    <Col>
                        <QRCode
                            style={{
                                marginBottom: 16,
                            }}
                            errorLevel={level}
                            value={"https://viewcb.net/commands/" + postData.id}
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
                    </Col>
                </Row>
                <p>PS：二维码越复杂，识别准确率越高，但是不适应小图片或分辨率低的图片(会看不清楚)，您可以自己调整二维码复杂率和图片大小，以适应不同场合。</p>
                <Row>
                    <Col><p className='lead'>本页面链接：</p></Col>
                    <Col>
                        <Paragraph
                            copyable={{ text: "https://viewcb.net/commands/" + postData.id, onCopy: function () { success() } }}
                            strong={true}
                            style={{ color: "#c41d7f", fontSize: "1.25rem", fontWeight: 300 }}
                        >
                            {"https://viewcb.net/commands/" + postData.id}
                        </Paragraph>
                    </Col>
                </Row>

                <Modal title="复制成功" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} centered>
                    <p>页面链接复制成功</p>
                    <p className='lead'>欢迎加入ViewCB的QQ频道</p>
                    <p className='lead'>QQ频道号：<Link href='https://pd.qq.com/s/ffzks7nc7'>viewcb271828</Link></p>
                    <QRCode
                        style={{
                            marginBottom: 16,
                        }}
                        errorLevel='M'
                        value="https://pd.qq.com/s/ffzks7nc7"
                        icon='https://public.viewcb.net/images/V.JPEG'
                        size={160}
                        iconSize={40}
                    />
                    <i>扫描二维码加入ViewCB的QQ频道</i>
                </Modal>
                <hr />
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link href="/commands" >
                            <a className="nav-link" aria-current="page">{"<---返回命令列表"}</a>
                        </Link>
                    </li>
                </ul>
            </Layout>
            <Footer />
            <JavaScriptList />
        </>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    const allPostsData = getSortedPostsData()
    return {
        props: {
            postData,
            allPostsData
        }
    }
}

