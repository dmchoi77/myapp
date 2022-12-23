import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <script
                        type='text/javascript'
                        src='https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=kgqolejkfh&submodules=geocoder'
                        defer
                    ></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
