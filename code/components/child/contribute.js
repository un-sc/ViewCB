import React, { useState } from 'react';
import ReactDOM from "react-dom";
import Head from 'next/head';
import Link from 'next/link'
import { Divider } from '@arco-design/web-react';
import Information from './infList';
import People from './people';
import { Segmented, QRCode, Button, Col, Row, Typography } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

const { Paragraph } = Typography;

export default function Contribute() {
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
                <title>做出贡献 - ViewCB 我的世界指令百科全书</title>
                <meta name="keywords" content />
                <meta name="description" content />
            </Head>
            <div className='row gy-5'>
                <div className='col-12'>
                    <h1>独乐乐不如众乐乐</h1>
                    <Divider />
                    <h3 style={{ marginTop: 10 }}>引言</h3>
                    <p className="lead">ViewCB的大部分内容均由联安一人编写，工作量繁重。也许在文档中会出现语义错误、表述不明的情况，亦或是您认为内容结构、页面布局等方面有待改进······</p>
                    <p className="lead">我（联安）希望大家能够对ViewCB提出意见和建议，也更希望能有志同道合之士和我共同编写内容。</p>
                    <h3>如何提出修改意见或亲身参与编撰？</h3>
                    <p className="lead">您可以<Link href="https://www.wenjuan.com/s/UZBZJv18XE3/"><a target="_blank">前往此处</a></Link>提交您的宝贵意见、或者要补充的内容（如果内容过长您可以上传文件）。</p>
                    <h3>关于本站的文字编撰方法</h3>
                    <p className='lead'>本站使用了<Link href="https://github.com/remarkjs/remark"><a target="_blank">remark</a></Link>库，以此来实现将markdown文件转化为html可识别内容。本站的命令详解部分内容均使用了该方法，因此文档的源文件为markdown文件。</p>
                    <p className='lead'>您可以尝试为ViewCB自行编写markdown文件，提供不一样的内容风格。</p>
                    <h3>联系方式</h3>
                    <Information />
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
                            <Row style={{ marginTop: 20 }}>
                                <Col><p className='lead'>QQ频道号：</p></Col>
                                <Col><a target="_blank" href='https://pd.qq.com/s/ffzks7nc7'><Paragraph style={{ fontSize: "1.25rem", fontWeight: 300, color: "#5757ff" }} copyable >viewcb271828</Paragraph></a></Col>
                            </Row>
                        </Col>
                    </Row>
                    <p>PS：扫描二维码加入ViewCB的QQ频道，二维码越复杂，识别准确率越高，但是不适应小图片或分辨率低的图片(会看不清楚)，您可以自己调整二维码复杂率和图片大小。</p>
                    <Divider
                        style={{
                            borderBottomWidth: 2,
                            borderBottomStyle: 'dotted',
                        }}
                    />
                    <h3 style={{ marginTop: 10 }}>贡献者</h3>
                    <People />
                </div>
            </div>
        </>
    )
}
