import { Container, Row, Col, Accordion } from "react-bootstrap";
import { faq } from "../data/index";

const FaqComponent = () => {
    return (
        <div className="faq min-vh-100">
            <Container>
                <Row>
                    <Col>
                        <h1 className="fw-bold text-center">FAQ?</h1>
                        <p className="text-center lead">Frequently Asked Questions.</p>
                    </Col>
                </Row>
                <Row className="row-cols-lg-2 row-cols-1 g-4">
                    {faq.map((data) => {
                        return (
                            <Col key={data.id}>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>{data.title}</Accordion.Header>
                                        <Accordion.Body>{data.desc}</Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
};

export default FaqComponent;
