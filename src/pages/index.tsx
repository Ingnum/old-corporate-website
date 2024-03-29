import Head from 'next/head'
import Link from 'next/link'

import Header from '../components/header'
import Footer from '../components/footer'
import Services from '../components/services/services'
import ServicesItem from '../components/services/servicesItem'
import Team from '../components/team/team'
import TeamItem from '../components/team/teamItem'
import FAQ from '../components/faq/faq'
import FAQItem from '../components/faq/faqItem'

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
                  <li><i className="ri-check-double-line" /> ホスティング事業</li>
                  <li><i className="ri-check-double-line" /> 受託開発事業</li>
                  {/*<li><i className="ri-check-double-line" /> コンサルティング事業</li>*/}
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

        {/* Section: Team */}
        <Team>
          <TeamItem
            image="/images/team/liam.png"
            name="Liam Flamel"
            role="Owner / Chief Developer"
            social={
              <>
                <Link href="https://twitter.com/LiamFlamel" target="_blank" rel="noreferrer"><i className="bi bi-twitter" /></Link>
                <Link href="https://github.com/LiamFlamel" target="_blank" rel="noreferrer"><i className="bi bi-github" /></Link>
              </>
            }
          />
          <TeamItem
            image="/images/team/minidon.png"
            name="みにどん"
            role="Platform Developer"
            social={
              <>
                <Link href="https://www.youtube.com/@M1n1don" target="_blank" rel="noreferrer"><i className="bi bi-youtube" /></Link>
                <Link href="https://twitter.com/M1n1don" target="_blank" rel="noreferrer"><i className="bi bi-twitter" /></Link>
                <Link href="https://github.com/M1n1don" target="_blank" rel="noreferrer"><i className="bi bi-github" /></Link>
                <Link href="https://twitch.tv/M1n1don" target="_blank" rel="noreferrer"><i className="bi bi-twitch" /></Link>
              </>
            }
          />
        </Team>

        {/* Section: F.A.Q */}
        <FAQ>
          <FAQItem
            question="学生割引とはなんですか？"
            answer={
              <span>
                イングナムネットワークスが運営するサービスであれば、どこでも使える割引です。<br />
                また、対象は満22歳以下の社会人ではない者と定めています。<br />
                ※サービスによって割引率は異なります。
              </span>
            }
          />
        </FAQ>

        {/* Section: Contact */}
        <section id="contact" className="contact section-bg">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>お問い合わせ</h2>
              <p>お問い合わせ</p>
            </div>

            <div className="row">

              <div className="col-lg-6">

                <div className="row">
                  <div className="col-md-12">
                    <div className="info-box">
                      <i className="bx bx-map"></i>
                      <h3>所在地</h3>
                      <p>日本 静岡県 某所</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-box mt-4">
                      <i className="bx bx-envelope"></i>
                      <h3>メールアドレス</h3>
                      <p>contact@ingnum.net<br /><br /></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-box mt-4">
                      <i className="bx bx-phone-call"></i>
                      <h3>電話番号</h3>
                      <p>非公開<br /><br /></p>
                    </div>
                  </div>
                </div>

              </div>

              <div className="col-lg-6">
                <form action="#" method="post" role="form" className="php-email-form">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input type="text" name="name" className="form-control" id="name" placeholder="お名前" required />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input type="email" className="form-control" name="email" id="email" placeholder="メールアドレス" required />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="題名" required />
                  </div>
                  <div className="form-group mt-3">
                    <textarea className="form-control" name="message" rows={5} placeholder="内容" required></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div className="text-center">
                    <button type="submit">送信機能は実装されていません。</button>
                  </div>
                </form>
              </div>

            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
