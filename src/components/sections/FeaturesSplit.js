import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Button from '../elements/Button';
const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'УСЛУГИ',
    paragraph: 'я направляю через:'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mt-0 mb-12" >
                РАЗБОРЫ ПО КАРМИЧЕСКОЙ НУМЕРОЛОГИИ</h3>
                <p className="m-0">
                Универсальный метод познания своей личности
                  </p>
                  <Button href="/razborms" style={{
                    background: "transparent",
                    border: "1px solid #d537de",
                    color: "#d537de",
                    marginTop: 20,
                    borderRadius: 12,
                  }} tag="a" color="primary" wideMobile>
                    Прайс на разборы
                    </Button>
                 
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={"https://wizard.ltestl.com/assets/hand-C6xxdsPI.png"}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <h3 className="mt-0 mb-12">
                  ИНДИВИДУАЛЬНОЕ ОБУЧЕНИЕ
                  </h3>
                <p className="m-0">
                  Онлайн обучение по кармической нумерологии для самопознания и обретения профессии 
                  </p>
                  <Button href="/razborms" style={{
                    background: "transparent",
                    border: "1px solid #d537de",
                    color: "#d537de",
                    marginTop: 20,
                    borderRadius: 12,
                  }} tag="a" color="primary" wideMobile>
                    Прайс на разборы
                    </Button>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={"https://wizard.ltestl.com/assets/sun-D-2u_hjf.svg"}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mt-0 mb-12">
                РАСКЛАДЫ ТАРО</h3>
                <p className="m-0">
                Таро - это уникальная система, которая позволяет любому человеку найти ответы в глубине своего подсознания.
                  </p>
                  <Button href="/razborms" style={{
                    background: "transparent",
                    border: "1px solid #d537de",
                    color: "#d537de",
                    marginTop: 20,
                    borderRadius: 12,
                  }} tag="a" color="primary" wideMobile>
                    Прайс на разборы
                    </Button>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src="https://wizard.ltestl.com/assets/moon_star-zF9vQ_qt.svg"
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;