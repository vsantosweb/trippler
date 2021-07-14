import React from 'react';
import css from './Footer.module.scss';
import { Container, Row, Col } from 'react-grid-system';

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.footerWrapper}>
        <Container fluid>
          <Row>
            <Col md={12}>Copyright {new Date().getFullYear()} Tripler</Col>
          </Row>
        </Container>
      </div>
    </footer>
  )
}

