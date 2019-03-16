import React from 'react';
import Face from './Face.js';



const FaceDetection = ({imageUrl, boxes}) => {
	
	const faces = boxes.map(box => <Face id={box.id} key={box.id} box={box} />);
	return (
			<div className="center ma2">
				<div className="absolute mt2">
					<img id="inputImage" alt="" src={imageUrl} width='500px' height='auto' />
{faces}
					<Face box={boxes} />
				</div>
			</div>
		);
}


export default FaceDetection;