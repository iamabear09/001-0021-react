import React, { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleChange = () => setChecked((prev) => !prev);

  useEffect(() => {
    setLoading(true);

    fetch(`data/${checked ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
        setLoading(false);
        setProducts(data);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });

    return () => {
      console.log('🧹 깨끗하게 청소하는 일들을 합니다.');
    };
  }, [checked]);

  if (loading) return (<div>laoding...</div>);
  if (error) return (<div>error 발생...</div>)

  return (
    <>
      <input
        id='checkbox'
        type='checkbox'
        value={checked}
        onChange={handleChange}
      />
      <label htmlFor='checkbox'>Show Only 🔥 Sale</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
