import Carousel from 'react-bootstrap/Carousel'

function HomeSlider() {
    return(
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://placehold.co/800x200"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://placehold.co/800x200"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://placehold.co/800x200"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default HomeSlider