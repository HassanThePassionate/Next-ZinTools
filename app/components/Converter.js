import Image from "next/image";
const Converter = ({ searchValue }) => {
  const filterCards = (cards) => {
    return cards.filter((card) =>
      card.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  const cards = [
    {
      title: "PDF to Word",
      img: "https://images.hipdf.com/images2022/icons/pdf-word.svg",
      des: "Easily Convert PDF to Word document.",
    },
    {
      title: "PDF to PPT",
      img: "https://images.hipdf.com/images2022/icons/PDF-PPT.svg",
      des: "Convert PDF to Powerpoint online.",
    },
    {
      title: "PDF to Excel",
      img: "https://images.hipdf.com/images2022/icons/pdf-excel.svg",
      des: "Convert PDF to Excel for Free.",
    },
    {
      title: "PDF to JPG",
      img: "https://images.hipdf.com/images2022/icons/PDF-JPG.svg",
      des: "Convert PDF files top a set of optimized JPG,PNG,BPM, G...",
    },
    {
      title: "PDF to TXT ",
      img: "https://images.hipdf.com/images2022/icons/PDF-TXT.svg",
      des: "Convert your PDF to TXT, and extract text from your PDF.",
    },
  ];

  const filteredCards = searchValue ? filterCards(cards) : cards;
  return (
    <>
      <section className="converter">
        <div className="container">
          <h1 className="lg">Convert from PDF</h1>

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

export default Converter;
