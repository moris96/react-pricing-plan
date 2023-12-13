import PricingPlan from "./components/PricingPlan/PricingPlan";
// import DarkMode from "./components/DarkMode/DarkMode";

function App() {

  // const style = {
  //   minHeight: "100vh",
  //   textAlign: "center",
  //   paddingTop: "10rem",
  //   backgroundColor: "#f5f5f5",
  // }

  // console.log(style)




  return (
    <div className="App" >

      {/* <header className="App-header" >
        <PricingPlan/>
        
        <div className="darkness">
          <DarkMode/>
          
        </div>
        
      </header> */}


      {/* <div className="darkness"><DarkMode/></div> */}
      <PricingPlan/>
    </div>
  );
}

export default App;
