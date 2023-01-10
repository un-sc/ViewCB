import Link from 'next/link';

export default function Footer() {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "rgb(34,34,34)" }}>
            <div className="container-fluid">
                <Link href="/">
                    <img src="https://public.viewcb.net/images/viewcb-logo-light.png" height={60 + "px"} />
                </Link>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" id="deleteColor" style={{ color: "white" }}>
                            Copyright © 2022-2023 <Link href='/'>ViewCB</Link>. All rights reserved.
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href='http://beian.miit.gov.cn/' target="_blank" style={{ color: "white" }}>
                            冀ICP备2022016585号
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=13108202000849' target="_blank" style={{ color: "white" }}>
                            <img src='https://public.viewcb.net/images/beian.png' />
                            冀公网安备 13108202000849号
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}