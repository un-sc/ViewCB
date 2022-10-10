import Head from 'next/head';
import Link from 'next/link'

export default function Contribute() {
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
                    <hr />
                    <h3>引言</h3>
                    <p className="lead">ViewCB的大部分内容均由联安一人编写，工作量繁重。也许在文档中会出现语义错误、表述不明的情况，亦或是您认为内容结构、页面布局等方面有待改进······</p>
                    <p className="lead">我（联安）希望大家能够对ViewCB提出意见和建议，也更希望能有志同道合之士和我共同编写内容。</p>
                    <h3>如何提出修改意见或亲身参与编撰？</h3>
                    <p className="lead">您可以<Link href="https://www.wenjuan.com/s/UZBZJv18XE3/"><a target="_blank">前往此处</a></Link>提交您的宝贵意见、或者要补充的内容（如果内容过长您可以上传文件）。</p>
                    <h3>关于本站的文字编撰方法</h3>
                    <p className='lead'>本站使用了<Link href="https://github.com/remarkjs/remark"><a target="_blank">remark</a></Link>库，以此来实现将markdown文件转化为html可识别内容。本站的命令详解部分内容均使用了该方法，因此文档的源文件为markdown文件。</p>
                    <p className='lead'>您可以尝试为ViewCB自行编写markdown文件，提供不一样的内容风格。</p>
                    <h3>联系方式</h3>
                    <ul className='lead'>
                        <li>微信：lablog2020</li>
                        <li>QQ：2779799659</li>
                        <li>邮箱：<Link href='mailto: 2779799659@qq.com'><a>2779799659@qq.com</a></Link></li>
                    </ul>
                    <hr />
                    {/* <ul className="nav nav-pills">
                        <li className="nav-item">
                            <Link href="/about" >
                                <a className="nav-link" aria-current="page">{"<---返回关于页面"}</a>
                            </Link>
                        </li>
                    </ul> */}
                </div>
            </div>
        </>
    )
}