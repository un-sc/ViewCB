import React, { useState } from 'react';
import { Descriptions, } from '@arco-design/web-react';
import { Typography } from 'antd';
import '@arco-design/web-react/dist/css/arco.css';

const { Paragraph } = Typography;

const data = [
    {
        label: 'Name',
        value: '联安',
    },
    {
        label: '微信',
        value: 'lablog2020',
    },
    {
        label: 'QQ',
        value: '2779799659',
    },
    {
        label: 'Residence',
        value: 'Beijing',
    },
    {
        label: 'email',
        value: '2779799659@qq.com',
    },
    {
        label: 'ViewCB的QQ频道',
        value: (
            <a target="_blank" href='https://pd.qq.com/s/ffzks7nc7'><Paragraph style={{ fontWeight: 400, color: "#5757ff" }} copyable >viewcb271828</Paragraph></a>
        )
    },
];

const Information = () => {
    return <Descriptions
        colon=' :'
        style={{ marginTop: 20 }}
        layout='inline-horizontal'
        border={false}
        data={data} />;
};

export default Information;
