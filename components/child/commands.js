import Head from 'next/head';
import Link from 'next/link'
import CmdList from './cmd/list';

export default function Commands() {
    return (
        <div className='row gy-5'>
            <Head>
                <title>命令详解列表 - ViewCB 我的世界指令百科全书</title>
            </Head>
            <CmdList />
        </div>
    )
}