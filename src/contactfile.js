import { Row, Col, Container, Card } from "react-bootstrap";
import { SiGooglemaps } from "react-icons/si";
import { TiTickOutline } from "react-icons/ti";
import { IoCopyOutline } from "react-icons/io5";
import { useState } from "react";

function ContactUs() {
    const [clickMail,setClickMail]=useState("1");

    const clickCopy=()=>{
        setClickMail(0);
        navigator.clipboard.writeText("vigneshsaravanan0026@gmail.com")
    }
    return (
        <Container>
        <Col>
            <h2 className="text-white section_title pb-4 text-center">
            Contact Me
            </h2>
            <p className="text-white text-center pb-4">
            If you have any inquiries or feedback, please don't hesitate to get in
            touch with us. You can contact us directly or complete the form below.
            </p>
        </Col>
        <Row className="contact_form_section mx-md-auto gy-4 gx-5">
            <Col md={4} sm={12}>
            <Card className="contact_box">
                <Card.Body className="py-3 px-4">
                    <div className="text-white py-3 fs-16"><SiGooglemaps className="me-3"/> India | Bangalore, KA</div>
                    <div className="text-white py-3 fs-16 cursor-pointer" onClick={clickCopy}>
                        {clickMail ? <IoCopyOutline className="me-3"/>: <TiTickOutline/>} vigneshsaravanan0026@gmail.com</div>
                </Card.Body>
            </Card>
            </Col>
            <Col md={6} sm={12} className="mt-sm-3 ps-lg-5">
                <iframe title="Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124399.24256597874!2d77.64308064415955!3d13.005310607321237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11abc8ffe3e7%3A0xd8368746c98e53bf!2sKrishnarajapura%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1713622410019!5m2!1sen!2sin" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </Col>
        </Row>
        </Container>
    )
}

export default ContactUs
