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
    const active = useSelector((state: RootState) => state.pizza.category.active)

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
                <h1>{active === '' ? 'Все' : active}</h1>
                <div className={styles.pizzasList}>
                    <ul>
                        {pizzas.map((item) => {
                            if (active === '') {
                                return <Pizza key={item._id} pizza={item} />
                            } else {
                                if (item.category.includes(active))
                                    return <Pizza key={item._id} pizza={item} />
                            }
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
