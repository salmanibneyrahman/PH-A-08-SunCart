import { useState, useEffect } from "react";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLiveProducts = async () => {
      try {
        setLoading(true);
        // 🚀 আপনার রেন্ডারের লাইভ লিংকটি এখানে ১ বার বসাবেন
        const response = await fetch("https://suncart-website.onrender.com");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("API Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchLiveProducts();
  }, []);

  return { products, loading };
}
