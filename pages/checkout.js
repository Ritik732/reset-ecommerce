import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Script from 'next/script'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Checkout = ({cart}) => {
  const router = useRouter()
  
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    analytics.identify({
      name: fullName,
      email: email,
      phone: phone,
      address: address,


    });
  };





  const [subtotal, setSubtotal] = useState(0)
  // const [form, setForm] =useState({name: "", email: "",phone: "",address: ""})
  useEffect(() => {
    console.log(cart)
    let myTotal = 0
    for (let index = 0; index < cart.length; index++) { 
      const element = cart[index];
      myTotal =myTotal + cart[index][1]
      
    }
      setSubtotal(myTotal)
    
    
  }, [])
   
    
  
  
  return (
    
    <form onSubmit={handleSubmit}>
    <div>
      <section className="text-gray-600 body-font relative">
    <div className="container px-5 py-24 mx-auto max-h-screen">
      <div className="flex flex-col  w-full mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Checkout</h1>
       <h2 className="text-2xl font-meduim">Cart</h2>
       <div className="cart">{cart.length? `Your cart details are as follows:` : `Your Cart is empty`}</div>
       <ul className="list-decimal px-8">
       {cart.map((item)=>{
        return <li>
      {item[0]} with a price of {item[1]}
        </li>
       })}
       </ul>
       <div className="font-bold">
       Subtotal: {subtotal}
       </div>
     

      </div>
     
      <div className=" ">
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
            <div className="relative">
           
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
              <input   type="text" placeholder="Full Name" value={fullName} onChange={(event) => setFullName(event.target.value)} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="email"   className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
              <input type="phone" placeholder="phone" value={phone} onChange={(event) => setPhone(event.target.value)} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Address</label>
              <textarea type="address" placeholder="address" value={address} onChange={(event) => setAddress(event.target.value)}   className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
          </div>
          <div className="p-2 w-full">
           {/* <Link href="/success"> */}
            <button onClick={() => router.push('/success')} type="submit"  className="flex  text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Pay Now</button>
            {/* </Link>  */}
          </div>
        
        </div>
      </div>  
    </div>
  </section>
  </div>
  </form>
 
  )
}

export default Checkout