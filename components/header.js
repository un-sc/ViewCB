import Head from 'next/head';

export default function Header() {
    return (
        <Head>
            <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
            <meta name="renderer" content="webkit" />
            <link rel="icon" href="https://public.viewcb.net/images/V.JPEG" type="image/ico" />
            <link rel="shortcut icon" href="https://public.viewcb.net/images/V.JPEG" type="image/ico" />
            <meta name="author" content="ViewCB" />
            <meta name="robots" content="index,follow" />
            <meta name="google" content="index,follow" />
            <meta name="googlebot" content="index,follow" />
            <meta name="verify" content="index,follow" />
            <link href="https://public.viewcb.net/css/bootstrap.min.css" rel="stylesheet" />
            <link href="https://public.viewcb.net/css/articles.css" rel="stylesheet" />
            <link rel="stylesheet" href="https://public.viewcb.net/css/v1.eicon.main.css" />
        </Head>
    )
}