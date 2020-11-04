import classNames from 'classnames';
import React from 'react'
import logoPng from '../assets/img/header_logo.png';
import titlePng from '../assets/img/header_title.svg';
import Button from '../components/Button';

const Header = () => {

  return (
    <div className={classNames('header')}>
      <img className={classNames('header__logo')} src={logoPng} alt="Трубина"/>
      <h1 className={classNames('header__title')}>
        <img className={classNames('header__title-img')} src={titlePng} alt=""/>
      </h1>


      <div className={classNames('header__btn-container')}>
        <div className={classNames('header__btn-checker')}>
          <Button
            text = 'Стриминги'
            outline
          />
        </div>
        <ul className={classNames('header__btn-spoiler')}>
          <a href="#" className="button">Яндекс.Музыка ↗</a>
          <a href="#" className="button">Apple Music ↗</a>
          <a href="#" className="button">VK Music ↗</a>
          <a href="#" className="button">Spotify ↗</a>
        </ul>
      </div>

    </div>
  )
}

export default Header