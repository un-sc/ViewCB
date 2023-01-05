import Script from "next/script"

export default function JavaScriptList() {
    return (
        <>
            <Script src="https://unsc.oss-accelerate.aliyuncs.com/ViewCB/JavaScript/count.js" />
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-70RMB2VDTC"></Script>
            <Script src='https://viewcb.oss-cn-beijing.aliyuncs.com/JavaScript/google.js'></Script>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" />
            <Script src="https://unsc.oss-accelerate.aliyuncs.com/ViewCB/JavaScript/theme.js"/>
        </>
    )
}