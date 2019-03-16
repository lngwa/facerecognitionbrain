import React from 'react';
import './FaceDetection.css';

const Face = ({box}) => {
	return (
		<div 
		className="bounding-box" 
		style={{top: box.top_row, right: box.right_col, bottom: box.bottom_row, left: box.left_col}}></div>

		)
}

export default Face;