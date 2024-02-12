import Image from "next/image";
const Bookmark = ({ searchValue }) => {
  const filterCards = (cards) => {
    return cards.filter((card) =>
      card.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  // Your card data
  const cards = [
    {
      title: "Edit PDF",
      img: "https://images.hipdf.com/images2022/icons/editPDF.svg",
      des: "Use the best online tool to edit PDFs in your brower.",
    },
    {
      title: "Crop PDF",
      img: "https://images.hipdf.com/images2022/icons/Crop-PDF.svg",
      des: "Crop PDF online to Selected area, adjust margin size...",
    },
    {
      title: "Replace Text",
      img: "https://images.hipdf.com/images2022/icons/replace-text-pdf.svg",
      des: "The easiest way to replace text online.",
    },
    {
      title: "Rotate PDF",
      img: "https://images.hipdf.com/images2022/icons/Rotate-PDF.svg",
      des: "Rotate and Save your PDF page online for file.",
    },
  ];

  const filteredCards = searchValue ? filterCards(cards) : cards;
  return (
    <>
      <section className="bookmarks">
        <div className="container">
          <h1 className="lg">Your Bookmarks</h1>
          <div className="cards">
            {filteredCards.map((card, index) => (
              <div className="card" key={index}>
                <i class="fa-regular fa-bookmark book"></i>
                <Image
                  src={card.img}
                  alt="img"
                  width={"65"}
                  height={"65"}
                ></Image>
                <h3>{card.title}</h3>
                <p>{card.des}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Bookmark;
