import React from "react";
import ReactDOM from "react-dom";
import "@arco-design/web-react/dist/css/arco.css";
import { Result, Button, Space } from '@arco-design/web-react';
import Link from 'next/link';

const Custom404 = () => {
    return (
        <div>
            <Result
                status='error'
                title='404 | 页面不存在'
                subTitle='您请求访问的页面不存在，请检查网页地址是否正确'
                extra={[
                    <Button type='primary'>
                        <Link href="/"><span className="eicon eiconhome" >返回首页</span></Link>
                    </Button>
                ]}
            ></Result>
        </div>
    );
};

export default Custom404;