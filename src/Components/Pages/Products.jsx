import React from 'react';
import {useDispatch , useSelector} from "react-redux"
import {addProduct} from "../app/Features/ProductSlice"

const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 1500,
    qty: 1,
    maxQty: 10,
    totalPrice: 1500,
    img: "https://images.pexels.com/photos/31915115/pexels-photo-31915115.jpeg"
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    price: 4500,
    qty: 1,
    maxQty: 8,
    totalPrice: 4500,
    img: "https://images.pexels.com/photos/7915276/pexels-photo-7915276.jpeg"
    // close-up of hands on an illuminated mechanical keyboard :contentReference[oaicite:6]{index=6}
  },
  {
    id: 3,
    name: "HD Monitor",
    price: 18000,
    qty: 1,
    maxQty: 5,
    totalPrice: 18000,
    img: "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg"
    // modern monitor setup in clean workspace :contentReference[oaicite:7]{index=7}
  },
  {
    id: 4,
    name: "USB-C Hub",
    price: 2200,
    qty: 1,
    maxQty: 12,
    totalPrice: 2200,
    img: "https://images.pexels.com/photos/12125553/pexels-photo-12125553.jpeg"
    // hub displayed with USB‑C cables in close focus
  },
  {
    id: 5,
    name: "External SSD 1TB",
    price: 11000,
    qty: 1,
    maxQty: 6,
    totalPrice: 11000,
    img: "https://images.pexels.com/photos/16010745/pexels-photo-16010745.jpeg"
    // SSD hardware image in tech setting
  },
  {
    id: 6,
    name: "Laptop Stand",
    price: 2700,
    qty: 1,
    maxQty: 15,
    totalPrice: 2700,
    img: "https://images.pexels.com/photos/5029848/pexels-photo-5029848.jpeg"
    // ergonomic laptop stand on desk
  },
  {
    id: 7,
    name: "Bluetooth Headphones",
    price: 3500,
    qty: 1,
    maxQty: 10,
    totalPrice: 3500,
    img: "https://images.pexels.com/photos/3394663/pexels-photo-3394663.jpeg"
    // headphone gear on table
  },
  {
    id: 8,
    name: "Gaming Chair",
    price: 25000,
    qty: 1,
    maxQty: 3,
    totalPrice: 25000,
    img: "https://images.pexels.com/photos/13871156/pexels-photo-13871156.jpeg"
    // ergonomic white gaming chair close-up :contentReference[oaicite:8]{index=8}
  },
  {
    id: 9,
    name: "Smartphone Holder",
    price: 900,
    qty: 1,
    maxQty: 25,
    totalPrice: 900,
    img: "https://images.pexels.com/photos/16591950/pexels-photo-16591950.jpeg"
    // phone on a stand in workspace
  },
  {
    id: 10,
    name: "Webcam 1080p",
    price: 3200,
    qty: 1,
    maxQty: 9,
    totalPrice: 3200,
    img: "https://images.pexels.com/photos/8115874/pexels-photo-8115874.jpeg"
    // webcam mounted on monitor close-up
  },
  {
    id: 11,
    name: "Portable Speaker",
    price: 2800,
    qty: 1,
    maxQty: 14,
    totalPrice: 2800,
    img: "https://images.pexels.com/photos/3394661/pexels-photo-3394661.jpeg"
    // small speaker on desk
  },
  {
    id: 12,
    name: "LED Desk Lamp",
    price: 1600,
    qty: 1,
    maxQty: 20,
    totalPrice: 1600,
    img: "https://images.pexels.com/photos/4042801/pexels-photo-4042801.jpeg"
    // desk lamp illuminating workspace
  },
  {
    id: 13,
    name: "Wireless Charger",
    price: 2100,
    qty: 1,
    maxQty: 11,
    totalPrice: 2100,
    img: "https://images.pexels.com/photos/4042802/pexels-photo-4042802.jpeg"
    // wireless phone charger pad
  },
  {
    id: 14,
    name: "Drawing Tablet",
    price: 9000,
    qty: 1,
    maxQty: 4,
    totalPrice: 9000,
    img: "https://images.pexels.com/photos/7160400/pexels-photo-7160400.jpeg"
    // tablet stylus and drawing pad
  },
  {
    id: 15,
    name: "Laptop Bag",
    price: 1800,
    qty: 1,
    maxQty: 18,
    totalPrice: 1800,
    img: "https://images.pexels.com/photos/1652200/pexels-photo-1652200.jpeg"
    // laptop bag on a simple surface
  }
];


const Products = () => {
    
    const dispatch = useDispatch()

    const data = useSelector((state)=> state.Cart)

    console.log(data);
    


  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-center text-indigo-600">Our Products</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-all"
          >
            <img
              src={`${product.img}?auto=compress&cs=tinysrgb&h=200`}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-600 mt-1">Price: Rs. {product.price.toLocaleString()}</p>
              <p className="text-gray-600">Qty: {product.qty}</p>
              <p className="text-gray-600">Max Qty: {product.maxQty}</p>
              <p className="text-indigo-600 font-medium mt-2">
                Total: Rs. {product.totalPrice.toLocaleString()}
              </p>
              <button onClick={()=>dispatch(addProduct(product))} className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition-all">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
