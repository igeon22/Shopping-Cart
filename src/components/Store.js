import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom';
import Card from './Card';
import Cart from './Cart';
import Data from './data/data';

function Store(props){
	const [list,setList] = useState()
	const navigate = useNavigate()

	// const change=(e)=>{
	// 	setList(e.target.textContent+"-"+list);
	// 	props.setResponse(e.target.textContent)
	// 	navigate('/cart')
	// }

	// useEffect(()=>{
	// 	console.log(list);

	// },[list])



	return(
		<div>
			<section className="presentation">
					<h3 className="store-title">Store</h3>
			</section>

			<section className="store">{Data.map((item)=>{
				return(
					<Card response={props.response} setResponse={props.setResponse} key={item.id}  name={item.name} image={item.image} price={item.price}></Card>
				)
			})}</section>

		</div>
	)
}

export default Store