import React, {Component} from "react";
import {Container, Carousel} from "react-bootstrap";
import photo1 from '../../public/img/1.jpg'
import photo2 from '../../public/img/2.jpg'
// import logo3 from '../../public/img/3.jpg'
import photo3 from '../../public/img/4.jpg'
import photo4 from '../../public/img/5.jpg'
// import {React} from 'react-router-dom'
const photoMas = [photo1, photo2, photo3, photo4]

class DatingCarousel extends Component {
    constructor(props) {
        super();
        this.state = {
            activeIndex: 0
        };

        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSelect (selectedIndex, e){
        this.setState({activeIndex: selectedIndex})
        console.log(this.state.activeIndex);
    };

    render() {
        return (
            <>
                <Container>
                    <h1>Выбирай свою жертву</h1>
                    <Carousel activeIndex={this.state.activeIndex} onSelect={this.handleSelect}>
                    {photoMas.map((logo, index) => (
                        <Carousel.Item key={index}>
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
