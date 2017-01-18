import React from 'react';
import { Link } from 'react-router';

const ShortLink = ({children, to, max}) => {
  return (<Link to={to} title={children}> {children.length > max ? (children.substring(0, max) + '...') : children} </Link>);
};

export default ShortLink;
