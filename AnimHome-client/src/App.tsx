import './App.css'

function App() {


  return (
    <>
      {/* <div style={{background: "#ffe4c4", height: "100vh", width: "100vw", border:"1px solid #4C4B57" }}> */}
      <div className='bg-background-primary border border-solid  border-border'>
          <p style={{color: "#6D6875"}}>text light</p>
          <p style={{color: "#333333"}}>text primary</p>
          <p style={{color: "#1F1F1F"}}>text dark</p>
        <div className='grid grid-cols-3 grid-rows-2 gap-4'>
        {/* <button style={{background: "#FFD700", color: "#6D6875", border:"1px solid #4C4B57"}}>main color light text</button> */}
        <button className='bg-primary' style={{color: "#6D6875", border:"1px solid #4C4B57"}}>main color light text</button>
        <button style={{background: "#FFD700", color: "#333333", border:"1px solid #d4d4d4"}}>main color primary text</button>
        <button style={{background: "#FFD700", color: "#1F1F1F"}}>main color dark text</button>
        <button style={{background: "#f2f5ff", color: "#6D6875", border:"1px solid #4C4B57"}}>secondary color light text</button>
        <button style={{background: "#f2f5ff", color: "#333333", border:"1px solid #d4d4d4"}}>secondary color primary text</button>
        <button style={{background: "#f2f5ff", color: "#1F1F1F"}}>secondary color dark text</button>
        </div>
        <div style={{display: "flex", gap: "20px", padding: "40px", justifyContent: "center"}}>
          <div style={{height: "350px", width: "350px", background:"#fef9f8" }}>
          <p style={{color: "#6D6875"}}>text light</p>
          <p style={{color: "#333333"}}>text primary</p>
          <p style={{color: "#1F1F1F"}}>text dark</p>
          </div>
          <div style={{height: "350px", width: "350px", background:"#fef9f8", border:"1px solid #d4d4d4"}}></div>
          <div style={{height: "350px", width: "350px", background:"#fef9f8"}}></div>
        </div>

      </div>
    </>
  )
}

export default App
