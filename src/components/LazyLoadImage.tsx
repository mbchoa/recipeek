import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import lozad from 'lozad';
import styled from 'styled-components';

type Props = {
  alt: string;
  src: string;
};

const observer = lozad();

const Image = styled.img.attrs({ className: 'lozad' })`
  opacity: 0;
  transition: all 0.2s;
  &[data-loaded='true'] {
    opacity: 1;
  }
`;

const LazyLoadImage = ({ alt, src, ...props }: Props) => {
  useEffect(() => {
    observer.observe();
  }, []);

  return <Image alt={alt} data-src={src} {...props} />;
};

LazyLoadImage.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

export default LazyLoadImage;
