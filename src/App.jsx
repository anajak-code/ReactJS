import { useState } from 'react';
import Footer from './Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>សូមស្វាគមន៍មកកាន់ ReactJS! 🚀</h1>
        <p style={styles.subtitle}>
          កម្មវិធីដំបូងរបស់អ្នកដែលបានរៀបចំនៅលើ GitHub
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
              Reset
            </button>
            <button 
              style={{ ...styles.button, ...styles.incrementBtn }} 
              onClick={() => setCount(count + 1)}
            >
              ថែម (+)
            </button>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#0f172a',
    fontFamily: 'system-ui, sans-serif',
    margin: 0,
  },
  card: {
    backgroundColor: '#1e293b',
    padding: '2.5rem',
    borderRadius: '16px',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)',
    textAlign: 'center',
    maxWidth: '400px',
    width: '90%',
    color: '#f8fafc',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
  },
  subtitle: {
    color: '#94a3b8',
    fontSize: '0.9rem',
    marginBottom: '2rem',
  },
  counterBox: {
    backgroundColor: '#0f172a',
    padding: '1.5rem',
    borderRadius: '12px',
    border: '1px solid #334155',
  },
  countText: {
    fontSize: '1.2rem',
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
  },
  incrementBtn: {
    backgroundColor: '#3b82f6',
    color: '#ffffff',
  },
  decrementBtn: {
    backgroundColor: '#ef4444',
    color: '#ffffff',
  },
  resetBtn: {
    backgroundColor: '#64748b',
    color: '#ffffff',
  },
};

export default App;
