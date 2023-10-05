import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import styles from './About.module.scss'

const About = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				EVRIKA | надежная электроника и бытовая техника
			</h1>

			<div className={styles.wrapper}>
				<div className={styles.textWrapper}>
					<div className={styles.leftSide}>
						<p>
							EVRIKA является ведущей сетью на рынке потребительской электроники
							южного региона, осуществляющая свою деятельность с 2000 года.
							Сегодня сеть гипермаркетов электроники и бытовой техники EVRIKA
							включает 30 магазинов, в 22 населенных пунктах Казахстана:
							Нур-Султан, Алматы, Шымкент, Аксукент, Аральск, Арысь, Жаркент,
							Жетысай, Карабулак, Караганда, Каскелен, Кызылорда, Ленгер,
							с.Казыгурт, с.Турара Рыскулова, с. Сарыкемер, с. Торетам, с.
							Узынагаш, Сарыагаш, Тараз, Туркестан, Шу.
						</p>
					</div>
					<div className={styles.rightSide}>
						<p>
							География присутствия компании постоянно расширяется. Благодаря
							качественным товарам от ведущих мировых брендов, конкурентной
							ценовой политике, высококлассному формату магазинов,
							соответствующих международным стандартам и
							клиенто-ориентированному сервису EVRIKA отвечает всем требованиям
							своих любимых клиентов.
						</p>
					</div>
				</div>
				<div className={styles.more}>
					<p>Подробней</p>
					<IoIosArrowDown />
				</div>
			</div>
		</div>
	)
}

export default About
