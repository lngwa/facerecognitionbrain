import React from 'react';
import Face from './Face';

const FaceList = ({boxes}) => {
	return (
		boxes.foreach(box => <Face box={box} />)
		);
}

export default FaceList;