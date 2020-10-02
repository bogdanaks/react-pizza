import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './styles.module.scss'

import { fetchCategories, setCategory } from '../../redux/actions/pizzaActions'

import { RootState } from '../../redux/types/rootTypes'

export const Categories: React.FC = () => {
    const dispatch = useDispatch()
    const { list, active } = useSelector((state: RootState) => state.pizza.category)

    const handleClickCategory = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, _id: string) => {
        dispatch(setCategory(_id))
    }

    React.useEffect(() => {
        dispatch(fetchCategories())
        // eslint-disable-next-line
    }, [])
    return (
        <div className={styles.categories}>
            <ul>
                <li
                    className={active === '' ? [styles.active, styles.bounce].join(' ') : ''}
                    onClick={(e) => handleClickCategory(e, '')}>
                    Все
                </li>
                {list.map((cat) => (
                    <li
                        key={cat._id}
                        onClick={(e) => handleClickCategory(e, cat._id)}
                        className={
                            active === cat._id ? [styles.active, styles.bounce].join(' ') : ''
                        }>
                        {cat.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}
