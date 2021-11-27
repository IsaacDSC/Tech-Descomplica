import React from 'react'
import Image from 'next/image'

const URLS = {
    img01: require('../../public/images/career-3478983_1920.jpg'),
    img02: require('../../public/images/career-3478983_1920.jpg'),
    img03: require('../../public/images/career-3478983_1920.jpg'),
}

interface BannerProps {
    title: string;
    subtitle?: string;
}

export const Banner: React.FC<BannerProps> = (components: BannerProps) => {
    return (

        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    {/*  <img src="..." className="d-block w-100" alt="..."> */}
                    <Image
                        src={URLS.img01}
                        alt="Picture of the author"                       
                    />
                    <h2>{components.title}{components.subtitle}</h2>
                </div>
                <div className="carousel-item">
                    {/*  <img src="..." className="d-block w-100" alt="..."> */}
                    <Image
                        src={URLS.img01}
                        alt="Picture of the author"                       
                    />
                    <h2>{components.title}{components.subtitle}</h2>
                </div>
                <div className="carousel-item">
                    {/*  <img src="..." className="d-block w-100" alt="..."> */}
                    <Image
                        src={URLS.img01}
                        alt="Picture of the author"
                       
                    />
                    <h2>{components.title}{components.subtitle}</h2>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    )
}


