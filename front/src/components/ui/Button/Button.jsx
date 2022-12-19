import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

const Button = ({ text, callback, type = 'purple' }) => {
	return (
			<Link to='/newWorkout'>
			<button onClick={callback} className={`${styles.button} ${styles[type]}`}>
				{text}
			</button>
			</Link>
	)
}

export default Button
