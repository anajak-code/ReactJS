function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        © {currentYear} រក្សាសិទ្ធិគ្រប់យ៉ាងដោយ Anajak Code
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: '2rem',
    paddingTop: '1rem',
    borderTop: '1px solid #334155',
  },
  text: {
    color: '#64748b',
    fontSize: '0.8rem',
    margin: 0,
  },
};

export default Footer;
