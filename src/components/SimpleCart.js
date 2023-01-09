import { useNavigate } from "react-router-dom";


function SimpleCart(props){

	const navigate = useNavigate()
	const deleteBlock=(e)=>{
		props.response.map((item,index)=>{
			if(item.name === props.name && item.tickets === props.tickets){
				// console.log('We found it at : ',index,item);
				let tst = []
				
				tst.concat([props.response])
				props.setResponse(props.response.filter(it=>it!=item))
				// console.log(props.response);
				navigate('/cart')

			}
		})
	}

	return(
		<div className="cart-container">
			<div className="img-cart">
				<img className="img-c" src={require(`${props.image}`)} alt=""/>
			</div>

			<div className="infos">
				<p className="block-tile">{props.name}</p>
				<p className="block-tile">Number of tickets:{props.tickets}</p>
			</div>
			<button className="del-cart-btn" onClick={deleteBlock}>X</button>
		</div>
	)
}

export default SimpleCart