import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrementQty, incrementQty, removeProduct } from "../app/Features/ProductSlice";
import { Trash2 } from "lucide-react";

const BillPage = () => {
  const cartItem = useSelector((state) => state.Cart);
  const dispatch = useDispatch();

  const totalPrice = cartItem.reduce(
    (acc, curr) => acc + curr.price * curr.qty,
    0
  );

  return (
    <div className="w-full px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-gray-200 p-6 sm:p-8 rounded-2xl shadow-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          🧾 Checkout Summary
        </h2>

        <div className="w-full overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-100 text-gray-700 text-left text-sm sm:text-base">
                <th className="py-3 px-4">#</th>
                <th className="py-3 px-4">Product</th>
                <th className="py-3 px-4">Qty</th>
                <th className="py-3 px-4">Price</th>
                <th className="py-3 px-4">Total</th>
                <th className="py-3 px-4">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItem.map((item, index) => (
                <tr key={item.id} className="border-t hover:bg-gray-50 text-sm sm:text-base">
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4 flex items-center gap-3">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover"
                    />
                    <span className="whitespace-nowrap">{item.name}</span>
                  </td>
                  <td className="py-2 px-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => dispatch(decrementQty(item))}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                        disabled={item.qty === 1}
                      >
                        −
                      </button>
                      <span>{item.qty}</span>
                      <button
                        onClick={() => dispatch(incrementQty(item))}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                        disabled={item.qty === item.maxQty}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="py-2 px-4 whitespace-nowrap">Rs {item.price.toLocaleString()}</td>
                  <td className="py-2 px-4 whitespace-nowrap">
                    Rs {(item.price * item.qty).toLocaleString()}
                  </td>
                  <td className="py-2 px-4">
                    <button
                      onClick={() => dispatch(removeProduct(item))}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
              <tr className="font-semibold bg-gray-100 border-t text-sm sm:text-base">
                <td colSpan="4" className="py-3 px-4 text-right">
                  Grand Total:
                </td>
                <td className="py-3 px-4 text-green-600">
                  Rs {totalPrice.toLocaleString()}
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition w-full sm:w-auto">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillPage;
