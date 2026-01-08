import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 useEffect runs once when component mounts
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []); // empty array = run only once

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        🛍️ Products List
      </h1>

      {loading ? (
        <p className="text-center text-lg">Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-40 w-full object-contain mb-4"
              />

              <h2 className="font-semibold text-sm mb-2 line-clamp-2">
                {product.title}
              </h2>

              <p className="text-green-600 font-bold mb-2">
                ₹ {product.price}
              </p>

              <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}