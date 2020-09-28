import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faMinus, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'

import pizzaImg from '../../assets/pizza1.png'

import styles from './styles.module.scss'

export const Cart: React.FC = () => {
    return (
        <div className={styles.cartWrapper}>
            <div className={styles.cart}>
                <div className={styles.header}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <h1>Корзина</h1>
                    <div className={styles.clear}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                        <p>Очистить корзину</p>
                    </div>
                </div>
                <div className={styles.line} />
                <ul>
                    <li>
                        <div className={styles.leftBlock}>
                            <img src={pizzaImg} alt="Pizza" />
                            <div className={styles.pizzaInfo}>
                                <h3>Сырный цыпленок</h3>
                                <p>тонкое тесто, 26 см.</p>
                            </div>
                        </div>
                        <div className={styles.rightBlock}>
                            <div className={styles.count}>
                                <div className={styles.minus}>
                                    <FontAwesomeIcon icon={faMinus} />
                                </div>

                                <h3>2</h3>
                                <div className={styles.plus}>
                                    <FontAwesomeIcon icon={faPlus} />
                                </div>
                            </div>
                            <h2>770 ₽ </h2>
                            <div className={styles.cross}>
                                <FontAwesomeIcon icon={faTimes} />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={styles.leftBlock}>
                            <img src={pizzaImg} alt="Pizza" />
                            <div className={styles.pizzaInfo}>
                                <h3>Сырный цыпленок</h3>
                                <p>тонкое тесто, 26 см.</p>
                            </div>
                        </div>
                        <div className={styles.rightBlock}>
                            <div className={styles.count}>
                                <div className={styles.minus}>
                                    <FontAwesomeIcon icon={faMinus} />
                                </div>

                                <h3>2</h3>
                                <div className={styles.plus}>
                                    <FontAwesomeIcon icon={faPlus} />
                                </div>
                            </div>
                            <h2>770 ₽ </h2>
                            <div className={styles.cross}>
                                <FontAwesomeIcon icon={faTimes} />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={styles.leftBlock}>
                            <img src={pizzaImg} alt="Pizza" />
                            <div className={styles.pizzaInfo}>
                                <h3>Сырный цыпленок</h3>
                                <p>тонкое тесто, 26 см.</p>
                            </div>
                        </div>
                        <div className={styles.rightBlock}>
                            <div className={styles.count}>
                                <div className={styles.minus}>
                                    <FontAwesomeIcon icon={faMinus} />
                                </div>

                                <h3>2</h3>
                                <div className={styles.plus}>
                                    <FontAwesomeIcon icon={faPlus} />
                                </div>
                            </div>
                            <h2>770 ₽ </h2>
                            <div className={styles.cross}>
                                <FontAwesomeIcon icon={faTimes} />
                            </div>
                        </div>
                    </li>
                </ul>
                <div className={styles.orderCount}>
                    <span>
                        Всего пицц: <b>3 шт.</b>
                    </span>
                    <h3>
                        Сумма заказа: <span>900 ₽</span>
                    </h3>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.btnBack}>Вернуться назад</button>
                    <button className={styles.btnPay}>Оплатить сейчас</button>
                </div>
            </div>
        </div>
    )
}
