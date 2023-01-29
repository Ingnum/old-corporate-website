import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        {/* Information */}
        <meta name="description" content="サーバーホスティングを主軸とし、様々なインターネットに関する事業を行っています。" />
        <meta name="keywords" content="Ingnum, Server, Hosting, Minecraft, Game, イングナム, ホスティング, レンタル, サーバー, マイクラ, マインクラフト" />
        <meta name="reply-to" content="contact@ingnum.net" />
        
        {/* Settings */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" type="image/ico" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
