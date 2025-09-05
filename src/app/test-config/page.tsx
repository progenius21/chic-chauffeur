export default function TestConfig() {
  return (
    <div style={{ 
      padding: '50px', 
      backgroundColor: 'lime', 
      color: 'black', 
      fontSize: '24px',
      textAlign: 'center',
      minHeight: '100vh'
    }}>
      <h1>CONFIGURATION TEST</h1>
      <p>If you can see this page, the allowedDevOrigins is working!</p>
      <p>Timestamp: {new Date().toISOString()}</p>
    </div>
  );
}
