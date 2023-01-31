import Link from 'next/link'

export default function Header() {
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="logo"><Link href="#">Ingnum</Link></h1>
        <nav id="navbar" className="navbar">
          <ul>
            <li><Link href="#top" className="nav-link scrollto active">トップ</Link></li>
            <li><Link href="#about" className="nav-link scrollto">概要</Link></li>
            <li><Link href="#services" className="nav-link scrollto">サービス</Link></li>
            <li><Link href="#faq" className="nav-link scrollto">FAQ</Link></li>
            <li className="dropdown">
              <Link href="#"><span>SNS</span> <i className="bi bi-chevron-down"></i></Link>
              <ul>
                <li><Link href="https://yt.ingnum.net/" target="_blank" rel="noreferrer">YouTube</Link></li>
                <li><Link href="https://twtr.ingnum.net/" target="_blank" rel="noreferrer">Twitter</Link></li>
                <li><Link href="https://dc.ingnum.net/" target="_blank" rel="noreferrer">Discord</Link></li>
                <li><Link href="https://gh.ingnum.net/" target="_blank" rel="noreferrer">GitHub</Link></li>
              </ul>
            </li>
            <li><Link href="https://blog.ingnum.net/" className="getstarted scrollto">ブログへ</Link></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  )
}
