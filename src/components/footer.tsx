import Link from 'next/link'

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-md-6">
              <div className="footer-info">
                <iframe src="https://discord.com/widget?id=1049303803180101712&theme=dark" width="100%" height="400" allowTransparency={true} frameBorder={0} sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>サイトリンク</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <Link href="#top">トップ</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link href="#about">概要</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link href="#services">サービス</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link href="#faq">FAQ</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link href="#contact">お問い合わせ</Link></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>サービス</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <Link href="https://www.ingnum.host/">サーバーホスティング事業</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link href="#">受託開発事業</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link href="#">コンサルティング事業</Link></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>CSR</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <Link href="#">サイトポリシー</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link href="#">プライバシーポリシー</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link href="#">情報セキュリティ基本方針</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
        Copyright &copy; 2023 Ingnum Networks. All Rights Reserved
        </div>
      </div>
    </footer> 
  )
}
