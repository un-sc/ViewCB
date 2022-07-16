import Head from 'next/head';
import CmdList from './cmd/list';
import OtherList from './cmd/other';
import Link from 'next/link';

export default function Commands() {
    return (
        <div className='row gy-5'>
            <Head>
                <title>命令详解列表 - ViewCB 我的世界指令百科全书</title>
            </Head>
            <h2>命令详解</h2>
            <CmdList />
            <hr />
            <h2>其他内容</h2>
            <OtherList />
            <hr />
            <div className="alert alert-primary" role="alert">
                更多指令正在编写中，如果您有意参与编写请<Link href="/contribute"><a className='redText'>参考此处</a></Link>
            </div>
        </div>
    )
}