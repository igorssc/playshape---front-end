import * as React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from '@styles/components/CarrouselIndex.module.css'

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', filter: 'invert(1)' }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', filter: 'invert(1)' }}
      onClick={onClick}
    />
  )
}

const CarrouselIndex: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <div className={styles.carrouselContent}>
      <Slider {...settings}>
        <div className={styles.ball}>
          <div>
            <h3>Vitaminas</h3>
          </div>
        </div>
        <div className={styles.ball}>
          <div>
            <h3>Proteínas</h3>
          </div>
        </div>
        <div className={styles.ball}>
          <div>
            <h3>Termogênicos</h3>
          </div>
        </div>
        <div className={styles.ball}>
          <div>
            <h3>Aminoácidos</h3>
          </div>
        </div>
        <div className={styles.ball}>
          <div>
            <h3>Fitoterápicos</h3>
          </div>
        </div>
        <div className={styles.ball}>
          <div>
            <h3>Vegetariano</h3>
          </div>
        </div>
        <div className={styles.ball}>
          <div>
            <h3>Vegano</h3>
          </div>
        </div>
        <div className={styles.ball}>
          <div>
            <h3>Carboidratos</h3>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default CarrouselIndex
