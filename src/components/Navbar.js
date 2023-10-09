import React, { Component } from 'react'
// import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
// import logo from "../Images/navbarLogo2.png"
export class Navbar extends Component {
    render() {
    return (

            <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand text-light" to="/"><b>NewsRooz</b>
                {/* <img src={logo} alt="logo" /> */}
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav text-light">
                    <li className="nav-item active ">
                    <Link className="nav-link active text-light" to="/business">Business</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-light" to="/entertainment">Entertainment</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-light" to="/sport">Sport</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-light" to="/health">Health</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-light" to="/science">Science</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-light" to="/technology">Technology</Link>
                    </li>
                    
                    </ul>
                </div>
            </div>
            </nav>
            </div>

        
    )
}
}
export default Navbar
// import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import { NavLink ,Router} from "react-router-dom";

// export class Navbar extends Component {
//   render() {
//     return (
//     //     <Router>
//     //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
//     //     <div className="container-fluid">
//     //       <NavLink className="navbar-brand" to="#">
//     //         {/* <img src={logo} alt="logo" /> */}
//     //       </NavLink>
//     //       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     //         <span className="navbar-toggler-icon"></span>
//     //       </button>
//     //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//     //         <ul className="navbar-nav ml-400">
//     //           <li className="nav-item active">
//     //             <NavLink className="nav-link" to="/">Home<span className="sr-only">(current)</span></NavLink>
//     //           </li>
//     //           <li className="nav-item">
//     //             <NavLink className="nav-link" to="/entertainment">Entertainment</NavLink>
//     //           </li>
//     //           <li className="nav-item">
//     //             <NavLink className="nav-link" to="/sport">Sport</NavLink>
//     //           </li>
//     //           <li className="nav-item">
//     //             <NavLink className="nav-link" to="/health">Health</NavLink>
//     //           </li>
//     //           <li className="nav-item">
//     //             <NavLink className="nav-link" to="/signup">Registration</NavLink>
//     //           </li>
//     //         </ul>
//     //       </div>
//     //     </div>
//     //   </nav>
//     //   </Router>
//     <div>Navbar</div>
//     );
//   }
// }

// // export default Navbar;
// import React, {Component}from 'react';
// import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

// export class Navbar extends Component {
//         render() {
       
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <NavLink to="/">Home</NavLink>
//             </li>
//             <li>
//               <NavLink to="/technology">Technology</NavLink>
//             </li>
//             <li>
//               <NavLink to="/entertainment">Entertainment</NavLink>
//             </li>
//             <li>
//               <NavLink to="/health">Health</NavLink>
//             </li>
//             <li>
//               <NavLink to="/sport">Sport</NavLink>
//             </li>
//             <li>
//               <NavLink to="/bus">Business</NavLink>
//             </li>
//             <li>
//               <NavLink to="/about">Science</NavLink>
//             </li>
//             {/* Add more NavLink components as needed */}
//           </ul>
//         </nav>

//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/about" component={About} />
//           {/* Add more Route components as needed */}
//         </Switch>
//       </div>
//     </Router>
//   );
// }
// }
// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// export default Navbar;
