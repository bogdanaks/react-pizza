import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import logo from '../../assets/logo.png'

import styles from './styles.module.scss'

export const Navbar: React.FC = () => {
    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.logo}>
                    <img src={logo} alt="Logo" />
                </div>
                <div className={styles.logoText}>
                    <h1>REACT PIZZA</h1>
                    <p>самая вкусная пицца во вселенной</p>
                </div>
                <div className={styles.cart}>
                    <button>
                        520 ₽ <span>|</span> <FontAwesomeIcon icon={faShoppingCart} /> 3
                    </button>
                </div>
            </div>
            <div className={styles.line} />
        </>
    )
}
