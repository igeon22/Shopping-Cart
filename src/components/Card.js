import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom';


function Card(props){
	const [count,setCount] = useState(0)
	const [field,setField] = useState(0)
	const navigate = useNavigate()

	const change=(e)=>{
		e.preventDefault()
		if(field>0){

			props.setResponse(props.response.concat([{name:props.name,price:props.price,tickets:field,total:Math.round((field*props.price)),image:props.image}]))
		}
		// navigate('/cart')
	}

	const handleField=(e)=>{
		if(e.target.value>0){
			setField(parseInt(e.target.value))
		}
	}

	const countUp=(e)=>{
		e.preventDefault()
		if(field<999){
			setField(field+1)
		}
	}
	
	const countDown=(e)=>{
		e.preventDefault()
		if(field>0){
			setField(field-1)
		}
	}


	// const handleClick(e){
	// 	if(e.target.value)



	// }




	return(
		<div className="main-container">
			
			<p className="block-title">{props.name}</p>
			<div className="img-container">
				<img className="img-store" src={require(`${props.image}`)} alt=""/>
			</div>
			<p className="price-text">Ticket Price: ${props.price}</p>
			<form>
			<div className="counter">
				<button className="count-btn" onClick={countUp}>+</button>
				<input type='text' min={1} max={999} className="count-display" maxLength={3} minLength={1} required value={field} onChange={handleField}></input>
				<button  className="count-btn" onClick={countDown}>-</button>
			</div>

			<button type="submit" className="add-cart" onClick={change}>Add to Cart</button>
			</form>

		</div>
	)
}

export default Card