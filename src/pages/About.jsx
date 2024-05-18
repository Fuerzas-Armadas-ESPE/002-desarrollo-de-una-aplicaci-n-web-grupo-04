import React from 'react';
import './About.css';
import AboutChef1 from '../utils/img/about-chef1.jpg';
import AboutChef2 from '../utils/img/about-chef2.jpg';
import Ingrediente1 from '../utils/img/about-ingrediente1.jpg';
import Ingrediente2 from '../utils/img/about-ingredientes2.png';
import { ImageGallery } from '../components/ImageGallery';
import { Reviews } from '../components/Reviews';

function About() {
    return (
        <div className='about-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>Sobre Nosotros</h1>
                </div>
            </header>

            <div className='container my-5'>
                <p>En La Mesa de Todos, nos enorgullecemos de ser un bastión de la cocina ecuatoriana auténtica, donde cada plato es un tributo a nuestras raíces y tradiciones. Nuestra misión es llevarte en un viaje gastronómico a través de las distintas regiones de Ecuador, utilizando ingredientes frescos y locales que resaltan la diversidad de nuestros paisajes y culturas.</p>
                
                <h2>Nuestros Chefs</h2>
                <p>Nuestros chefs son verdaderos artistas culinarios, apasionados por la gastronomía ecuatoriana. Con años de experiencia y una dedicación inquebrantable a la calidad, han perfeccionado sus habilidades para brindarte los sabores más auténticos y exquisitos. Entre ellos se encuentran destacados maestros de la cocina tradicional, 
                    quienes han aprendido y preservado recetas ancestrales, así como innovadores jóvenes chefs que aportan un toque moderno a nuestros platos.</p>
                <div className='row'>
                    <div className='col-lg-6'>
                        <img src={AboutChef1} className='img-fluid my-4' alt="" />
                    </div>
                    <div className='col-lg-6'>
                        <img src={AboutChef2} className='img-fluid my-4' alt="" />
                    </div>
                </div>
                <h2>Ingredientes de la Sierra y la Costa</h2>
                <p>La Mesa de Todos se distingue por el uso de ingredientes frescos provenientes de la sierra y la costa ecuatoriana. Desde el maíz y las papas cultivadas en los fértiles campos andinos hasta los mariscos y pescados frescos del Pacífico, cada componente de nuestros platos es seleccionado cuidadosamente para asegurar su calidad y sabor. 
                    Nos esforzamos por trabajar con proveedores locales, apoyando así a la comunidad y promoviendo la sostenibilidad.</p>

                    <div className='row'>
                    <div className='col-lg-6'>
                        <img src={Ingrediente1} className='img-fluid my-4' alt="" />
                    </div>
                    <div className='col-lg-6'>
                        <img src={Ingrediente2} className='img-fluid my-4' alt="" />
                    </div>
                </div>
                <h2>Platos Típicos</h2>
                <p>Nuestra carta incluye una variedad de platos típicos que representan lo mejor de la cocina ecuatoriana. Disfruta de un delicioso ceviche de camarón con su inconfundible toque de limón, o déjate tentar por el tradicional encebollado, un caldo de pescado con yuca y cebolla encurtida que es perfecto para cualquier ocasión. No puedes perderte el locro de papas, una sopa espesa y reconfortante 
                hecha con papas, queso y aguacate, ni la exquisita fritada, asi como la deliciosa fanesca.</p>
            </div>

            <div className='bg-dark text-light'>
                <ImageGallery />
            </div>

            <div className='my-5'>
                <Reviews />
            </div>
        </div>
    )
}

export default About;