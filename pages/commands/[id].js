import { getAllPostIds, getPostData,getSortedPostsData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import Header from '../../components/header'
import Navbar from '../../components/navbar'
import Layout from '../../components/layout'
import Footer from '../../components/footer'
import PathCmd from '../../components/pathCmd'
import JavaScriptList from '../../components/import'
import Link from 'next/link';

function Keywords(text) {
    let keywords = text + ",我的世界命令,基岩版命令,命令教程"
    return keywords
}

function Description(text) {
    let description = text + " - ViewCB - 我的世界基岩版的命令百科全书，为您带来无障碍、易于理解的基岩版指令百科。"
    return description
}

export default function Post({ postData }) {
    return (
        <>
            <Head>
                <title>{postData.title} - ViewCB 我的世界指令百科全书</title>
                <meta name="keywords" content={Keywords(postData.keywords)} />
                <meta name="description" content={Description(postData.title)} />
            </Head>
            <Header />
            <Navbar />
            <Layout>
                <PathCmd pageName={postData.title} />
                <article>
                    <h1>{postData.title}</h1>
                    <div>
                        <Date dateString={postData.date} />
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                </article>
                <hr />
                本页面内容存在问题或有待完善补充？您可以<Link href="https://www.wenjuan.com/s/UZBZJv18XE3/"><a target="_blank">前往此处</a></Link>提交您的宝贵意见
                <hr />
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link href="/commands" >
                            <a className="nav-link" aria-current="page">{"<---返回命令列表"}</a>
                        </Link>
                    </li>
                </ul>
            </Layout>
            <Footer />
            <JavaScriptList />
        </>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    const allPostsData = getSortedPostsData()
    return {
        props: {
            postData,
            allPostsData
        }
    }
}

