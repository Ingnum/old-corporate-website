import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function Services({ children }: Props) {
  return (
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>サービス</h2>
          <p>提供中のサービス</p>
        </div>
        <div className="row">{ children }</div>
      </div>
    </section>
  )
}