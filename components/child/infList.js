import { Descriptions } from '@arco-design/web-react';
import '@arco-design/web-react/dist/css/arco.css';

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
