import React, { useState } from 'react';

export default function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>Contador: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: '1rem' }}>Decrementar</button>
    </div>
  );
}
