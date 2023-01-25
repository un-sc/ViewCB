import Link from 'next/link';

export default function PathCmd({pageName}) {
    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href="/"><a>首页</a></Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link href="/commands"><a>命令详解</a></Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">{pageName}</li>
                </ol>
            </nav>
        </div>
    )
}