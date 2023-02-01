import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

export default function Home() {
  return (
    <>
      <Head>
        {/* Information */}
        <title>Ingnum Networks</title>

        {/* Settings */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      {/* Section: Top */}
      <section id="top">
        <div id="topCarousel" data-bs-interval="5000" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <ol className="carousel-indicators" id="top-carousel-indicators" />
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active" style={{ 'backgroundImage': 'url(/images/slide/slide-1.jpg)'}} >
              <div className="carousel-container">
                <div className="container">
                  <h2 className="animate__animated animate__fadeInDown"><span>イングナム</span>へようこそ！</h2>
                  <p className="animate__animated animate__fadeInUp">サーバーホスティング事業を中心とし、様々な事業を展開しています。</p>
                  <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">詳細を見る</a>
                </div>
              </div>
            </div>
          </div>

          <a className="carousel-control-prev" href="#topCarousel" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true" />
          </a>

          <a className="carousel-control-next" href="#topCarousel" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true" />
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
