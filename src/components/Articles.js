import React, { Component } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

export default class Articles extends Component {

    render() {

        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={this.props.allState.image} />
                                <Card.Body className={this.props.allState.stock === 1 ? "bg-warning" : this.props.allState.stock === 0 ? "bg-danger" : ""}>
                                    <Card.Title>{this.props.allState.nom}</Card.Title>
                                    <Card.Text>
                                        Prix : {this.props.allState.prix} €
                                        <br/>
                                        Stock : {this.props.allState.stock}
                                    </Card.Text>
                                    <Button className={this.props.allState.stock === 0 ? "d-none" : ""} variant="success" onClick={this.props.fonctionAchat}>Acheter</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
