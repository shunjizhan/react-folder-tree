import React from 'react';

export const iconContainerClassName = className => `iconContainer ${className}`;
export const iconClassName = className => `icon ${className}`;

export const getDefaultIcon = Icon => ({ className, onClick }) => (   // eslint-disable-line
  <Icon
    className={ className }
    onClick={ onClick }
  />
);
