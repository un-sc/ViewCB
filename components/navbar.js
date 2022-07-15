import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link href="/">
                    <a className="navbar-brand">
                        <img src="https://unsc.oss-accelerate.aliyuncs.com/ViewCB/Images/logo.PNG" height={60+"px"} />
                    </a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/"><a className="nav-link active" aria-current="page">首页</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/commands"><a className="nav-link active" aria-current="page">命令详解</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about"><a className="nav-link active" aria-current="page">关于</a></Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>
    )
}