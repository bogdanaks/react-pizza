import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import logo from '../../assets/logo.png'

import styles from './styles.module.scss'
import { Link } from 'react-router-dom'

export const Navbar: React.FC = () => {
    return (
        <>
            <div className={styles.navbar}>
                <Link to="/" className={styles.logoBlock}>
                    <div className={styles.logo}>
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className={styles.logoText}>
                        <h1>REACT PIZZA</h1>
                        <p>самая вкусная пицца во вселенной</p>
                    </div>
                </Link>
                <div className={styles.cart}>
                    <Link to="/cart">
                        <button>
                            520 ₽ <span>|</span> <FontAwesomeIcon icon={faShoppingCart} /> 3
                        </button>
                    </Link>
                </div>
            </div>
            <div className={styles.line} />
        </>
    )
}
