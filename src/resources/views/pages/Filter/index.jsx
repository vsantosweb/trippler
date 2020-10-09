import React from "react";
import SiteLayout from "../../layouts/SiteLayout";
import { Col, Row, Container } from "react-grid-system";
import css from "./Filter.module.scss";

import CardEvent from "../../../components/Cards/CardEvent/CardEvent";


function Filter() {
  const getFeaturesTrip = (list) => {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map((el, key) => {
      const { name } = el;
      return (
        <Col md={4}>
          <CardEvent key={key} title={'Parque Áquatico viva parque em Juquitiba'} image={'https://i.picsum.photos/id/' + Math.floor(Math.random() * 500) + '/500/350.jpg'} />
        </Col>
      )
    });
  }
  return (
    <SiteLayout>
      {/* <div className={css.mainWrapper}>
        <div className={`${css.containerWrapper} ${css.sectionBlock}`}>

          <Container fluid>
            <Row>
              <Col md={12}>
                <Breadcrumb>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>
                    <a href="">Application Center</a>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    <a href="">Application List</a>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>An Application</Breadcrumb.Item>
                </Breadcrumb>
              </Col>
              <Col lg={3}>
                <aside className={css.filterFormContent}>
                  <h2> Trips </h2>
                  <Form layout={'vertical'}>
                    <Container fluid>
                      <Row>
                        <Col md={12}>
                          <Form.Item label="Destino" name="destin" className={css.label}>
                            <Input />
                          </Form.Item>
                        </Col>

                        <Col md={12}>
                          <Form.Item name="range-picker" label="RangePicker">
                            <RangePicker />
                          </Form.Item>
                        </Col>

                        <Col md={12}>
                          <Form.Item label="RangePicker">
                            <Checkbox checked={'checkNick'}>
                              Feriados (50)
                            </Checkbox>
                          </Form.Item>
                          <Form.Item >
                            <Checkbox checked={'checkNick'}>
                              Bate & Volta (150)
                            </Checkbox>
                          </Form.Item>
                          <Form.Item >
                            <Checkbox checked={'checkNick'}>
                              Férias (15)
                            </Checkbox>
                          </Form.Item>
                        </Col>
                      </Row>

                    </Container>
                  </Form>
                </aside>
              </Col>
              <Col lg={9}>
                <Container fluid>
                  <Row>
                    {getFeaturesTrip()}
                  </Row>
                </Container>

              </Col>
            </Row>
          </Container>
        </div>
      </div> */}
    </SiteLayout>
  );
}

export default Filter;
