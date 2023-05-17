// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import CartItem from "./CartItem";
// import "./CartPage.css";
// import axios from "axios";
// function CartPage() {

//   const [cartItems, setCartItems] = useState([]);

//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchCartData();
//   }, []);

//   const fetchCartData = async () => {
//     try {
//       console.log("inside cart fetch data");
//       const response = await axios.get("/cart");
//       const cartData = response.data.cartItems;
//       setCartItems(cartData);    
//     } catch (error) {
//       console.error(error);
//       alert(error.message);
//     }
//   };

//   // const removeItem = (index) => {
//   //   // console.log("inside remove");
//   //   setCartItems(cartItems.filter((_, i) => i !== index));
//   //   // console.log(index);
//   // };
//   const removeItem = async (itemId) => {
//     try {
//       const response = await axios.delete(`/cart/remove/${itemId}`);
//       fetchCartData(); // Fetch updated cart data after removing the item
//       alert(response.data.message);
//     } catch (error) {
//       console.error(error);
//       alert(error.message);
//     }
//   };
  

//   const totalPrice = cartItems.reduce((total, item) => {
//     return total + Number(item.price);
//   }, 0);

//   return (
//     <div className="Cart-body">
//       <h1 className="Shopping-Cart-heading">Your Cart</h1>

//       <div className="Content">
//         <div className="Items-list">
//           <div className="SubHead-incart">
//             {cartItems.length} Courses in Cart{" "}
//           </div>
//           <ul className="Cart-item-container">
//             {cartItems.length >0 && cartItems.map((item) => (
//               <li key={item._id}>
//                 <CartItem
//                   title={item.title}
//                   image={item.imgUrl}
//                   price={item.price}
//                   duration={item.duration}
//                   instructor={item.instructor}
//                   rating={item.rating}
//                   onRemove={() => removeItem(item._id)}
//                 />
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="checkout-Container">
//           <div className="checkout-content">
//             <h3>Total Price :</h3>
//             {/* Display the total price */}
//             <h2>$ {totalPrice}</h2>
//             <button
//               className="check-out-btn"
//               onClick={() => {
//                 navigate("/checkout");
//               }}
//             >
//               Checkout
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CartPage;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import "./CartPage.css";
import axios from "axios";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [cartId, setCartId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchCartData();
  }, []);

  const fetchCartData = async () => {
    try {
      console.log("inside cart fetch data");
      const response = await axios.get("/cart");
      const { cartId, cartItems } = response.data;
      setCartId(cartId);
      setCartItems(cartItems);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const removeItem = async (itemId) => {
    try {
      alert(itemId) ;
      await axios.delete(`/cart/remove/${itemId}`);
      fetchCartData(); // Fetch updated cart data after removing the item
      alert("Item removed from cart");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const totalPrice = cartItems.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  return (
    <div className="Cart-body">
      <h1 className="Shopping-Cart-heading">Your Cart</h1>

      <div className="Content">
        <div className="Items-list">
          <div className="SubHead-incart">
            {cartItems.length} Courses in Cart
          </div>
          <ul className="Cart-item-container">
            {cartItems.length > 0 &&
              cartItems.map((item) => (
                <li key={item._id}>
                  <CartItem
                    title={item.title}
                    image={item.imgUrl}
                    price={item.price}
                    duration={item.duration}
                    instructor={item.instructor}
                    rating={item.rating}
                    onRemove={() => removeItem(item._id)}
                  />
                </li>
              ))}
          </ul>
        </div>
        <div className="checkout-Container">
          <div className="checkout-content">
            <h3>Total Price:</h3>
            <h2>$ {totalPrice}</h2>
            <button
              className="check-out-btn"
              onClick={() => {
                navigate("/checkout");
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;

