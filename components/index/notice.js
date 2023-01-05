import React from "react";
import ReactDOM from "react-dom";
import Link from 'next/link';
import { Card } from '@arco-design/web-react';
import "@arco-design/web-react/dist/css/arco.css";

const NoticeContent = () => {
    return (
        <div style={{ display: 'flex' }} >
            <Card style={{ width: 360 }}
                className='card-custom-hover-style'
                title='内容编撰中'
                extra={<Link href="/contribute">More</Link>}
                hoverable
            >
                本站正在努力编撰指令详解内容中，未来会不断进行补充完善！<br />
                <small>路漫漫其修远兮，吾将上下而求索。</small>
            </Card>
        </div>
    );
};

export default NoticeContent;
