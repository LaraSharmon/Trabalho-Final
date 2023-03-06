import Carousel from 'react-bootstrap/Carousel'

function Banners() {
    return (
        <Carousel variant="dark" className='conteudo-margin'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://media.discordapp.net/attachments/1082127630360399934/1082137030374465546/SLIDE_1.jpg?width=958&height=192"
                        alt="Slide incrível"
                    />
                    <Carousel.Caption>
                        <h5></h5>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://media.discordapp.net/attachments/1082127630360399934/1082139634932392027/LIDERES.jpg?width=958&height=192"
                        alt="Outro slide incrível"
                    />
                    <Carousel.Caption>
                        <h5></h5>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://media.discordapp.net/attachments/1082127630360399934/1082138989030551573/CREMACAO_SOCIAL.jpg?width=958&height=192"
                        alt="Último slide"
                    />
                    <Carousel.Caption>
                        <h5></h5>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    )
}

export default Banners