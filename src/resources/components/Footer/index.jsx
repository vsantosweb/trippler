import React from 'react';
import css from './Footer.module.scss';
import { Container, Row, Col } from 'react-grid-system';

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.footerWrapper}>
        <Container fluid>
          <Row>
            <Col md={4}>
              <Container fluid>
                <Row>
                  <Col md={4}>
                    <nav>
                      <h3>Conheça</h3>
                      <ul>
                        <li>Nav1</li>
                        <li>Nav1</li>

                        <li>Nav1</li>

                        <li>Nav1</li>

                      </ul>
                    </nav>
                  </Col>
                  <Col md={4}>2</Col>
                  <Col md={4}>3</Col>
                </Row>
              </Container>
            </Col>
            <Col md={4}>part 2</Col>
            <Col md={4}>part 3</Col>
          </Row>
        </Container>
      </div>
    </footer>
  )
}

