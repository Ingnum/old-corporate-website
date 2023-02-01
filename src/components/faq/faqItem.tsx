export default function FAQItem(props: any) {
  return (
    <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
      <div className="col-lg-5">
        <i className="bx bx-help-circle"></i>
        <h4>{ props.question }</h4>
      </div>
      <div className="col-lg-7">
        <p>{ props.answer }</p>
      </div>
    </div>
  )
}