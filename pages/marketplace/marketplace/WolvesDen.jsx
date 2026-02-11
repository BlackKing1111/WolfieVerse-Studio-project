export default function WolvesDen({ children }) {
  return (
    <div style={{ 
      width: "100%", 
      minHeight: "100vh", 
      backgroundColor: "#000", 
      color: "#fff",
      padding: 40 
    }}>
      <h1>Wolves’ Den Environment</h1>
      <p>This component will display your SuperCool visuals.</p>

      <div style={{ marginTop: 40 }}>
        {children}
      </div>
    </div>
  );
}
