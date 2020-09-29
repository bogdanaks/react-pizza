import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import styles from './styles.module.scss'

import pizzaImg from '../../assets/pizza1.png'

interface PizzaProps {
    pizza: {
        title: string
    }
}

export const Pizza: React.FC<PizzaProps> = ({ pizza }) => {
    return (
        <li>
            <img src={pizzaImg} alt="Pizza" />
            <h2>{pizza.title}</h2>
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
    )
}
