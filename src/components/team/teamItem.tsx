import Image from 'next/image'

export default function TeamItem(props: any) {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6" data-wow-delay="0.1s">
      <div className="member" data-aos="zoom-in" data-aos-delay="100">
        <Image src={ props.image } className="img-fluid" alt="" width={306} height={306} />
        <div className="member-info">
          <div className="member-info-content">
            <h4>{ props.name }</h4>
            <span>{ props.role }</span>
          </div>
          <div className="social">
            { props.social }
          </div>
        </div>
      </div>
    </div>
  )
}