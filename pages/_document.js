import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <script data-ad-client="ca-pub-9042235887207452" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Mukta&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Spline+Sans&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap" rel="stylesheet" />
            </Head>
            <body className='bg-[#162330]'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}