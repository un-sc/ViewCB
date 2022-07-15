import Link from 'next/link';

export default function Footer() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{width:100+"%"}}>
                <div className="container-fluid">
                    <Link href="/">
                        <a className="navbar-brand">
                            <img src="https://unsc.oss-accelerate.aliyuncs.com/ViewCB/Images/logo.PNG" height={60 + "px"} />
                        </a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#footerList" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="footerList">
                        <p>Copyright © 2022 ViewCB. All rights reserved. </p>
                    </div>
                </div>
            </nav>
        </>
    )
}