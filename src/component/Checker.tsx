import React, { FC } from 'react';
import s from './Checker.module.css';

const COLOR = ['#F5F5F5', '#0A0A0A', '#E6D7C0', '#19283F', '#0680D6', '#F97F29', '#200D69', '#DFF296'];

const Checker: FC = (props: any) => {
	return (
		<div className={s.wrapper} >
			{COLOR.map((item: any) =>
				<p key={item} style={{ backgroundColor: item }} className={s.bgItem}>
					{COLOR.map((item: any) =>
						<span key={item} 
						style={{ 
							color: item, 
						// borderColor: item 
						}} className={s.spanItem}>
							{item}
						</span>)}
				</p>)}
		</div>
	)
}

export default Checker;