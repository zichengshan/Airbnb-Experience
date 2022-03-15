import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card"
import dataSets from "./data"

function App() {
    const cards = dataSets.map((dataSet) => {
        return <Card
            key = {dataSet.id}
            img= {dataSet.coverImg}
            rating={dataSet.stats.rating}
            reveiveCount={dataSet.stats.reviewCount}
            country={dataSet.location}
            title={dataSet.title}
            price={dataSet.price}
            openSpots = {dataSet.openSpots}
            />
    })
  return (
    <div className="App">
        <Navbar />
        <Hero/>
        <section className="cards-list">
            {cards}
        </section>
    </div>
  );
}

export default App;
