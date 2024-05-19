import React from "react";
import { Card, CardBody, CardText, CardFooter, CardTitle } from 'react-bootstrap';
import './Reviews.css';
import Person1 from '../utils/img/person1.jpg';
import Person2 from '../utils/img/person2.jpg';
import Person3 from '../utils/img/person3.jpg';
import Person4 from '../utils/img/person4.jpg';

export function Reviews() {
    return (
        <div className="reviews-section container">
            <h2 className="text-center mb-5 text-uppercase fw-bold fs-1">Reseñas</h2>
            <div className="row g-4">
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                ¡Una experiencia increíble!, me hizo sentir como si estuviera de vuelta en mi querido Ecuador. Probé el encebollado y fue simplemente espectacular, 
                                con un sabor auténtico y una presentación impecable. Además, el ambiente es muy acogedor y el personal muy amable. Sin duda, regresaré pronto.
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Person1} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                            <CardTitle className="text-success">John Mike</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                Este restaurante es un verdadero tesoro en la ciudad. La diversidad del menú es impresionante y cada plato que probé estaba lleno de sabor y frescura. Mi favorito fue el ceviche de camarón, 
                                que tenía el equilibrio perfecto de acidez y frescura. Además, los chefs claramente conocen y aman lo que hacen. ¡Altamente recomendado!
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Person2} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                            <CardTitle className="text-success">Maria Cruz</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                La Mesa de Todos se ha convertido en mi lugar favorito para disfrutar de la cocina ecuatoriana. El seco de chivo es simplemente perfecto, con la carne tierna y jugosa y 
                                una mezcla de especias que me transportó directamente a los Andes. El servicio es excepcional, siempre atentos y amables. Un lugar que no te puedes perder
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Person3} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                            <CardTitle className="text-success">Anna Gold</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                ¡La fritada de La Mesa de Todos es la mejor que he probado fuera de Ecuador! La carne estaba perfectamente dorada y jugosa, y los acompañamientos eran frescos y deliciosos. Me encantó la mezcla de sabores y texturas, 
                                realmente me transportó de vuelta a los días festivos en mi país. Sin duda, un lugar que visitaré con frecuencia.
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Person4} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                            <CardTitle className="text-success">Nick Burn</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}