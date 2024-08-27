import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

const DisplayData = () => {
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/users'
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className='contenedor-tarjetas'>
      <div className='tarjetas'>
        {data.map((item) => (
          <div key={item.id} className='tarjeta'>
            <h2 className='titulo-tarjeta'>{item.name}</h2>
            <p className='subtitulo-tarjeta'>{item.company.catchPhrase}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayData;
