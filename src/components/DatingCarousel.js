import React, {Component} from "react";
import {Container, Carousel} from "react-bootstrap";
import logo1 from '../../public/img/1.jpg'
import logo2 from '../../public/img/2.jpg'
import logo3 from '../../public/img/3.jpg'
import logo4 from '../../public/img/4.jpg'
import logo5 from '../../public/img/5.jpg'
// import {React} from 'react-router-dom'
const mas = [logo1, logo2, logo3, logo4, logo5]

class DatingCarousel extends Component {
    constructor(props) {
        super();

    }

    render() {
        console.log(this.props.iconsMas)
        return (
            <>
                <Container>
                    <h1>Выбирай свою жертву</h1>
                    <Carousel>
                    {mas.map(logo => (
                        <Carousel.Item>
                            <img
                                className={"d-block w-100"}
                                src={logo}
                            />
                        </Carousel.Item>
                    ))}
                    </Carousel>
                </Container>
            </>
        );
    }
}

export default DatingCarousel;
