import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

function Wing() {
  return (
    <svg width="50px" height="50px" viewBox="0 0 17 29" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" xmlnsSerif="http://www.serif.com/" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}>
      <g transform="matrix(0.0156264,0,0,0.0156264,-5.01358,-5.8732)">
        <path d="M1440.74,1614.9C1440.74,1494.13 1440.61,1185.89 1440.61,1065.11C1359.94,917.774 1154.27,576.526 933.987,480.781C758.042,404.081 442.781,320.927 347.826,423.951C309.909,465.096 311.95,525.578 353.949,603.894C495.736,868.494 562.977,1033.61 559.433,1109.67C559.631,1165.3 582.03,1218.62 621.625,1257.7C672.094,1308.02 737.686,1340.44 808.312,1349.98C720.107,1405.47 666.305,1502.53 665.987,1606.74C667.922,1738.19 698.611,1867.63 755.892,1985.96C802.959,2114.05 921.66,2202.78 1057.84,2211.67L1059.66,2211.67C1210.93,2193.6 1319.79,2057.62 1304.35,1906.04C1304.35,1701.95 1387.79,1632.12 1440.74,1614.9Z" style={{ fill: '#d537de', fillRule: 'nonzero' }} />
      </g>
    </svg>
  );
}
const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div>
      <div className="canvas">
      <div className="bf bf-1">
        <div className="wing-left">
          <Wing />
        </div>
        <div className="wing-right">
          <Wing />
        </div>
      </div>
      <div className="bf bf-2">
        <div className="wing-left">
          <Wing />
        </div>
        <div className="wing-right">
          <Wing />
        </div>
      </div>
      <div className="bf bf-3">
        <div className="wing-left">
          <Wing />
        </div>
        <div className="wing-right">
          <Wing />
        </div>
      </div>
      <div className="bf bf-4">
        <div className="wing-left">
          <Wing />
        </div>
        <div className="wing-right">
          <Wing />
        </div>
      </div>
      <div className="bf bf-5">
        <div className="wing-left">
          <Wing />
        </div>
        <div className="wing-right">
          <Wing />
        </div>
      </div>
    </div>
      </div>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Dana <span className="text-color-primary" style={{
                color: "#d537de"
              }}>Butsh</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400" style={{
                fontStyle: "italic"
              }}>
                проводник света, кармический нумеролог, таролог
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button href="https://t.me/dana825" style={{
                    backgroundColor: "#d537de",
                    borderRadius: 12
                  }} tag="a" color="primary" wideMobile>
                    Связаться
                    </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <a
              data-video="https://www.youtube.com/watch?v=sb2ZHmv07DY"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require('./../../assets/images/dana1.png')}
                alt="Hero"
                width={600}
                style={{
                  borderRadius: 16
                }}
                height={404} />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://www.youtube.com/watch?v=sb2ZHmv07DY"
            videoTag="iframe" />
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;