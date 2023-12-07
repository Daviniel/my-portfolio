import React from 'react';
import './NotFound.css';

import iconNotFound from '../../img/icon/notfound.svg';

export default function NotFound() {
  return (
    <div className="not-found">
      <h1 className='title-not-found'>Página não encontrada!</h1>
      <div className="img-not-found">
        <img src={iconNotFound} alt="icon 404" width="800px" />
      </div>
    </ div>
  );
}
