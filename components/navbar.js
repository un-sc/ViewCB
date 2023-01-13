import Link from 'next/link';
import Script from "next/script"

const switchTheme = (e) => {
    let clickedClass = "clicked";
    if (e.target.classList == "eicon eiconsunstroke") {
        e.target.classList.remove("eiconsunstroke");
        e.target.classList.add("eiconmoonstroke");
        e.target.classList.add(clickedClass);
    } else if (e.target.classList == "eicon eiconmoonstroke clicked") {
        e.target.classList.remove(clickedClass);
        e.target.classList.remove("eiconmoonstroke");
        e.target.classList.add("eiconsunstroke");
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
                        <li className="nav-item">
                            <li className="nav-item dropdown">
                                <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "white" }}>
                                    <span className="eicon eiconreadmore" />
                                    <b>更多</b>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="https://www.baidu.com/s?wd=ViewCB" target="_blank">百度一下本站</a></li>
                                    <li><a className="dropdown-item" href="https://www.wenjuan.com/s/UZBZJv18XE3/" target="_blank">踢出反馈/建议</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="https://jq.qq.com/?_wv=1027&k=yYM18Myn" target="_blank">加入QQ群</a></li>
                                </ul>
                            </li>
                        </li>
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                </div>
                <span className="navbar-text">
                    <span id='themebtn' onClick={function (e) { switchTheme(e) }} type="button" style={{ fontSize: "xx-large", marginRight: 10 }} className="eicon eiconsunstroke" />
                    <Script
                        id="show-banner"
                        onReady={() => {
                            var sw = document.body;
                            var bt = document.getElementById('themebtn')
                            //window.onload = function () {
                            let getLocalFirst = localStorage.hasOwnProperty("theme")
                            let get = localStorage["theme"]
                            if (getLocalFirst == false) {
                                sw.setAttribute("data-bs-theme", "light")
                                sw.removeAttribute('arco-theme');
                                localStorage.theme = "light";
                                console.log("无法读取本地主题数据，您可能是第一次浏览本网站，自动为您切换本地网站主题为：明亮模式")
                            } else {
                                if (get == "light") {
                                    sw.setAttribute("data-bs-theme", "light")
                                    sw.removeAttribute('arco-theme');
                                    console.log("读取到本地网站主题数据为：明亮模式")
                                } else if (get == "dark") {
                                    bt.className = "eicon eiconmoonstroke clicked"
                                    sw.setAttribute("data-bs-theme", "dark")
                                    sw.setAttribute('arco-theme', 'dark');
                                    console.log("读取到本地网站主题数据为：暗黑模式")
                                }
                            }
                            var options = {
                                attributes: true,//观察node对象的属性
                                attributeFilter: ['class']//只观察class属性
                            }
                            var mb = new MutationObserver(function (mutationRecord, observer) {
                                let read = mutationRecord[0].target.className
                                console.log(read)
                                setTimeout(() => {
                                    if (read == "eicon eiconsunstroke") {
                                        sw.setAttribute("data-bs-theme", "light")
                                        sw.removeAttribute('arco-theme');
                                        localStorage.theme = "light";
                                        console.log("切换明亮模式")
                                    } else if (read == "eicon eiconmoonstroke clicked") {
                                        sw.setAttribute("data-bs-theme", "dark")
                                        sw.setAttribute('arco-theme', 'dark');
                                        localStorage.theme = "dark";
                                        console.log("切换暗黑模式")
                                    }
                                }, 100);
                            })
                            mb.observe(bt, options)
                            //}
                        }}
                        dangerouslySetInnerHTML={{
                            __html: ``,
                        }}
                    />
                </span>
            </div>
        </nav>
    )
}