import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import SimpleCart from "./SimpleCart";

function Cart(props){
	const [cartData,setCartData] = useState(props.response)
	const [totalTickets,setTotalTickets] = useState(0)
	const [total,setTotal] = useState(0)
	const navigate = useNavigate()
	useEffect(()=>{
		// setTotalTickets(0)
		// cartData.map((item)=>{
		// 	console.log(object);
		// 	setTotalTickets(totalTickets+item.tickets)
		// })
		// setTotal(0)
		// cartData.map((item)=>{
		// 	setTotal(total+item.total)
		// })
		let a  = 0
		let b = 0
		props.response.map((item)=>{
			a+= item.tickets
			b+= item.total
		})
		setTotalTickets(a)
		setTotal(b)
		// console.log(a);
		
	},[props.response])

	

	return(
		<div>
			<h1></h1>
			<section className="presentation">
				<h3 className="store-title">Cart</h3>
			</section>
			<section className="cart">{props.response.map((item)=>{
				return(
					<SimpleCart key={Math.random() * 10000} name={item.name} tickets={item.tickets} image={item.image} setResponse={props.setResponse} response={props.response}></SimpleCart>
				)
			})}</section>
			<div className="total">
				<p className="total-p">Tickets Bought: {totalTickets}</p>
				<p className="total-p">Total: ${total}</p>
				<div className="btn-end">
					<button className="buy">Checkout</button>
				</div>
			</div>
			<footer>
				<p className="end">Created by Igeon22</p>
			</footer>
		</div>
	)
}

export default Cart