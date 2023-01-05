import Head from 'next/head';
import Link from 'next/link';
import date1 from './cmd/json/cmds.json'
import date2 from './cmd/json/other.json'

export default function Commands() {
    return (
        <div className='row gy-5'>
            <Head>
                <title>命令详解列表 - ViewCB 我的世界指令百科全书</title>
            </Head>
            <h2>命令详解</h2>
            <div className='col-12'>
                <div className="row">
                    {date1.map(function (item, index) {
                        return (
                            <div className="col-sm-3" key={index} style={{marginTop:10}}>
                                <div className="card">
                                    <div className="card-body">
                                        <Link href={item.url} passHref><a><h5 className="card-title">{item.title}</h5></a></Link>
                                        <p className="card-text">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div >
            <hr />
            <h2>其他内容</h2>
            <div className='col-12'>
                <div className="row">
                    {date2.map(function (item, index) {
                        return (
                            <div className="col-sm-3" key={index} style={{marginTop:10}}>
                                <div className="card">
                                    <div className="card-body">
                                        <Link href={item.url} passHref><a><h5 className="card-title">{item.title}</h5></a></Link>
                                        <p className="card-text">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div >
            <hr />
            <div className="alert alert-primary" role="alert">
                更多指令正在编写中，如果您有意参与编写请<Link href="/contribute"><a className='redText' style={{color:"aqua"}}>参考此处</a></Link>
            </div>
        </div>
    )
}