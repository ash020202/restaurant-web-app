import About from "../About/About";
import EmblaCarousel from "../components/EmblaCarousel";

const Home = () => {
  const slides = [
    {
      imageUrl: "https://picsum.photos/600/350?v=1",
      text: "Slide 1 Text",
    },
    {
      imageUrl: "https://picsum.photos/600/350?v=2",
      text: "Slide 2 Text",
    },
    {
      imageUrl: "https://picsum.photos/600/350?v=3",
      text: "Slide 3 Text",
    },
  ];

  return (
    <>
      <EmblaCarousel slides={slides} />
      <About />
    </>
  );
};

export default Home;
