import { Fragment } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid]);
const Testimonials = () => {
  const props = {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".owl-dots",
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2, spaceBetween: 25 },
    },
  };
  return (
    <Fragment>
      <div className="title">
        <h3>Testimonials.</h3>
      </div>
      <Swiper {...props}>
        <SwiperSlide className="testimonial-01 media">
          <div className="avatar">
            <img src="static/img/team-1.jpg" title="" alt="" />
          </div>
          <div className="media-body">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the {`industry's`} standard dummy
              text ever since the 1500s.
            </p>
            <h6>Jennifer Lutheran</h6>
            <span>CEO at pxdraft</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-01 media">
          <div className="avatar">
            <img src="static/img/team-2.jpg" title="" alt="" />
          </div>
          <div className="media-body">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the {`industry's`} standard dummy
              text ever since the 1500s.
            </p>
            <h6>Jennifer Lutheran</h6>
            <span>CEO at pxdraft</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-01 media">
          <div className="avatar">
            <img src="static/img/team-3.jpg" title="" alt="" />
          </div>
          <div className="media-body">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the {`industry's`} standard dummy
              text ever since the 1500s.
            </p>
            <h6>Jennifer Lutheran</h6>
            <span>CEO at pxdraft</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-01 media">
          <div className="avatar">
            <img src="static/img/team-1.jpg" title="" alt="" />
          </div>
          <div className="media-body">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the {`industry's`} standard dummy
              text ever since the 1500s.
            </p>
            <h6>Jennifer Lutheran</h6>
            <span>CEO at pxdraft</span>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="owl-dots"></div>
    </Fragment>
  );
};
export default Testimonials;
