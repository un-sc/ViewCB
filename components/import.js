import Script from "next/script"
import dayjs from 'dayjs'

export default function JavaScriptList() {
    return (
        <>
            <Script src="https://hm.baidu.com/hm.js?520c23c3a7d21572e006e4e509a158cf" strategy="beforeInteractive" />
            <Script src="https://public.viewcb.net/javascript/count.js" />
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-70RMB2VDTC"></Script>
            <Script src='https://public.viewcb.net/javascript/google.js'></Script>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" />
            {/* <Script src="https://public.viewcb.net/javascript/dayjs.min.js" /> */}
            {/* <Script src="https://public.viewcb.net/javascript/customParseFormat.js" /> */}
            <Script src="https://public.viewcb.net/javascript/echarts.min.js" strategy="beforeInteractive" />
            <Script
                id="themeScript"
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
            <Script
                id="cumulativeRunning"
                onReady={() => {
                    const cumulative = dayjs(dayjs(new Date())).diff('2022-07-13', 'day')
                    let str = cumulative.toString()
                    let getElm = document.getElementById("time")
                    console.log(str)
                    getElm.innerText = `本站已累计运行：${str} 天`
                }}
            />
        </>
    )
}