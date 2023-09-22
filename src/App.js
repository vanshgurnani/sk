import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from '../src/component/me';
import Main from '../src/component/main';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/about' element={<About />}/>
        <Route exact path='' element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;























// // import logo from './logo.svg';
// import { BrowserRouter as Router, Routes, Route,Switch, IndexRoute, Link } from "react-router-dom";
// // import './App.css';
// import login from '../src/component/login';

// function App(){
//   return (
//     <>
//       <Router>
//         <Routes>
//         <Route exact path='/login' component={<login />} />
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;

