export default function ServicesItem(props: any) {
  return (
    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0 mt-lg-0" data-aos="zoom-in" data-aos-delay="100">
      <div className="icon-box">
        <div className="icon"><i className={ props.icon } /></div>
        <h4><a href={ props.url }>{ props.title }</a></h4>
        <p>{ props.content }</p>
      </div>
    </div>
  )
}