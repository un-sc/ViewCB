import Link from 'next/link';
import Script from "next/script"

const switchTheme = (e) => {
    let clickedClass = "clicked";
    if (e.target.classList == "eicon eiconsunstroke") {
        e.target.classList.remove("eiconsunstroke");
        e.target.classList.add("eiconmoonstroke");
        e.target.classList.add(clickedClass);
        // <Script
        //     id="show-banner"
        //     dangerouslySetInnerHTML={{
        //         __html: `localStorage.setItem("theme", "dark");`,
        //     }}
        // />
    } else if (e.target.classList == "eicon eiconmoonstroke clicked") {
        e.target.classList.remove(clickedClass);
        e.target.classList.remove("eiconmoonstroke");
        e.target.classList.add("eiconsunstroke");
        // <Script
        //     id="show-banner"
        //     dangerouslySetInnerHTML={{
        //         __html: `localStorage.setItem("theme", "light");`,
        //     }}
        // />
    }
};

export default function Navbar() {
    return (
        <nav className="navbar sticky-top navbar-expand-lg" style={{ backgroundColor: "rgb(112.520718,44.062154,249.437846)" }}>

            <div className="container-fluid">
                <Link href="/">
                    <a className="navbar-brand">
                        <img src="https://public.viewcb.net/images/viewcb-logo-light.png" height={60 + "px"} />
                    </a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link active" aria-current="page" style={{ color: "white" }}>
                                    <span className="eicon eiconhome" />
                                    <b>首页</b>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/commands">
                                <a className="nav-link active" aria-current="page" style={{ color: "white" }}>
                                    <span className="eicon eiconconsole" />
                                    <b>命令详解</b>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about">
                                <a className="nav-link active" aria-current="page" style={{ color: "white" }}>
                                    <span className="eicon eiconinfo2" />
                                    <b>关于</b>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contribute">
                                <a className="nav-link active" aria-current="page" style={{ color: "white" }}>
                                    <span className="eicon eiconpencil" />
                                    <b>贡献</b>
                                </a>
                            </Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                </div>
                {/* <span className="navbar-text">
                    <span id='themebtn' onClick={function (e) { switchTheme(e) }} type="button" style={{ fontSize: "xx-large", marginRight: 10 }} className="eicon eiconsunstroke" />
                </span> */}
            </div>
        </nav>
    )
}