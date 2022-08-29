import "./App.css";
import Card from "./components/Card";
import TopSection from "./components/TopSection";
import travelData from "./Data";
function App() {
  const cardData = travelData.map((each) => {
    return <Card key={each.id} item={each} />;
  });

  return (
    <div className="App">
      <TopSection />
      {cardData}
      <div className="footer">
        Created by Satish...❤️ <span className="footer-span">with React</span>
      </div>
    </div>
  );
}

export default App;
/*
========================================
import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"


export default function App() {
            // <Hero />
    return (
        <div>
            <Navbar />
            <Card 
                img="katie-zaferes.png"
                rating="5.0"
                reviewCount={6}
                location="USA"
                title="Life Lessons with Katie Zaferes"
                price={136}
            />
        </div>
    )
}
                      (or)
-------------------------------------------------
export default function App() {
            // <Hero />
    const cards = data.map(item => {
        return (
            <Card 
                key={item.id}
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
            />
        )
    })        
    
    return (
        <div>
            <Navbar />
            {cards}
        </div>
    )
}

-------------------------------------------------
{props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>} ====conditional rendering

                                    or

let badgeText
  if (props.openSpots === 0) {
      badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
      badgeText = "ONLINE"
  }

{badgeText && <div className="card--badge">{badgeText}</div>}

-------------------------------------------------
export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item} or {...item}
            />
        )
    })        
    
            // <Hero />
    return (
        <div>
            <Navbar />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}
-------------------------------------------------

export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${props.item.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}

                                    or
-------------------------------------------------
import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img src={`../images/${props.img}`} className="card--image" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

========================================
export default function App() {
  const colors = [
          <h3>Red</h3>, 
          <h3>Orange</h3>, 
          <h3>Yellow</h3>,
          <h3>Green</h3>,
          <h3>Blue</h3>,
          <h3>Indigo</h3>,
          <h3>Violet</h3>
      ]
  return (
      <div>
          {colors}
      </div>
  )
}

output: Red
        Orange
        Yellow
        Green
        Blue
        Indigo
        Violet
========================================
export default [
    {
        setup: "I got my daughter a fridge for her birthday.",
        punchline: "I can't wait to see her face light up when she opens it."
    },
    {
        setup: "How did the hacker escape the police?",
        punchline: "He just ransomware!"
    },
    {
        setup: "Why don't pirates travel on mountain roads?",
        punchline: "Scurvy."
    },
    {
        setup: "Why do bees stay in the hive in the winter?",
        punchline: "Swarm."
    },
    {
        setup: "What's the best thing about Switzerland?",
        punchline: "I don't know, but the flag is a big plus!"
    }
]

-------------------------------------------------
import React from "react"
import Joke from "./Joke"
import jokesData from "./jokesData"

export default function App() {
    const jokeElements = jokesData.map(each => {
        return <Joke setup={each.setup} punchline={each.punchline} />
    })
    return (
        <div>
            {jokeElements}
        </div>
    )
}
-------------------------------------------------
import React from "react"
export default function Joke(props) {
    return (
        <div>
            {props.setup && <h3>Setup: {props.setup}</h3>} ==== conditional rendering
            <p>Punchline: {props.punchline}</p>
            <hr />
        </div>
    )
}
========================================

*/