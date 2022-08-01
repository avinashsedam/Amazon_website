// import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div >
      <header>
        <div className="a_header_top p-1" >
          <button className='btn h-100' style={{ 'width': '10%' }}>
            <img className='img-fluid ' src="./images/header/logo1.jpg" />
          </button>
          <button className='lh-1 text-white fs-6 btn h-100' style={{ 'width': '10%' }}>
            Hello <br />
            <span className='fw-bold'>Select your address</span>
          </button>
          <form className='bg-white w-50 h-75 d-inline-block'></form>
          <button className='btn h-100' style={{ 'width': '6%' }}>D</button>
          <button className='lh-1 text-white btn h-100' style={{ 'width': '10%' }}>Hello,signin  <span><b>Accounts and list</b></span></button>
          <button className='lh-1 text-white btn h-100' style={{ 'width': '8%' }}>Return <span>& Orders </span></button>
          <button className='btn h-100' style={{ 'width': '6%' }}>G</button>
        </div>
        <div className=" a_header_bottom">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">All</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Best seller</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Electronics</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Fashion</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Mobiles</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Customer service</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Prime</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">New releases</a>
            </li>
          </ul>

        </div>

      </header>
      <div className='a_main position-relative'>

        <div className='a_main1 a_main_top' >
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div className="carousel-item active">
                <img src="./images/slider/img1.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="./images/slider/img2.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="./images/slider/img3.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="./images/slider/img4.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="./images/slider/img5.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="./images/slider/img6.jpg" className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev h-50" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next h-50 " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        {/* a_main div closed */}

        <div className='w-100 position-absolute a_main_bottom '>
          <div className='a_main_bottom_1 row m-0 mb-3'>
            <div className='col'>A</div>
            <div className='col'>B</div>
            <div className='col'>C</div>
            <div className='col'>D</div>
          </div>
          <div className='a_main_bottom_2 row m-0 mb-3'>
            <div className='col-6'>A</div>
            <div className='col-3'>B</div>
            <div className='col-3'>C</div>
          </div>

          <div className='a_main_bottom_3'>
            <div className=''>
              <h3 className='float-start'>Today's deals </h3> <button type="button" class="float-start btn btn-link">See all the deals</button>
            </div>
            <div id="carouselExampleControls2" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner text-center">
                <div className="carousel-item active">
                  <div className='imgCont row m-0' >
                    <div className='col'>1</div>
                    <div className='col'>2</div>
                    <div className='col'>3</div>
                    <div className='col'>4</div>
                    <div className='col'>5</div>
                    <div className='col'>6</div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className='imgCont row m-0'>
                    <div className='col'>7</div>
                    <div className='col'>8</div>
                    <div className='col'>9</div>
                    <div className='col'>10</div>
                    <div className='col'>11</div>
                    <div className='col'>12</div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className='imgCont row m-0'>
                    <div className='col'>13</div>
                    <div className='col'>14</div>
                    <div className='col'>15</div>
                    <div className='col'>16</div>
                    <div className='col'>17</div>
                    <div className='col'>18</div>
                  </div>
                </div>
              </div>
              <button className="a_cc carousel-control-prev " type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="a_cc carousel-control-next  " type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

      </div>
      <footer> </footer>
    </div>
  );
}

export default App;
