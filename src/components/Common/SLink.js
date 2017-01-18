import React from 'react';
import { Link } from 'react-router';

const ShortLink = ({children, to, max, className}) => {
  return (<Link to={to} className={className} title={children}> {children.length > max ? (children.substring(0, max) + '...') : children} </Link>);
};

export default ShortLink;
