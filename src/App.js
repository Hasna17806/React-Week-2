import logo from './logo.svg';
import './App.css';

//----------------useReducer--------------

// import React, { useReducer} from 'react';
// function reducer (state, action){
// switch(action.type) {
//     case "INCREMENT":
//         return {count : state.count + 1}
//     case "DECREMENT":
//         return{count: state.count -1}
//     default:
//     return state;
// }          
// }
// function Counter(){
//   const [state, dispatch] = useReducer(reduce, {count: 0});

//   return(
//     <div>
//       <P>Count: {state.count}</P>
//       <button onClick={() => dispatch ({type:"INCREMENT"})} >+</button>
//       <button onClick={() => dispatch ({type:"DECREMENT"})} >-</button>

//     </div>
//     );
// }
// export default Counter

//--------------------Axios Syntax-----------------

axios.get("URL")
.then(response => console.log(response.data))
.catch(error => console.error(error));

//-------------------Lazy Load Components-------------------

// import React, { Suspense, lazy } from 'react';
// const About = lazy(() => import("./About"));
// function App (){
//   <div>
//     <h1>Home page</h1>
//     <Suspense fallback = {<p>Loading...</p>}>
// <About />
//     </Suspense>
//   </div>

// }
// export default App;

//-------------1️ HOC that adds extra UI-----------

 //-----------Basic Syntax--------------

// const hocFunction = (OriginalComponent) => {
//   return function NewComponent(props) {
//     // Extra features add 
//     return <OriginalComponent {...props} />;
//   };
// };

//-----------------Added extra UI---------------

// const withExtraUI = (OriginalComponent) => {
//   return function NewComponent(props) {
//     return (
//       <div>
//         <h3> Extra Header from HOC </h3>
//         <OriginalComponent {...props} />
//         <p> Footer: Added by HOC</p>
//       </div>
//     );
//   };
// };

// export default withExtraUI;

//---------------Normal Component---------------

// function Hello({ name }) {
//   return <h2>Hello, {name}!</h2>;
// }

// export default Hello;

//------------Wrap with HOC-----------

// import React from "react";
// import Hello from "./Hello";
// import withExtraUI from "./withExtraUI";

// const HelloWithUI = withExtraUI(Hello);

// function App() {
//   return (
//     <div>
//       <HelloWithUI name="John" />
//     </div>
//   );
// }

// export default App;

//-----------Simple Example: Counter with Local Storage--------------

// import React, { useState, useEffect } from "react";

// function Counter() {
//   // Load saved value or start from 0
//   const [count, setCount] = useState(() => {
//     const savedCount = localStorage.getItem("count");
//     return savedCount ? JSON.parse(savedCount) : 0;
//   });

//   // Save value to localStorage whenever count changes
//   useEffect(() => {
//     localStorage.setItem("count", JSON.stringify(count));
//   }, [count]);

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       <button onClick={() => setCount(0)}>Reset</button>
//     </div>
//   );
// }


// export default Counter;

//---------------------Make It Reusable with a Custom Hook-----------

//We can make a custom hook so we can reuse this logic anywhere.

// import { useState, useEffect } from "react";

// function useLocalStorage(key, initialValue) {
//   const [value, setValue] = useState(() => {
//     const saved = localStorage.getItem(key);
//     return saved ? JSON.parse(saved) : initialValue;
//   });

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(value));
//   }, [key, value]);

//   return [value, setValue];
// }

// export default useLocalStorage;

//--------------------useLocalStorage Custom Hook------------------

// import { useState, useEffect } from "react";

// function useLocalStorage(key, initialValue) {
//   const [value, setValue] = useState(() => {
//     const saved = localStorage.getItem(key);      // Step 1: Check localStorage
//     return saved ? JSON.parse(saved) : initialValue; // Step 2: Use saved value OR initial
//   });

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(value)); // Step 3: Save to localStorage whenever value changes
//   }, [key, value]);

//   return [value, setValue];  // Step 4: Return value + setter like useState
// }

// export default useLocalStorage;

//----------------------useLocalStorage Custom Hook-------------------

// import { useState, useEffect } from "react";

// function useLocalStorage(key, initialValue) {
//   const [value, setValue] = useState(() => {
//     const saved = localStorage.getItem(key);      // Step 1: Check localStorage
//     return saved ? JSON.parse(saved) : initialValue; // Step 2: Use saved value OR initial
//   });

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(value)); // Step 3: Save to localStorage whenever value changes
//   }, [key, value]);

//   return [value, setValue];  // Step 4: Return value + setter like useState
// }

// export default useLocalStorage;

//-----------------------------BrowserRouter, Routes, Route, Link, Navigate--------------------------

//----------------BrowserRouter-----------------------

// import { BrowserRouter } from "react-router-dom";

// <BrowserRouter>
//   {/* Routes here */}
// </BrowserRouter>

//----------------Routes & Route---------------

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

//-----------------------Link-------------------------

// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav>
//       <Link to="/">Home</Link>
//       <Link to="/about">About</Link>
//     </nav>
//   );
// }

//-------------------------Navigate------------------------

// import { Navigate } from "react-router-dom";

// function Protected({ isLoggedIn }) {
//   return isLoggedIn ? <h1>Welcome</h1> : <Navigate to="/" />;
// }

//-------------------------Full Example--------------------

// import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";

// function Home() {
//   return <h2>Home Page</h2>;
// }

// function About() {
//   return <h2>About Page</h2>;
// }

// function App() {
//   const isLoggedIn = false;

//   return (
//     <BrowserRouter>
//       <nav>
//         <Link to="/">Home</Link> | <Link to="/about">About</Link>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={isLoggedIn ? <About /> : <Navigate to="/" />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

