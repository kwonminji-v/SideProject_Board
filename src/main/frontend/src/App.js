import './App.css';



function App() {


  return (
      <>
          <div className="App-header" style={{ width:"99vw" ,height:"auto", border:"2px solid red"}}>
              네비게이션 bar 입니다.
              <p>---------------------------------------------------------</p>
              <div style={{display:"flex"}}>
              <input type="text" id="inputValue"/>
                  <button id="sendInfo" style={{marginLeft:"15px"}}> DB로 전송해보자 </button>
              </div>
            </div>
          <div style={{ width:"99vw" ,height:"auto", background:"yellow"}}>
              body 부분입니다.
              <p>---------------------------------------------------------</p>
              <div style={{background:"red", height:"auto"}}>
                  section부분입니다.

              </div>
              <p>---------------------------------------------------------</p>
              <div style={{background:"blue",  width:"99vw", height:"auto"}}>
                  footer입니다.
                  <p>---------------------------------------------------------</p>
              </div>
          </div>

      </>

  );
}

export default App;
