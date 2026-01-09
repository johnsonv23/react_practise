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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition"
            >
              
              <div className="group relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-40 w-full object-contain mb-4"
                />
                <p className="absolute top-0 right-0 border-2 px-2 border-hidden text-2xl items-center bg-amber-500 rounded-[50%]">{product.id}</p>
                <h2 className="text-center text-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 font-semibold mb-2 line-clamp-2">
                  {product.title}
                </h2>
              </div>

              <div className="flex justify-center gap-5 items-center">
                <p className="text-green-600 text-2xl font-bold mb-2">
                  ₹ {product.price}
                </p>
                <p className="text-yellow-600 text-2xl font-bold mb-2">
                  ⭐: {product.rating.rate}
                </p>
              </div>

              <button className=" bg-blue-900 text-white py-2 px-3 rounded hover:bg-gray-800">
                Add to Cart
              </button>


            </div>
          ))}
        </div>
      )}
    </div>
  );
}