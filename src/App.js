
import './Main.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import image1 from './assets/home/img1.png';
import image2 from './assets/home/img2.jpg';
import image3 from './assets/home/img3.jpg';
import image4 from './assets/home/facebook.svg';
// import image1 from './assets/home/img1.png';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3" style={{ backgroundColor: "white" }}>
            <nav className="navbar navbar-light bg-light mb-5">
                    
                    <ul className="navbar-nav">
                    <img src={image4} height='150px' width='50px' className="navbar-brand"></img>
                      <li className="nav-item"><a href="#" className="nav-link">Navigatiom</a></li>
                      <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                      <li className="nav-item"><a href="#" className="nav-link">Services</a></li>
                      <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                      <li className="nav-item"><a href="#" className="nav-link">Blog</a></li>
                      <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
                    </ul>
                  </nav>
          </div>

          <div className="col-md-9" style={{ backgroundColor: "white" }}>
            <div className="contaianer-fluid">
              <div className="row">
                <div className="col">
                  <nav className="navbar navbar-expand-md navbar-light bg-light">
                    <ul className="navbar-nav">
                      <li className="nav-item"><a href="#" className="nav-link">Selected work</a></li>
                      <li className="nav-item"><a href="#" className="nav-link">branding</a></li>
                      <li className="nav-item"><a href="#" className="nav-link">digital experience</a></li>
                      <li className="nav-item"><a href="#" className="nav-link">graphics design</a></li>
                      <li className="nav-item"><a href="#" className="nav-link">custom printing</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col">
                  <img src={image2} height='300px' width='280px'></img> <label>Designed associated with creativity and grapgics</label></div>
                <div className="col"><img src={image2} height='300px' width='280px'></img><label>Branding is associated with creativity and graphics</label></div>
                <div className="col"><img src={image2} height='300px' width='280px'></img><label>Natural is associated with creativity and graphics</label></div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12"><p>Get in touch</p></div>
              <div className="col">
                <img src={image4} height='150px' width='50px'></img>
                <img src={image4} height='150px' width='50px'></img>
                <img src={image4} height='150px' width='50px'></img>
                <img src={image4} height='150px' width='50px'></img>
              </div>
            </div>
          </div>
        </div>


      </div>

    </div>
  );
}

export default App;
