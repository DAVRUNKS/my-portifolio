import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // Import Autoplay and Pagination modules
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import profilePic5 from "../../img/profile5.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Gloria, a business lady, requested a website to showcase her business to clients.",
    },
    {
      img: profilePic2,
      review:
        "Jerry, wanted a chat app. for his group to enable easy communication without being tracked.",
    },
    {
      img: profilePic3,
      review:
        "Scovia, the owner of a boutique, got an idea to create a website for her business.",
    },
    {
      img: profilePic4,
      review:
        "Garry, the owner of a night club, got an idea to create a website for his business.",
    },
    {
      img: profilePic5,
      review:
        "Golberg, got an idea to create a website for his business.",
    },
  ];

  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <span> Clients always receive </span>
        <span> Exceptional Work </span>
        <span> from me... </span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div
          className="blur t-blur2"
          style={{ background: "skyblue" }}
        ></div>
      </div>

      {/* Slider */}
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        grabCursor={true}
        autoplay={{ delay: 1000, disableOnInteraction: false }} // Autoplay every second
        speed={800} // Smooth transition speed
        loop={true} // Loop through the slides
        modules={[Autoplay, Pagination]} // Use Autoplay and Pagination modules
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial">
              <img src={client.img} alt={`Client ${index + 1}`} />
              <span>{client.review}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
