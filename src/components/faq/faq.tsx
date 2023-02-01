import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function FAQ({ children }: Props) {
  return (
    <section id="faq" className="faq">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>F.A.Q</h2>
          <p>よくあるご質問</p>
        </div>

        { children }
      </div>
    </section>
  )
}