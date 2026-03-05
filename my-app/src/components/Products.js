// // import React, { useEffect, useState } from "react";
// // import "./Products.css";
// // import axios from "axios";
// // import { useLocation } from "react-router-dom";

// // function Products() {
// //   const location = useLocation();               // ✅ INSIDE component
// //   console.log("Current path:", location.pathname);

// //   const [products, setProducts] = useState([]);

// //   useEffect(() => {
// //     axios.get("http://127.0.0.1:8000/Products/")
// //       .then(res => {
// //         console.log("Fetched products:", res.data);
// //         setProducts(res.data);
// //       })
// //       .catch(err => console.error(err));
// //   }, []);

// //   return (
// //     <div className="products-page">
// //   <h2 className="products-title">Product List</h2>

// //   {products.length > 0 ? (
// //     <div className="product-grid">
// //       {products.map(p => (
// //         <div className="product-card" key={p.id}>
// //           <div className="product-img">
// //             <img src={p.img} alt={p.name} />
// //           </div>

// //           <div className="product-info">
// //             <h3>{p.name}</h3>
// //             <p className="description">{p.description}</p>
// //             <p className="price">₹{p.price}</p>

// //             <button className="buy-btn">Add to Cart</button>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   ) : (
// //     <p className="no-product">No products found</p>
// //   )}
// // </div>
// //   );
// // }

// // export default Products;

// import React, { useEffect, useState } from "react";
// import "./Products.css";
// import axios from "axios";
// import { useLocation } from "react-router-dom";

// function Products() {
//   const location = useLocation();
//   console.log("Current path:", location.pathname);

//   const [products, setProducts] = useState([]);

//   // 🔹 Fetch products
//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/Products/")
//       .then((res) => {
//         setProducts(res.data);
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   // 🔹 ADD TO CART FUNCTION (HERE 👇)
//   const addToCart = async (productId) => {
//     try {
//       const token = localStorage.getItem("token");

//       if (!token) {
//         alert("Please login first");
//         return;
//       }

//       await axios.post(
//         "http://127.0.0.1:8000/api/add-to-cart/",
//         { product_id: productId },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       alert("Added to cart");
//     } catch (error) {
//       console.error(error);
//       alert("Failed to add to cart");
//     }
//   };

//   return (
//     <div className="products-page">
//       <h2 className="products-title">Product List</h2>

//       {products.length > 0 ? (
//         <div className="product-grid">
//           {products.map((p) => (
//             <div className="product-card" key={p.id}>
//               <div className="product-img">
//                 <img src={p.img} alt={p.name} />
//               </div>

//               <div className="product-info">
//                 <h3>{p.name}</h3>
//                 <p className="description">{p.description}</p>
//                 <p className="price">₹{p.price}</p>

//                 {/* ✅ CONNECT BUTTON */}
//                 <button
//                   className="buy-btn"
//                   onClick={() => addToCart(p.id)}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="no-product">No products found</p>
//       )}
//     </div>
//   );
// }

//export default Products;

// import React, { useEffect, useState } from "react";
// import "./Products.css";
// import axios from "axios";
// import { useLocation } from "react-router-dom";

// // 🔥 IMPORTANT
// axios.defaults.withCredentials = true;

// function Products() {
//   const location = useLocation();
//   console.log("Current path:", location.pathname);

//   const [products, setProducts] = useState([]);

//   // 🔹 Fetch products
//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/Products/", {
//         withCredentials: true,
//       })
//       .then((res) => {
//         setProducts(res.data);
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   // 🔹 ADD TO CART (SESSION BASED)
//   const addToCart = async (productId) => {
//     try {
//       await axios.post(
//         "http://127.0.0.1:8000/api/add-to-cart/",
//         { product_id: productId },
//         { withCredentials: true }
//       );

//       alert("Added to cart");
//     } catch (error) {
//       console.error(error);
//       alert("Please login first");
//     }
//   };

//   return (
//     <div className="products-page">
//       <h2 className="products-title">Product List</h2>

//       {products.length > 0 ? (
//         <div className="product-grid">
//           {products.map((p) => (
//             <div className="product-card" key={p.id}>
//               <div className="product-img">
//                 <img src={p.img} alt={p.name} />
//               </div>

//               <div className="product-info">
//                 <h3>{p.name}</h3>
//                 <p className="description">{p.description}</p>
//                 <p className="price">₹{p.price}</p>

//                 <button
//                   className="buy-btn"
//                   onClick={() => addToCart(p.id)}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="no-product">No products found</p>
//       )}
//     </div>
//   );
// }

// export default Products;

import React, { useEffect, useState } from "react";
import "./Products.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { addToCart } from "./cartApi";

function Products() {
  const location = useLocation();               // ✅ INSIDE component
  console.log("Current path:", location.pathname);

  const [products, setProducts] = useState([]);

  const handleAddToCart = async (productId) => {
    try {
      await addToCart(productId);
      alert("Added to cart successfully!");
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 401) {
        alert("Please login first to add items to cart.");
      } else {
        alert("Failed to add to cart.");
      }
    }
  };

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/Products/")
      .then(res => {
        console.log("Fetched products:", res.data);
        setProducts(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    /*<div>
      <h2>Product List</h2>

      {products.length > 0 ? (
        <ul>
          {products.map(p => (
            <li key={p.id}>
              <strong>{p.name}</strong><br />
              <img src={p.img} alt={p.name} style={{width: "100px", objectFit:"cover", height: "100px" }}/><br />
              {p.description}<br />
              ₹{p.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>No products found</p>
      )}
    </div>*/
    <div className="products-page">
      <h2 className="products-title">Product List</h2>

      {products.length > 0 ? (
        <div className="product-grid">
          {products.map(p => (
            <div className="product-card" key={p.id}>
              <div className="product-img">
                <img src={p.img} alt={p.name} />
              </div>

              <div className="product-info">
                <h3>{p.name}</h3>
                <p className="description">{p.description}</p>
                <p className="price">₹{p.price}</p>

                <button className="buy-btn" onClick={() => handleAddToCart(p.id)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-product">No products found</p>
      )}
    </div>
  );
}

export default Products;