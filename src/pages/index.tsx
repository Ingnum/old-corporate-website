import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'
import Services from '../components/services/services'
import ServicesItem from '../components/services/servicesItem'

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

      <main className="main">
        {/* Section: About */}
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>概要</h2>
              <p>イングナムネットワークスとは</p>
            </div>

            <div className="row content">
              <div className="col-lg-6">
                <p>イングナムネットワークスは、2022年12月に発足されたサービスです。ITに興味を持つ学生を支援することを目的に、インターネットに関する事業を行っています。</p>
                <p>サーバーホスティング事業を中心とし、様々な事業を展開しています。<br />また、当サービスは個人事業主が運営しています。</p>
                <ul>
                  <li><i className="ri-check-double-line"></i> ホスティング事業</li>
                  <li><i className="ri-check-double-line"></i> 受託開発事業</li>
                  <li><i className="ri-check-double-line"></i> コンサルティング事業</li>
                </ul>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0">
                <a className="twitter-timeline" href="https://twitter.com/IngnumNet?ref_src=twsrc%5Etfw">Tweets by IngnumNet</a> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8" />
              </div>
            </div>

          </div>
        </section>

        {/* Section: CTA */}
        <section id="cta" className="cta">
          <div className="container" data-aos="zoom-in">
            <div className="text-center">
              <h3>Discordに参加する</h3>
              <p>Discordサーバーに参加すると、イングナムネットワークスの情報をいち早く受け取ることができます。<br />また、Twitterでは公開していないような事前情報なども知ることができます。</p>
              <a className="cta-btn" href="https://dc.ingnum.net/" target="_blank" rel="noreferrer">ここをクリック</a>
            </div>
          </div>
        </section>

        {/* Section: Services */}
        <Services>
          <ServicesItem
            icon="bx bx-server"
            title="Ingnum Hosting"
            content="ゲームサーバーやVPSなどのサーバーホスティングを行っています。また、学生割引も用意しています。"
            url="https://www.ingnum.host/"
          />
          <ServicesItem
            icon="bx bx-math"
            title="Ingnum Technology"
            content="MinecraftプラグインからWebサイトまで多種多様なシステムやアプリを受託開発しています。"
            url="https://www.ingnum.tech/"
          />
          {/*<ServicesItem
            icon="bx bx-buildings"
            title="Ingnum Consulting"
            content="Minecraftサーバーなど、主に学生が運営するインターネット事業のコンサルティングを行っています。"
            url="https://www.ingnum./"
          />*/}
        </Services>
      </main>

      <Footer />
    </>
  )
}
