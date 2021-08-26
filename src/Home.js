// import { useState } from 'react'

// const Home = () => {
//     const [movies, setMovies] = useState([
//         {
//           title: "John Wick",
//           duration: "1h 41min",
//           date: "2014",
//           rate: 4,
//           genre: "Action,Crime,Thriller",
//           description: "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
//           img: "https://i.egycdn.com/pic/WmFwZndlY21UWWp2TnBqRWNtYm1MTnBUcHZtbQ.jpg",
//         },
//         {
//           title: "John Wick 2",
//           duration: "2h 2min",
//           date: "2017",
//           rate: 2,
//           genre: "Action,Crime,Thriller",
//           description: "After returning to the criminal underworld to repay a debt, John Wick discovers that a large bounty has been put on his life.",
//           img: "https://i.egycdn.com/pic/WmFwZndlY21ZRW1Fdk5qbWptRUVjY3dhbUVtbW1wSWFL.jpg",
//         },
//         {
//           title: "John Wick 3",
//           duration: "2h 10min",
//           date: "2019",
//           rate: 1,
//           genre: "Action,Crime,Thriller",
//           description: "John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
//           img: "https://i.egycdn.com/pic/WmFwZndlY21MY212bWptdm1FbWFjbUdrTkVtb3dQbWc.jpg",
//         },
//       ]);
//     return (
//         <div>
//             {movies.map((el) => (
//                 <link to="Home">
//                     {" "}
//                 <div>{el.title}</div>
//                 </link>
                
//             )
//             )}
            
//         </div>
//     )
// }

// export default Home

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

