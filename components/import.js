import Script from "next/script"

export default function JavaScriptList() {
    return (
        <>
            <Script src="https://public.viewcb.net/javascript/count.js" />
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-70RMB2VDTC"></Script>
            <Script src='https://public.viewcb.net/javascript/google.js'></Script>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" />
            <Script src="https://public.viewcb.net/javascript/theme.js" strategy="beforeInteractive" />
            <Script src="https://public.viewcb.net/javascript/echarts.min.js" strategy="beforeInteractive" />
        </>
    )
}