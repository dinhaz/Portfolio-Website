import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { navButton } from "../data/index";

const FooterComponent = () => {
    return (
        <div className="footer text-light">
            <Container>
                <Row className="d-block d-lg-flex">
                    <Col className="mb-4 mb-lg-0">
                        <h2 className="fw-bold">Dinhaz.Portfolio</h2>
                        <p>Thank you; you are willing to visit my portfolio website. I'm waiting for good news soon.</p>
                        <div className="gap-2 d-flex  mt-4">
                            {navButton.map((btn) => {
                                return (
                                    <div key={btn.id}>
                                        <Button variant={btn.variant} size={btn.size} to={btn.path}>
                                            {btn.text}
                                        </Button>
                                    </div>
                                );
                            })}
                        </div>
                    </Col>
                    <Col className="menu d-flex flex-column col-lg-2 col gap-1 mb-4 mb-lg-0">
                        <h4>Menu</h4>
                        <Row className="d-block d-lg-flex g-3 g-lg-1 mt-1 mt-lg-0">
                            <Link to="" className="text-decoration-none">
                                Introduction
                            </Link>
                            <Link to="" className="text-decoration-none">
                                Project
                            </Link>
                            <Link to="" className="text-decoration-none">
                                FAQ
                            </Link>
                            <Link to="" className="text-decoration-none">
                                Skills
                            </Link>
                        </Row>
                    </Col>
                    <Col className="socmed text-lg-center">
                        <Row>
                            <h4>Follow me :</h4>
                        </Row>
                        <Row className="d-block g-2 mt-2">
                            <Col className="d-flex w-100 justify-content-lg-center">
                                <button to="" className="btn btn-light w-50 px-3 d-flex gap-3 justify-content-center  btn-sm">
                                    <i className="fa-brands fa-instagram fs-5"> </i>
                                    <p className="my-auto fw-bold">Instagram</p>
                                </button>
                            </Col>
                            <Col className="d-flex w-100 justify-content-lg-center">
                                <button to="" className="btn btn-light w-50 px-3 d-flex gap-3 justify-content-center  btn-sm">
                                    <i className="fa-brands fa-linkedin fs-5"> </i>
                                    <p className="my-auto fw-bold">Linked.in</p>
                                </button>
                            </Col>
                            <Col className="d-flex w-100 justify-content-lg-center">
                                <button to="" className="btn btn-light w-50 px-3 d-flex gap-3 justify-content-center  btn-sm">
                                    <i className="fa-brands fa-facebook fs-5"> </i>
                                    <p className="my-auto fw-bold">Facebook</p>
                                </button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FooterComponent;
