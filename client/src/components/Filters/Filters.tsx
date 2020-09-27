import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'

import styles from './styles.module.scss'

export const Filters: React.FC = () => {
    const [showList, setShowList] = React.useState<Boolean>(false)

    return (
        <div className={styles.filtersWrapper}>
            <div className={styles.filters}>
                <FontAwesomeIcon icon={faCaretUp} />
                <h4>Сортировка по:</h4>
                <p onClick={() => setShowList(!showList)}>популярности</p>
            </div>
            {showList && (
                <div className={styles.list}>
                    <ul>
                        <li className={styles.active}>популярности</li>
                        <li>по цене</li>
                        <li>по алфавиту</li>
                    </ul>
                </div>
            )}
        </div>
    )
}
