import React from 'react'

import styles from './styles.module.scss'

export const Categories: React.FC = () => {
    return (
        <div className={styles.categories}>
            <ul>
                <li className={styles.active}>Все</li>
                <li>Мясные</li>
                <li>Вегетарианские</li>
                <li>Гриль</li>
                <li>Острые</li>
                <li>Закрытые</li>
            </ul>
        </div>
    )
}
