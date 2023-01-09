import { BrowserRouter as Router, Routes, Route, Link, useParams} from 'react-router-dom';
import React, { useState, useEffect } from "react";


function Home(props){
	let {name} = useParams()
	// console.log(name);
	let navStyle = {
		textAlign : 'center',
		textDecoration:'none',
		color : 'black'
	}

	return(
			<div>
				<section className="presentation">
					<h3 className="store-title">Home</h3>
				</section>

				<section className="home">
					<h4 className="home-title">Welcome on the best online travel agency website</h4>
					<img className="home-img" src={require("./assets/imgs/cathedral.jpg")} alt=""></img>
					<p className="lambda-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, consequatur! Ab rerum doloribus quos magnam in ipsam illum accusantium, dicta ducimus ullam sunt saepe deserunt. Doloribus molestias maxime ducimus cum.</p>
					<p className="lambda-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, consequatur! Ab rerum doloribus quos magnam in ipsam illum accusantium, dicta ducimus ullam sunt saepe deserunt. Doloribus molestias maxime ducimus cum.</p>
					<p className="lambda-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, consequatur! Ab rerum doloribus quos magnam in ipsam illum accusantium, dicta ducimus ullam sunt saepe deserunt. Doloribus molestias maxime ducimus cum.</p>
					
					<h4 className="home-title">What is our proposal?</h4>
					<img className="home-img" src={require("./assets/imgs/san-francisco.jpg")} alt=""/>
					<p className="lambda-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, consequatur! Ab rerum doloribus quos magnam in ipsam illum accusantium, dicta ducimus ullam sunt saepe deserunt. Doloribus molestias maxime ducimus cum.</p>
					<p className="lambda-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, consequatur! Ab rerum doloribus quos magnam in ipsam illum accusantium, dicta ducimus ullam sunt saepe deserunt. Doloribus molestias maxime ducimus cum.</p>
					<p className="lambda-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, consequatur! Ab rerum doloribus quos magnam in ipsam illum accusantium, dicta ducimus ullam sunt saepe deserunt. Doloribus molestias maxime ducimus cum.</p>
					
					<h4 className="home-title">We have the best price and you should check  the store now</h4>
					<img className="home-img" src={require("./assets/imgs/monaco.jpg")} alt=""/>
					<p className="lambda-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, consequatur! Ab rerum doloribus quos magnam in ipsam illum accusantium, dicta ducimus ullam sunt saepe deserunt. Doloribus molestias maxime ducimus cum.</p>
					<p className="lambda-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, consequatur! Ab rerum doloribus quos magnam in ipsam illum accusantium, dicta ducimus ullam sunt saepe deserunt. Doloribus molestias maxime ducimus cum.</p>
					<p className="lambda-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, consequatur! Ab rerum doloribus quos magnam in ipsam illum accusantium, dicta ducimus ullam sunt saepe deserunt. Doloribus molestias maxime ducimus cum.</p>
					<p>You can find our services at: <Link  className="site-ref" to={'./store'}>Black'n White Store</Link></p>
				</section>

				<footer>
					<p className="end">Created by Igeon22</p>
				</footer>
			</div>
	)
}

export default Home