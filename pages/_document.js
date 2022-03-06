import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html className='scroll-smooth'>
            <Head>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2622884275844647"
                    crossOrigin="anonymous"></script>
                <script async custom-element="amp-auto-ads"
                    src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js">
                </script>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Mukta&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Spline+Sans&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap" rel="stylesheet" />
            </Head>
            <body className='bg-[#36393F]'>
                <amp-auto-ads type="adsense"
                    data-ad-client="ca-pub-2622884275844647">
                </amp-auto-ads>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}