import React, { useState } from 'react';

export default function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginTop: '2rem' }}>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Contador: {count}</h3>
      <button onClick={() => setCount(count + 1)}>➕ Incrementar</button>
      <button onClick={() => setCount(count - 1)}>➖ Decrementar</button>
      <button onClick={() => setCount(0)} style={{ background: '#f44336' }}>🔄 Reset</button>
    </div>
  );
}
