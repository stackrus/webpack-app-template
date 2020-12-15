import React, {Component} from "react";
import {Container, Carousel, Row, Col, Button} from "react-bootstrap";
import styled from 'styled-components';
import {ArrowLeftCircle, ArrowRightCircle, SuitHeart} from 'react-bootstrap-icons';

import photo1 from '../../public/img/1.jpg'
import photo2 from '../../public/img/2.jpg'
import photo3 from '../../public/img/4.jpg'
import photo4 from '../../public/img/5.jpg'

const photoMas = [photo1, photo2, photo3, photo4] // массив фотокарточек пользователей

// const CustomButton = styled(Button)`
//     display: inline-block:
//     background-color: 'purple';
//     border-radius: 50%;
//     width: 20%;
// `;

class DatingCarousel extends Component {
    constructor(props) {
        super();
        this.state = {
            activeIndex: 0,
            photoMasLength: ''
        };

        this.handleSelect = this.handleSelect.bind(this)
        this.nextPage = this.nextPage.bind(this)
        this.prevPage = this.prevPage.bind(this)
    }

    componentDidMount() {
        this.setState({photoMasLength: photoMas.length})
    }

    handleSelect(selectedIndex, e) {
        this.setState({activeIndex: selectedIndex})
        console.log("id фотокарточки:", this.state.activeIndex);
    };

    nextPage() {
        // console.log(this.state.photoMasLength)
        this.state.activeIndex < this.state.photoMasLength - 1 ? this.setState({activeIndex: this.state.activeIndex + 1}) : ''
    }

    prevPage() {
        this.state.activeIndex > 0 ? this.setState({activeIndex: this.state.activeIndex - 1}) : ''
    }

    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col><h1>Выбирай свою жертву</h1></Col>
                        <Col><h1>Тут еще один заголовок</h1></Col>
                    </Row>

                    <Row>
                        <Col>
                            <Carousel activeIndex={this.state.activeIndex} onSelect={this.handleSelect} interval={null}>
                                {photoMas.map((logo, index) => (
                                    <Carousel.Item key={index}>
                                        <img
                                            className={"d-block w-100"}
                                            src={logo}
                                        />
                                        <Carousel.Caption>
                                            <h3>Имя Челикса</h3>
                                            <p>Краткое описание профиля.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </Col>
                    </Row>

                    <Row className={"mt-3"} align={"center"}>
                        <Col><Button variant={"danger"} onClick={this.prevPage}> <ArrowLeftCircle/> </Button></Col>
                        <Col><Button variant={"info"}> <SuitHeart/> </Button></Col>
                        <Col><Button variant={"success"} onClick={this.nextPage}> <ArrowRightCircle/> </Button></Col>
                    </Row>

                </Container>
            </>
        );
    }
}

export default DatingCarousel;
