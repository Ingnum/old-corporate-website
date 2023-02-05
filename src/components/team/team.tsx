import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function Team({ children }: Props) {
  return (
    <section id="team" className="team section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>運営</h2>
          <p>運営チーム</p>
        </div>

        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6" />
          { children }
        </div>
      </div>
    </section>
  )
}