import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Ncvtc from "../assets/projects/ncvtc.png";
import Arammilk from "../assets/projects/arammilk.png";
import Einstroacadamy from "../assets/projects/einstroacadamy.png";
import Indriya from "../assets/projects/indriya.png";
import Freshma from "../assets/projects/freshma.png";
import Tealagro from "../assets/projects/tealagro.png";
import { GoArrowUpRight } from "react-icons/go";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const Tools = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div>
      <Carousel responsive={responsive} className="skill_icon">
        <Card className="me-3">
          <Card.Img
            variant="top"
            src={Ncvtc}
            loading="lazy"
            className="project_image"
            alt="Ncvtc"
            width="414"
            height="400"
          />
          <Card.Body>
            <section className="d-flex text-white justify-content-center project_name">
              <h3><Link to="https://ncvtc.org" target="_blank" aria-label="Ncvtc" tabIndex="-1">NCVTC <GoArrowUpRight/></Link></h3>
            </section>
            <Card.Text className="text-grey text-center">
             <span className="badge bg-green">Laravel</span> 
             <span className="badge bg-orange"> Jquery</span>  
             <span className="badge bg-violet"> Bootstrap</span> 
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="me-3">
          <Card.Img
            variant="top"
            src={Arammilk}
            loading="lazy"
            className="project_image"
            alt="Arammilk"
             width="414"
            height="400"
          />
          <Card.Body>
            <section className="d-flex text-white justify-content-center project_name">
              <h3><Link to="https://arammilk.com" aria-label="Arammilk" target="_blank" tabIndex="-1">Arammilk <GoArrowUpRight/></Link></h3> 
            </section>
            <Card.Text className="text-grey text-center">
              <span className="badge bg-green">Laravel-Passport REST-API</span> 
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="me-3">
          <Card.Img
            variant="top"
            src={Einstroacadamy}
            loading="lazy"
            className="project_image"
            alt="Einstroacadamy"
            width="414"
            height="400"
          />
          <Card.Body>
            <section className="d-flex text-white justify-content-center project_name">
              <h3><Link to="https://einstroacademy.com" aria-label="Einstroacademy" target="_blank" tabIndex="-1">Einstroacadamy <GoArrowUpRight /></Link></h3> 
            </section>
            <Card.Text className="text-grey text-center">
              <span className="badge bg-green">Laravel</span> 
              <span className="badge bg-orange"> Jquery</span>  
              <span className="badge bg-violet"> Bootstrap</span> 
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="me-3">
          <Card.Img
            variant="top"
            src={Indriya}
            loading="lazy"
            className="project_image"
            alt="Indriya"
            width="414"
            height="400"
          />
          <Card.Body>
            <section className="d-flex text-white justify-content-center project_name">
            <h3><Link to="https://indriya.ngo" target="_blank" aria-label="Indriya" tabIndex="-1">Indriya <GoArrowUpRight/></Link></h3>
            </section>
            <Card.Text className="text-grey text-center">
              <span className="badge bg-green">Laravel</span> 
              <span className="badge bg-orange"> Jquery</span>  
              <span className="badge bg-violet"> Bootstrap</span> 
              <span className="badge bg-blue"> Livewire</span>  
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="me-3">
          <Card.Img
            variant="top"
            src={Freshma}
            loading="lazy"
            className="project_image"
            alt="Freshma"
            width="414"
            height="400"
          />
          <Card.Body>
            <section className="d-flex text-white justify-content-center project_name">
            <h3><Link to="https://freshma.in" target="_blank" aria-label="Freshma" tabIndex="-1">Freshma <GoArrowUpRight/></Link></h3>
            </section>
            <Card.Text className="text-grey text-center">
              <span className="badge bg-green">Laravel</span> 
              <span className="badge bg-violet"> Jquery</span>  
              <span className="badge bg-orange"> Bootstrap</span> 
              <span className="badge bg-violet"> GoogleMap API</span>  
              <span className="badge bg-blue"> Livewire</span>  
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="me-3">
          <Card.Img
            variant="top"
            src={Tealagro}
            loading="lazy"
            className="project_image"
            alt="Tealagro"
             width="414"
            height="400"
          />
          <Card.Body>
            <section className="d-flex text-white justify-content-center project_name">
              <h3><Link to="https://tealagro.com" aria-label="Tealagro" target="_blank" tabIndex="-1">Tealagro <GoArrowUpRight/></Link></h3> 
            </section>
            <Card.Text className="text-grey text-center">
              <span className="badge bg-green">Livewire</span> 
              <span className="badge bg-orange"> Razorpay</span>  
              <span className="badge bg-violet"> Jquery</span>  
            </Card.Text>
          </Card.Body>
        </Card>
      </Carousel>
    </div>
    // </div>
  );
};

export default Tools;
