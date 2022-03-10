import React from 'react';
import PropTypes from 'prop-types';

export default function VideoCard({ details }) {
  return (
    <div>
      <iframe
        data-testid="video"
        className="video"
        frameBorder="0"
        allowFullScreen="1"
        allow="accelerometer;
        autoplay; clipboard-write;
        encrypted-media; gyroscope;
        picture-in-picture"
        title="YouTube video player"
        width="640"
        height="360"
        src={ details.strYoutube }
        id="widget2"
      />
    </div>
  );
}

VideoCard.propTypes = {
  details: PropTypes.objectOf(PropTypes.any).isRequired,
};
