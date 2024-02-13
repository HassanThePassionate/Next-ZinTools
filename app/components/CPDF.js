import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css"; // Import Swiper styles

const CPDF = ({ searchValue }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(5);

  const filterCards = (cards) => {
    return cards.filter((card) =>
      card.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  const cards = [
    {
      title: "Word to PDF",
      img: "https://images.hipdf.com/images2022/icons/word-pdf.svg",
      des: "The best Word to PDF converter online.",
    },
    {
      title: "PPT to PDF",
      img: "https://images.hipdf.com/images2022/icons/PPT-PDF.svg",
      des: "Convert Powerpoint to PDF online.",
    },
    {
      title: "Excel to PDF",
      img: "https://images.hipdf.com/images2022/icons/Excel-PDF.svg",
      des: "Easily Convert Excel spreadsheet to PDF",
    },
    {
      title: "JPG to PDF",
      img: "https://images.hipdf.com/images2022/icons/jpg-pdf.svg",
      des: "Convert JPG,PNG,BPM, GIF,and TIFF images to PDF",
    },
    {
      title: "TXT to PDF ",
      img: "https://images.hipdf.com/images2022/icons/Image-in-TXT.svg",
      des: "Convert TXT to PDF online for free.",
    },
    {
      title: "Word to PDF",
      img: "https://images.hipdf.com/images2022/icons/word-pdf.svg",
      des: "The best Word to PDF converter online.",
    },
    {
      title: "PPT to PDF",
      img: "https://images.hipdf.com/images2022/icons/PPT-PDF.svg",
      des: "Convert Powerpoint to PDF online.",
    },
    {
      title: "Excel to PDF",
      img: "https://images.hipdf.com/images2022/icons/Excel-PDF.svg",
      des: "Easily Convert Excel spreadsheet to PDF",
    },
    {
      title: "JPG to PDF",
      img: "https://images.hipdf.com/images2022/icons/jpg-pdf.svg",
      des: "Convert JPG,PNG,BPM, GIF,and TIFF images to PDF",
    },
    {
      title: "TXT to PDF ",
      img: "https://images.hipdf.com/images2022/icons/Image-in-TXT.svg",
      des: "Convert TXT to PDF online for free.",
    },
  ];

  const filteredCards = searchValue ? filterCards(cards) : cards;

  const goNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 992) {
        setSlidesPerView(3);
      } else if (window.innerWidth < 1200) {
        setSlidesPerView(4);
      } else {
        setSlidesPerView(5);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="converter">
      <div className="container">
        <h1 className="lg">Convert to PDF</h1>
        <div className="other">
          <div className="swipers-button-prev" onClick={goPrev}>
            <i className="fa-solid fa-arrow-left by"></i>
          </div>
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={30}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            className="mySwiper"
          >
            <div className="cards">
              {filteredCards.length > 0 ? (
                filteredCards.map((card, index) => (
                  <SwiperSlide key={index}>
                    <div className="card">
                      <img src={card.img} alt="img" width="65" height="65" />
                      <h3>{card.title}</h3>
                      <p>{card.des}</p>
                    </div>
                  </SwiperSlide>
                ))
              ) : (
                <div className="no-results">
                  <p>Nothing found</p>
                </div>
              )}
            </div>
          </Swiper>
          <div className="swipers-button-next" onClick={goNext}>
            <i className="fa-solid fa-arrow-right by-1"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CPDF;
