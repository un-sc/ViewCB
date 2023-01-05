import { Alert } from '@arco-design/web-react';

const CcWarn = () => {
    return (
        <div>
            <Alert
                style={{ marginBottom: 20 }}
                type='info'
                title='转载须知'
                content='本网站内的所有内容均以《知识共享 署名-非商业性使用-相同方式分享 3.0协议》授权。'
                action={
                    <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/deed.zh" target="_blank">查看协议详情</a>
                }
            />
        </div>
    );
};

export default CcWarn;
