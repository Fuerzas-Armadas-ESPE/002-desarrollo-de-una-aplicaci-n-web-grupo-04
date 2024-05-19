import React, { useEffect, useState } from 'react';
import { MenuBtn } from '../components/MenuBtn';
import './Home.css';
import AboutImg from '../utils/img/about-img.jpg';
import { Link } from 'react-router-dom';
import { ImageGallery } from '../components/ImageGallery';
import { ContactInfo } from '../components/ContactInfo';
import ContactImage from '../utils/img/contact-img.jpg';
import logoR from '../utils/img/logo-restaurante.png';
import headerImg1 from '../utils/img/header-img.png';
import headerImg2 from '../utils/img/header-img2.png';
import headerImg3 from '../utils/img/header-img3.png';
import headerImg4 from '../utils/img/lunch.jpg';
function Home() {

    const images = [headerImg1, headerImg2, headerImg3, headerImg4];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className='home-page'>
            <header
        className='h-100 min-vh-100 d-flex align-items-center text-light shadow'
        style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${images[currentImageIndex]})`
        }}
    >
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-6 d-flex flex-column align-items-center' id='welcome-section'>
                            <h2 className='mb-0 text-black fw-bold' id="welcome">Bienvenido a</h2>
                            <img className='logo-restaurant' src={logoR}></img>
                            <div className='btn-menu'>
                                <MenuBtn />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            
            <section className=''>
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
                        <img src={AboutImg} className='img-fluid w-50' alt="about img" />
                    </div>
                    <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center'>
                        <h2 className='fs-1 mb-5 text-uppercase fw-bold'>Sobre Nosotros</h2>
                        <p>Bienvenidos a La Mesa de Todos, donde la tradición y el sabor auténtico de Ecuador se unen para ofrecerte una experiencia culinaria inolvidable. Nuestro restaurante se especializa en comida típica ecuatoriana, elaborada con ingredientes frescos y recetas ancestrales que han pasado de generación en generación.</p>
                        <p className='mb-5'>En La Mesa de Todos, celebramos la diversidad y riqueza de nuestra gastronomía, desde el delicioso ceviche y el tradicional encebollado, hasta los irresistibles platos de la sierra y la Amazonía. Nos enorgullecemos de brindar un ambiente acogedor y familiar, donde cada visitante es parte de nuestra comunidad. Ven y disfruta de una comida que te hará sentir como en casa, en el corazón de Ecuador.</p>
                        <Link to="/about">
                            <button type='button' className='btn btn-outline-success btn-lg'>Conocenos Mas</button>
                        </Link>
                    </div>
                </div>
            </div>
            </section>

            <div className='menu-section py-5 text-light shadow'>
                <div className='container d-flex flex-column align-items-center'>
                    <h2 className='fs-1 mb-5 text-uppercase fw-bold'>Nuestra Epecialidad</h2>
                    <div className='row mb-5 w-100'>
                        <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
                            <h3 className='fs-2 mb-5'>Costa</h3>
                            <ul className='px-0'>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Ceviche Mixto</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>$9</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Encocado de Pescado</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>$8</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Cazuela de Mariscos</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>$10</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
                            <h3 className='fs-2 mb-5'>Sierra</h3>
                            <ul className='px-0'>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Chugchucaras</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>$7</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Llapingacho</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>$6</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Hornado</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>$8</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <MenuBtn />
                </div>
            </div>

            <ImageGallery />

            <div className='text-light py-5 shadow' id='find-us'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0'>
                            <ContactInfo />
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={ContactImage} className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;