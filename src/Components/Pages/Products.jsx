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
    img: "https://www.laraibnow.com/images/product_gallery/1668256359_Capture.PNG"
    // hub displayed with USB‑C cables in close focus
  },
  {
    id: 5,
    name: "External SSD 1TB",
    price: 11000,
    qty: 1,
    maxQty: 6,
    totalPrice: 11000,
    img: "https://shop.sandisk.com/content/dam/store/en-us/assets/products/portable/extreme-pro-usb-3-1-ssd/gallery/extreme-pro-usb-3-1-ssd-front.png.thumb.1280.1280.png"
    // SSD hardware image in tech setting
  },
  {
    id: 6,
    name: "Laptop Stand",
    price: 2700,
    qty: 1,
    maxQty: 15,
    totalPrice: 2700,
    img: "https://alaqsa.com.pk/wp-content/uploads/2022/08/1_1f4f6e7d-d4c6-4330-94d5-033840cc898f_700x700.webp"
    // ergonomic laptop stand on desk
  },
  {
    id: 7,
    name: "Bluetooth Headphones",
    price: 3500,
    qty: 1,
    maxQty: 10,
    totalPrice: 3500,
    img: "https://www.eshopnow.pk/cdn/shop/products/Lenovo-HE05-Neckband-Bluetooth-Headset-img1.jpg?v=1691707057&width=1000"
    // headphone gear on table
  },
  {
    id: 8,
    name: "Gaming Chair",
    price: 25000,
    qty: 1,
    maxQty: 3,
    totalPrice: 25000,
    img: "https://workspace.com.pk/wp-content/uploads/2023/03/gaming-chair-post-07-700x700-1.jpg"
    // ergonomic white gaming chair close-up :contentReference[oaicite:8]{index=8}
  },
  {
    id: 9,
    name: "Smartphone Holder",
    price: 900,
    qty: 1,
    maxQty: 25,
    totalPrice: 900,
    img: "https://img.drz.lazcdn.com/static/pk/p/2000d598ff95b29139a0a28ccb429b2d.jpg_720x720q80.jpg"
    // phone on a stand in workspace
  },
  {
    id: 10,
    name: "Webcam 1080p",
    price: 3200,
    qty: 1,
    maxQty: 9,
    totalPrice: 3200,
    img: "https://a4tech.com.pk/cdn/shop/files/PK980HA_3.png?v=1730532391"
    // webcam mounted on monitor close-up
  },
  {
    id: 11,
    name: "Portable Speaker",
    price: 2800,
    qty: 1,
    maxQty: 14,
    totalPrice: 2800,
    img: "https://flyingcart.pk/cdn/shop/files/tronsmart-t7-mini-portable-bluetooth-speaker.jpg?v=1713524990"
    // small speaker on desk
  },
  {
    id: 12,
    name: "LED Desk Lamp",
    price: 1600,
    qty: 1,
    maxQty: 20,
    totalPrice: 1600,
    img: "https://winshop.pk/cdn/shop/files/Portable-LED-Desk-Lamp.jpg?v=1735381099"
    // desk lamp illuminating workspace
  },
  {
    id: 13,
    name: "Wireless Charger",
    price: 2100,
    qty: 1,
    maxQty: 11,
    totalPrice: 2100,
    img: "https://corporategifts.pk/cdn/shop/files/OFA005CG-b-min.jpg?v=1725624069&width=1445"
    // wireless phone charger pad
  },
  {
    id: 14,
    name: "Drawing Tablet",
    price: 9000,
    qty: 1,
    maxQty: 4,
    totalPrice: 9000,
    img: "https://cdn.mos.cms.futurecdn.net/mdMF9qXEukPWGBABhtdon4.jpg"
    // tablet stylus and drawing pad
  },
  {
    id: 15,
    name: "Laptop Bag",
    price: 1800,
    qty: 1,
    maxQty: 18,
    totalPrice: 1800,
    img: "https://harshaystore.pk/cdn/shop/files/Mochila-informal-ligera-para-hombre-y-mujer-bolsa-para-ordenador-port-til-de-14-pulgadas-15_900x.webp?v=1708528860"
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
