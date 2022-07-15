import Link from 'next/link';

export default function Footer() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse">
                    <Link href="/">
                        <a className="navbar-brand">
                            <img src="https://unsc.oss-accelerate.aliyuncs.com/ViewCB/Images/logo.PNG" height={60 + "px"} />
                        </a>
                    </Link>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active">
                                Copyright © 2022 <Link href="/">ViewCB</Link>. All rights reserved. 
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}