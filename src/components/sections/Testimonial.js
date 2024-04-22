import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import img from "../../assets/imagesReviews/IMAGE 2024-04-22 16:04:54.jpg"
import img2 from "../../assets/imagesReviews/IMAGE 2024-04-22 16:04:56.jpg"
import img3 from "../../assets/imagesReviews/IMAGE 2024-04-22 16:04:57.jpg"
import img4 from "../../assets/imagesReviews/IMAGE 2024-04-22 16:04:58.jpg"
import img5 from "../../assets/imagesReviews/IMAGE 2024-04-22 16:05:00.jpg"
import img6 from "../../assets/imagesReviews/IMAGE 2024-04-22 16:05:01.jpg"
import img7 from "../../assets/imagesReviews/IMAGE 2024-04-22 16:05:04.jpg"
import img8 from "../../assets/imagesReviews/IMAGE 2024-04-22 16:05:06.jpg"
import img9 from "../../assets/imagesReviews/IMAGE 2024-04-22 16:05:07.jpg"
import img10 from "../../assets/imagesReviews/IMAGE 2024-04-22 16:05:09.jpg"
import img11 from "../../assets/imagesReviews/IMAGE 2024-04-22 16:05:11.jpg"
import img12 from "../../assets/imagesReviews/IMAGE 2024-04-22 16:05:13.jpg"

export const imageLinks = [
  img,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12
];

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const sectionHeader = {
    title: 'Отзывы клиентов',
    paragraph: ''
  };

  
  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
        </div>
       
       
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;