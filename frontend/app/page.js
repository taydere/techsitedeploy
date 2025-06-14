'use client';

import { useState } from 'react';

export default function HomePage() {
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:8000/api/submit/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ value }),
    });

    if (res.ok) {
      setMessage('Submitted successfully!');
      setValue('');
    } else {
      setMessage('Failed to submit.');
    }
  };

  return (
    <main style={{ padding: 20 }}>
      <h1>Submit a Value</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </main>
  );
}