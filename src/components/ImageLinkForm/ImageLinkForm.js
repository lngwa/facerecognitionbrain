import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onBtnSubmit}) => {
	return (
			<div>
				<p>
					{`This magic brain witll detect faces on your picture. Give it a  shot!`}
				</p>
				<div className="center pa2">
				<div className="center form pa4 br3 shadow-5">
					<input className="pa2 f4 w-70 center" type="text" onChange={onInputChange} />
					<button className="w-30 bg-light-purple" onClick={onBtnSubmit} >Dectect</button>
				</div>
				</div>
			</div>
		);
}


export default ImageLinkForm;