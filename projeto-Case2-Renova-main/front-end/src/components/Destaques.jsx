import {Row, Col, Card, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

function Destaques() {
    return (
        <Row className='mt-2'>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="https://media.discordapp.net/attachments/1082139465763520594/1082145022775935006/bronz.jpg" />
                    <Card.Body>
                        <Card.Title> Pacote Bronze </Card.Title>
                        <Card.Text>
                        No plano bronze existe uma taxa de R$ 9,99 para o titular. Já para os dependentes há um valor proporcional a ser pago de acordo com a faixa de idade. As tarifas variam entre R$ 6,99 e R$ 47,90. Nessa modalidade, as famílias daqueles que estiverem cobertos contarão com: urna varão sem visor, remoção do corpo, ornamentação, véu mortuário, liberação do corpo junto a hospitais ou IML, 1 coroa de flores, aluguel de capela para velório e aluguel de sepultura rasa.                        </Card.Text>
                        <LinkContainer to="/">
                            <Button variant="warning">Conheça mais</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="https://media.discordapp.net/attachments/1082139465763520594/1082144759738535986/PRATA.jpg" />
                    <Card.Body>
                        <Card.Title>Pacote Prata</Card.Title>
                        <Card.Text>
                        Plano Prata: Para o plano prata é cobrada uma taxa mensal de R$ 10,99 para o titular. No caso dos dependentes há uma variação, que vai de até R$ 7,99 até R$ 50,65, que varia de acordo com a idade. Estão inclusos no plano: urna varão com visor, remoção do corpo, ornamentação, véu mortuário, liberação do corpo junto a hospitais ou IML, 1 coroa de flores, aluguel de capela para velório e aluguel de sepultura rasa,  translado de corpo e despachante 24 horas.

                        </Card.Text>
                        <LinkContainer to="/funcionalidades">
                            <Button variant="warning">Conheça mais</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="https://media.discordapp.net/attachments/1082139465763520594/1082144759457513523/ouro.jpg" />
                    <Card.Body>
                        <Card.Title>Pacote Ouro</Card.Title>
                        <Card.Text>
                        O plano ouro já é considerado mais luxuoso que os anteriores. As taxas a serem pagas são de R$ 18,99 para o titular e uma tarifa que varia entre R$ 13,99 e R$ 62,99 para cada dependente. As famílias de falecidos que tiverem cobertura do plano ouro terão o amparo de: urna varão com visor luxo, remoção do corpo, ornamentação, véu mortuário, liberação do corpo junto a hospitais ou IML, 1 coroa de flores, aluguel de capela para velório, aluguel de sepultura gaveta.
                         </Card.Text>
                        <LinkContainer to="/contato">
                        <Button variant="warning">Entre em contato</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>                        
        </Row>
    );
}

export default Destaques;