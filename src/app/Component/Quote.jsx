'use client'
import React, { useState } from 'react';

export default function Quote() {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://api.quotable.io/random');
      if (response.ok) {
        const data = await response.json();
        setQuote(`${data.content} - ${data.author}`);
      } else {
        setError('Failed to fetch data. Status: ' + response.status);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div>
    <div className='bg-pink-100 p-3 mt-32 w-36 ml-[630px] items-center text-center rounded-lg'>
      <button onClick={fetchData} disabled={loading}>Generate Random Quote</button>
      {loading && <p>Loading...</p>}
   
      {error && <p>Error: {error}</p>}
     
    </div>
    <div class="card ml-[523px] mt-[80px] bg-purple-100 w-[320px] h-[180px] rounded-xl justify-center text-center m-auto">
  <div class="card-header">
   
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
     { <p>{quote}</p>}
     
    </blockquote>
  </div>
</div>
</div>
    </>
  );
}
