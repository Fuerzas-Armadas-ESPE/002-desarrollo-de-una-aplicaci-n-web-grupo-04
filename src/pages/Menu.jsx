import React from 'react';
import './Menu.css';
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap';
import BreakfastImg from '../utils/img/breakfast.jpg';
import LunchImg from '../utils/img/lunch.jpg';
import DinnerImg from '../utils/img/dinner.jpg';
import DessertImg from '../utils/img/dessert.jpg';

const breakfast = [
    {
        id: 1,
        name: 'Desayuno Costeño',
        description: 'Tigrillo, Bistec de Carne, Huevo, Jugo y Café',
        price: '$8'
    },
    {
        id: 2,
        name: 'Desayuno Continental',
        description: 'Café, chocolate o té, huevos, sanduche(jamón y queso), jugo',
        price: '$5'
    },
    {
        id: 3,
        name: 'Desayuno Americano',
        description: 'huevos revueltos, tocino, pan, salchicha, cafe, jugo',
        price: '$6'
    }
];
const lunch = [
    {
        id: 1,
        name: 'Bandeja de Fritada (2 Personas)',
        description: 'porcion de fritada, tortilla de papa, maiz tostado, ensalada',
        price: '$15'
    },
    {
        id: 2,
        name: 'Mix de Mariscos',
        description: 'camarones apanados, cangrejo, arroz marinero, filete de pescado apanado, patacones',
        price: '$13'
    },
    {
        id: 3,
        name: 'Encebollado',
        description: 'sopa de pescado, yuca, cebolla morada encurtida, limón, maíz tostado',
        price: '$7'
    },
    {
        id: 4,
        name: 'Llapingachos',
        description: 'tortillas de papa rellenas de queso, chorizo, huevo frito, ensalada de remolacha, aguacate',
        price: '$8'
    },
    {
        id: 5,
        name: 'Seco de Chivo',
        description: 'guiso de carne de chivo, arroz, plátano maduro frito, aguacate, ensalada',
        price: '$8'
    },
    {
        id: 6,
        name: 'Ceviche de Camarón',
        description: 'camarones marinados en limón, cebolla, tomate, cilantro, acompañado de maíz tostado y chifles',
        price: '$98'
    }
    
];

const dinner = [
    {
        id: 1,
        name: 'Jugo de Coco',
        description: 'Jarra de Jugo de Coco (2 litros)',
        price: '$8'
    },
    {
        id: 2,
        name: 'Limonada',
        description: 'Jarra de Limonada (2 litros)',
        price: '$6'
    },
    {
        id: 3,
        name: 'Chicha',
        description: 'Jarra de Chicha (2 litros)',
        price: '$7'
    }
];

const dessert = [
    {
        id: 1,
        name: 'Pristiños con Miel',
        description: '4 unidades de pristiños con miel',
        price: '$5'
    },
    {
        id: 2,
        name: 'Higos con Queso',
        description: 'Deliciosos Higos con queso de hoja',
        price: '$4'
    },
    {
        id: 3,
        name: 'Flan de Coco',
        description: 'Porcion de Flan de Coco',
        price: '$5'
    }
];

function Menu() {
    return (
        <div className='menu-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>Menú</h1>
                </div>
            </header>

            <div className='breakfast my-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Desayunos</h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={BreakfastImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {breakfast.map((breakfast) => (
                                <div key={breakfast.id}>
                                    <Card className='border-0'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {breakfast.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {breakfast.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {breakfast.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='lunch bg-dark text-light py-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Platos Fuertes</h2>
                    <div className='row'>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {lunch.map((lunch) => (
                                <div key={lunch.id}>
                                    <Card className='border-0 bg-dark text-light'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {lunch.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {lunch.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {lunch.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={LunchImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='dinner my-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Bebidas</h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={DinnerImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {dinner.map((dinner) => (
                                <div key={dinner.id}>
                                    <Card className='border-0'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {dinner.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {dinner.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {dinner.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='dessert bg-dark text-light py-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Postres</h2>
                    <div className='row'>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {dessert.map((dessert) => (
                                <div key={dessert.id}>
                                    <Card className='border-0 bg-dark text-light'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {dessert.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {dessert.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {dessert.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={DessertImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;