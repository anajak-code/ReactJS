import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <header style={styles.card}>
        <h1 style={styles.title}>សូមស្វាគមន៍មកកាន់ ReactJS! 🚀</h1>
        <p style={styles.subtitle}>
          នេះជាកម្មវិធីដំបូងរបស់អ្នកដែលបានបង្កើតឡើងដោយជោគជ័យ។
        </p>

        <div style={styles.counterBox}>
          <p style={styles.countText}>ចំនួនចុច៖ <strong>{count}</strong></p>
          <div style={styles.buttonGroup}>
            <button 
              style={{ ...styles.button, ...styles.decrementBtn }} 
              onClick={() => setCount(count - 1)}
            >
              ដក (-)
            </button>
            <button 
              style={{ ...styles.button, ...styles.resetBtn }} 
              onClick={() => setCount(0)}
            >
              កំណត់ឡើងវិញ
            </button>
            <button 
              style={{ ...styles.button, ...styles.incrementBtn }} 
              onClick={() => setCount(count + 1)}
            >
              បន្ថែម (+)
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

// Inline CSS Styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f3f4f6',
    fontFamily: 'system-ui, sans-serif',
    margin: 0,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '2.5rem',
    borderRadius: '16px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
    textAlign: 'center',
    maxWidth: '420px',
    width: '90%',
  },
  title: {
    color: '#1f2937',
    fontSize: '1.75rem',
    marginBottom: '0.5rem',
  },
  subtitle: {
    color: '#6b7280',
    fontSize: '0.95rem',
    marginBottom: '2rem',
  },
  counterBox: {
    backgroundColor: '#f9fafb',
    padding: '1.5rem',
    borderRadius: '12px',
    border: '1px solid #e5e7eb',
  },
  countText: {
    fontSize: '1.2rem',
    color: '#374151',
    marginBottom: '1rem',
  },
  buttonGroup: {
    display: 'flex',
    gap: '0.5rem',
    justifyContent: 'center',
  },
  button: {
    padding: '0.6rem 1rem',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'opacity 0.2s',
  },
  incrementBtn: {
    backgroundColor: '#2563eb',
    color: '#ffffff',
  },
  decrementBtn: {
    backgroundColor: '#ef4444',
    color: '#ffffff',
  },
  resetBtn: {
    backgroundColor: '#9ca3af',
    color: '#ffffff',
  },
};

export default App;

