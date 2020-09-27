import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import styles from './styles.module.scss'
import pizzaImg from '../../assets/pizza1.png'

import { Categories } from '../../components/Categories/Categories'
import { Filters } from '../../components/Filters/Filters'

export const Main: React.FC = () => {
    const pizzasArr = Array(5).fill(1)
    return (
        <div className={styles.wrapper}>
            <div className={styles.settings}>
                <Categories />
                <Filters />
            </div>
            <div className={styles.pizzas}>
                <h1>Все</h1>
                <div className={styles.pizzasList}>
                    <ul>
                        {pizzasArr.map(() => (
                            <li>
                                <img src={pizzaImg} alt="Pizza" />
                                <h2>Чизбургер-пицца</h2>
                                <div className={styles.settingsPizza}>
                                    <div className={styles.dough}>
                                        <button className={styles.active}>тонкое</button>
                                        <button disabled>традиционное</button>
                                    </div>
                                    <div className={styles.size}>
                                        <button disabled>26 см.</button>
                                        <button>30 см.</button>
                                        <button className={styles.active}>40 см.</button>
                                    </div>
                                </div>
                                <div className={styles.price}>
                                    <h2>от 395 ₽</h2>
                                    <button>
                                        <FontAwesomeIcon icon={faPlus} />
                                        Добавить
                                        <span>2</span>
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
