import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Tools from "../Components/Tools";
function Skills(){
    return (
        <Container>
            <Col>
                <h2 className="text-white section_title pb-4 text-center">Skills</h2>
            </Col>
            <Row>
                <Col>
                   <Tools/>
                </Col>
            </Row>
        </Container>
    )
}

export default Skills
