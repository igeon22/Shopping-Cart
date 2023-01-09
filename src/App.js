import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, HashRouter} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import Nav from './components/Nav';
import Store from './components/Store';
import Cart from './components/Cart';

function App(props){
	const [card,setCard] = useState({
		name:''
	})
	

	const [response,setResponse] = useState([])
	const [cn,setCn] = useState(0)
	const changeName = (e)=>{
		setCard(e.target.textContent)
		// console.log('text: ',e.target.textContent);
	}
	
	useEffect(()=>{
		let rc = 0
		response.map((item)=>{
			rc++
		})
		setCn(rc)
		// console.log('Cn: ',response);
	},[response])

	
	return(
		<HashRouter>
			<Nav count={cn}></Nav>
			<Routes>
				<Route path='/' element={<Home name={'bf'}></Home>}></Route>
				<Route path='/store' element={<Store changeName={changeName} setResponse={setResponse} response={response} ></Store>}></Route>
				<Route path='/cart' element={<Cart setResponse={setResponse} response={response}></Cart>}></Route>
			</Routes>
		</HashRouter>
	)
}
export default App