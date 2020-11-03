import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../styles/content.css';

interface Content {
  linkTarget?: string,
  leftSide?: any,
  rightSide?: any,
}

export default function PageContent({leftSide, rightSide, linkTarget}:Content) {
  return (
    <div id="PageContent">
      {leftSide}
      {rightSide}

      {
      linkTarget && (
        <Link to={linkTarget} className="next-page-button">
          <FiArrowRight size='26' color='#808080' />
        </Link>
      )
      }
      
    </div>
  );
}
