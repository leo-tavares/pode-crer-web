import React, { useState } from 'react'
import { Progress, ProgressDone } from './style';

const ProgressBar = ({done}) => {
	const [style, setStyle] = useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
		<Progress>
			<ProgressDone style={style}>
				{done}%
		    </ProgressDone>
		</ Progress>
	)
}

export default ProgressBar;
