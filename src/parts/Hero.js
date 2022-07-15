import React from 'react';
import Fade from 'react-reveal/Fade';

import ImageHero from 'assets/images/image_hero.png';
import Button from 'elements/Button';
import formatNumber from 'utils/formatNumber';


export default function Hero(props) {

    function showMostPicked() {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth"
        });
    }

    return (
        <Fade bottom>
        <section className="container pt-5 mt-n1">
            <div className="row align-items-center">
                <div className="col-auto pr-5" style={{width: 530}}>
                    <h1 className="font-weight-bold text-teal line-height-1 mb-3">
                       Santai <span className="text-orange">sejenak,</span> <br/>
                        Mulai dengan liburan bersama keluarga.
                    </h1>
                    <p className="mb-4 font-weight-light text-teal w-75" style={{lineHeight:"170%"}}>
                    Kami menyediakan apa yang Anda butuhkan untuk menikmati liburan Anda bersama keluarga, Saatnya
                         membuat momen yanga tak terlupakan.
                    </p>
                    <Button className="btn px-4 text-white" hasShadow isSecondary onClick={showMostPicked}>
                        Telusuri
                    </Button>
                    <div className="row mt-5">
                        <div className="col-auto" style={{marginRight: 20}}>
                            <img  width="36" height="36"
                            src="images/icon_location.svg"
                            alt={`${props.data.location} Location`}/>
                            <h6 className="mt-3">
                                {formatNumber(props.data.location)} <span className="text-gray-500 font-weight-light">
                                    location
                                </span>
                            </h6>
                        </div>
                        <div className="col-auto" style={{marginRight: 20}}>
                            <img  width="36" height="36"
                            src="images/icon_treasure.svg" 
                            alt={`${props.data.treasure} Treasure`}/>
                            <h6 className="mt-3">
                                {formatNumber(props.data.treasure)} <span className="text-gray-500 font-weight-light">
                                    treasure
                                </span>
                            </h6>
                        </div>
                        <div className="col-auto">
                            <img  width="36" height="36"
                            src="images/icon_cities.svg"
                            alt={`${props.data.cities} Cities`}/>
                            <h6 className="mt-3">
                                {formatNumber(props.data.cities)} <span className="text-gray-500 font-weight-light">
                                    cities
                                </span>
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="col-5  pl-4">
                    <div style={{width: 500, height: 320}}>
                        <img src={ImageHero} 
                        alt="Room with couches" 
                        className="img-fluid position-absolute" 
                        style={{margin: "-30px 0 0 90px", zIndex: 1}}
                        />
                    </div>

                </div>
            </div>
        </section>
        </Fade>
    )
}
