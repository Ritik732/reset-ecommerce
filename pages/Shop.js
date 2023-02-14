import React from 'react'
import Link from 'next/link'

import Image from 'next/image'
import ReactPlayer from 'react-player'

const Shop = (props) => {
  const trackClick = () => {
    window.analytics.track("Clicked Button", {
      category: "Button",
      label: "Clicked Button Label",
    });
  };
  return (
    
    <div className='container mx-auto px-4'>
      <section className="text-gray-600 body-font">
        <div className="container px-5 md:py-24 mx-auto">
          <div className="flex flex-wrap w-full md:mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Showing all 4 results</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            {/*   */}
          </div>
          <div className="flex flex-wrap -m-4">
            {props.products.data.map((item) => {
              console.log("addto cart")

              return (
                <div key={item.attributes.slug} className="xl:w-1/4 md:w-1/2 p-4">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <img src={item.attributes.image.data && item.attributes.image.data.attributes.name} alt="content" width={500} height={500} />


                    {/* <ReactPlayer url='http://localhost:1337/uploads/R3set_video_2_03275534d0.mp4' /> */}

                    {/* <video autoPlay loop style={{ width: '500px', height: '500px' }}>
        <source src={item.attributes.video.data && item.attributes.video.data.attributes.name} />
      </video> */}

                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{item.attributes.title}</h2>
                    <p className="leading-relaxed text-base">{item.attributes.description}</p>
                    <Link href={`/product/${item.attributes.slug}`}><button onClick={trackClick} className=" my-2 text-white bg-indigo-500 border-0 py-1 md:py-2 px-4 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Buy now</button></Link>
                  </div>
                </div>

              )

            })}

          </div>
        </div>
      </section>
    </div>
  )
}
export async function getServerSideProps(context) {
  let headers = { Authorization: "Bearer 09171d83301cfd8eda584b7d9108595c28726aeb132a6f9ad3d4e61d51259415fe75640e362d5bd535a339681f1a1925175587074ae69c0f9d6e5dc665c0f0671e3a117b0cac96728129bf1e3950008b29f8ca19d573fea7825764dd7bde77eee74bacc2f703d758c74bef56bc93a5e8e6ef2cf2faca6bad1752115879ea49a3" }
  let a = await fetch("http://localhost:1337/api/products?populate=*", { headers: headers })
  let products = await a.json()
  console.log(products)
  return {
    props: { products: products },
  }
}
export default Shop