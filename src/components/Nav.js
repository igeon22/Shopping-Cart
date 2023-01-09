import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { useEffect, useState } from 'react';


function Nav(props){
	let navStyle = {
		textAlign : 'center',
		textDecoration:'none',
		color : 'black'
	}

	const [localCheck,setLocalCheck] = useState(props.count)
	const [display,setDisplay] = useState("")

	useEffect(()=>{
		// console.log(props.count);
		if(props.count>9){
			setDisplay('9+')
		}
		else{
			setDisplay(props.count)
		}

	},[props.count])



	return(
		<header>
			<h1 className="title">Black'n White</h1>
			<div className="nav-cont">
				<nav>
					<Link style={navStyle} to={'/'}>
						<p className="top-btns">Home</p>
					</Link>
					<Link style={navStyle} to={'/store'}>
						<p className="top-btns">Store</p>
					</Link>
					<Link style={navStyle} to={'/cart'}>
						<p className="top-btns">Cart-{display}</p>
					</Link>
				</nav>

			</div>
		</header>
	)
}

export default Nav