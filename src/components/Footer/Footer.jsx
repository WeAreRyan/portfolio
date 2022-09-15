import "./Footer.css"
import { BsGithub, BsLinkedin, BsGoogle, BsArrowRightSquareFill } from 'react-icons/bs';

// import {
//   MDBFooter,
//   MDBContainer,
//   MDBCol,
//   MDBRow,
//   MDBIcon,
//   MDBBtn
// } from 'mdb-react-ui-kit';



export default function Footer() {
  return (
<>
    <div className="fixed-bottom footer">
    <div className="footer-bar"></div>
    <div className="footer-icons">
      <span className="footer-arrow"><BsArrowRightSquareFill /></span>
      <a className="github" href="https://github.com/WeAreRyan" target="_blanke">
    <span className="footer-icon" href="https://github.com/WeAreRyan" target="_blank"><BsGithub /></span>
    </a>
      <a className="linkedIn" href="https://www.linkedin.com/in/ryan-okamoto-9a8b19222/" target="_blanke">
    <span className="footer-icon" href="www.google.com" target="_blank"><BsLinkedin /></span>
    </a>
      <a className="gmail" href="https://github.com/WeAreRyan" target="_blanke">
    <span className="footer-icon" href="mailto:okamoto.ryan.dev@gmail.com" target="_blank"><BsGoogle /></span>
    </a>
      <span className="copyright">© 2022 Copyright: Ryan Okamoto</span>

    </div>

    </div>
    </>
//     <Navbar expand="lg" variant="dark" bg="dark" className="fixed-bottom footer silkscreen">
//     <Navbar.Brand href="/home">Ryan Okamoto</Navbar.Brand>
//     <Nav className="me-auto">
//       <Nav.Link href="/projects">Projects</Nav.Link>
//       <Nav.Link href="/work">Work</Nav.Link>
//       <Nav.Link href="/about">About</Nav.Link>
//       {/* <Nav.Link onClick={aboutToggle}>{!showAbout ? "About" : "Hide about"}</Nav.Link> */}
//     </Nav>
// </Navbar>










//     <div className="container">
//     <div className="row">
//     <MDBFooter className='bg-dark text-center text-white fixed-bottom'>
//       <MDBContainer>
//         <section className='m-4'>




//           <MDBBtn outline color="light" floating className='m-2' href="mailto:okamoto.ryan.dev@gmail.com">
//           <i class="bi bi-envelope"></i>
//           </MDBBtn>
//           <MDBBtn outline color="light" floating className='m-1' href='https://github.com/WeAreRyan' target="_blank">
//           <i class="bi bi-github"></i>
//           </MDBBtn>

//           <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/in/ryan-okamoto-9a8b19222/' target="_blank" role='button'>
//           <i class="bi bi-linkedin"></i>
//           </MDBBtn>
//         </section>
//       </MDBContainer>

//       <div className='text-center p-2 w-100' style={{ backgroundColor: 'black' }}>
//         © 2022 Copyright
//       </div>
//     </MDBFooter>
//         </div>
//         </div>


  );
}