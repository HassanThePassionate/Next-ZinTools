import Image from "next/image";
const CPDF = ({ searchValue }) => {
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
  ];

  const filteredCards = searchValue ? filterCards(cards) : cards;
  return (
    <>
      <section className="converter">
        <div className="container">
          <h1 className="lg">Convert to PDF</h1>
          <div className="cards">
            {filteredCards.length > 0 ? (
              filteredCards.map((card, index) => (
                <div className="card" key={index}>
                  <Image
                    src={card.img}
                    alt="img"
                    width={"65"}
                    height={"65"}
                  ></Image>
                  <h3>{card.title}</h3>
                  <p>{card.des}</p>
                </div>
              ))
            ) : (
              <div className="no-results">
                <p>Nothing found</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default CPDF;
