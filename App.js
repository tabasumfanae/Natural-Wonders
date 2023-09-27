import waterfallImage from "./assets/images/waterfall.png";
import auroraBorealisImage from "./assets/images/aurora-borealis.png";
import canyonImage from "./assets/images/canyon.png";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Container from "./components/Container";
const destinations = [
  {
    title: "Majestic Waterfall",
    image: waterfallImage,
    description:
      "Embark on a journey to witness the breathtaking sight of a majestic waterfall. Feel the mist on your skin and hear the thundering roar of cascading water as you immerse yourself in the wonder of nature's power and beauty.",
  },
  {
    title: "Aurora Borealis",
    image: auroraBorealisImage,
    description:
      "Explore the enchanting dance of the Northern Lights, the Aurora Borealis. Under the night sky, witness a mesmerizing display of vivid colors illuminating the darkness, creating a celestial spectacle like no other.",
  },
  {
    title: "Vast Canyon Landscape",
    image: canyonImage,
    description:
      "Venture into the heart of a vast canyon landscape, where rugged cliffs and winding rivers paint a masterpiece of geological wonder. Marvel at the eons of natural forces shaping the landscape into a breathtaking symphony of rock and sky.",
  },
];

function App() {
  return (
    <div className="app">
      <Header
        img={destinations[0].image}
        title={destinations[0].title}
        description={destinations[0].description}
      ></Header>

      <container className="destinations-container">
        {destinations.map((destination) => (
          <Cards
            img={destination.image}
            title={destination.title}
            description={destination.description}
          ></Cards>
        ))}
      </container>
    </div>
  );
}

export default App;
