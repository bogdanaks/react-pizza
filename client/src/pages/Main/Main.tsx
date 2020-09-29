import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './styles.module.scss'

import { Categories } from '../../components/Categories/Categories'
import { Filters } from '../../components/Filters/Filters'

import { fetchPizzas } from '../../redux/actions/pizzaActions'
import { Pizza } from '../../components/Pizza/Pizza'

import { RootState } from '../../redux/types/rootTypes'

export const Main: React.FC = () => {
    const dispatch = useDispatch()
    const pizzas = useSelector((state: RootState) => state.pizza.pizzas)

    React.useEffect(() => {
        dispatch(fetchPizzas())
        // eslint-disable-next-line
    }, [])
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
                        {pizzas.map((item) => (
                            <Pizza key={item._id} pizza={item} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
