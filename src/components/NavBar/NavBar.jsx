import "./NavBar.css"
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";

export default function NavBar({ user, setUser, aboutToggle, showAbout }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    setUser(null);
  }
  return (
    <>




    {/* <div className="container fixed-top silkscreen"> */}

      <Navbar expand="lg" variant="dark" bg="dark" className="nbpadding silkscreen">
          <Navbar.Brand href="/home">Ryan Okamoto</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/work">Work</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            {/* <Nav.Link onClick={aboutToggle}>{!showAbout ? "About" : "Hide about"}</Nav.Link> */}
          </Nav>
      </Navbar>

    {/* </div> */}
    </>
  );
}












// !!!! DEFAULT NAVBAR !!!!!
//   return (
//     <nav>
//       <span>Welcome, {user.name}</span>
//       &nbsp; | &nbsp;
//       <Link to="" onClick={handleLogOut}>
//         Log Out
//       </Link>
//     </nav>
//   );
// }
