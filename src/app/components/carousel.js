import React from 'react'
import '../css/carousel.css'
import InfiniteCarousel from 'react-leaf-carousel';

const Carousel = () => {
    /*Pegar largura em pixels da tela*/
    var width = window.screen.width;
    return (
        <div className="container">
            <div className="titleCarousel">
                <span>More than 2,2 millionpeople across 55,000 companies choose Sydney</span>
            </div>
            <div className="contentCarousel">
                <InfiniteCarousel

                    showSides={true}
                    sidesOpacity={0.9}
                    sideSize={0.1}
                    slidesToScroll={3}/*Passar quantas imagens por vez no carousel*/
                    slidesToShow={width > 1199 ? 6 : width <= 1199 && width >= 991 ? 2 : 1}/*Mostrar quantas imagens por vez no carousel*/
                    scrollOnDevice={true}
                    cycleInterval={true}
                >
                    <div>
                        <img
                            alt="lo6.png"
                            src="https://demo.athemes.com/sp-saas/wp-content/uploads/sites/115/2020/09/lo6.png"
                        />
                    </div>
                    <div>
                        <img
                            alt="lo3.png"
                            src="https://demo.athemes.com/sp-saas/wp-content/uploads/sites/115/2020/09/lo3.png"
                        />
                    </div>
                    <div>
                        <img
                            alt="lo1.png"
                            src="https://demo.athemes.com/sp-saas/wp-content/uploads/sites/115/2020/09/lo1.png"
                        />
                    </div>
                    <div>
                        <img
                            alt="lo5.png"
                            src="https://demo.athemes.com/sp-saas/wp-content/uploads/sites/115/2020/09/lo5.png"
                        />
                    </div>
                    <div>
                        <img
                            alt="lo2.png"
                            src="https://demo.athemes.com/sp-saas/wp-content/uploads/sites/115/2020/09/lo2.png"
                        />
                    </div>
                    <div>
                        <img
                            alt="lo7.png"
                            src="https://demo.athemes.com/sp-saas/wp-content/uploads/sites/115/2020/09/lo7.png"
                        />
                    </div>
                    <div>
                        <img
                            alt="lo4.png"
                            src="https://demo.athemes.com/sp-saas/wp-content/uploads/sites/115/2020/09/lo4.png"
                        />
                    </div>
                    <div>
                        <img
                            alt="lo8.png"
                            src="https://demo.athemes.com/sp-saas/wp-content/uploads/sites/115/2020/09/lo8.png"
                        />
                    </div>

                </InfiniteCarousel>
            </div>

        </div >
    )
}

export default Carousel