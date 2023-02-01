import '@/styles/globals.css'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'
import { useState, useEffect } from 'react'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  <Head>
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"/>
  </Head>
  useEffect(() => {
    console.log("iam useefefef")
  }, [])

  const [cart, setCart] = useState([])
  const [reloadKey, setReloadKey] = useState(1)
  const addToCart = (item, qty, price)=>{
    console.log("addto cart")
    let newCart =cart
    for (let index = 0; index < qty; index++) {
      newCart.push([item, price])
    }
   
    setCart(newCart)
    setReloadKey(Math.random())
  } 
  const removeFromCart = (item, qty)=>{
    let newCart = cart
    let index = newCart.indexOf(item)
   newCart.splice(index)
 setCart(newCart)
  } 
  const clearCart = (item, qty)=>{
    setCart([])
  } 
  
  return <> <Navbar key={reloadKey} cart={cart} /><Component cart={cart} removeFromCart={removeFromCart} addToCart={addToCart} clearCart={clearCart} {...pageProps} /><Footer/></>
}
