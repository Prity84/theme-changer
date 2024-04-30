import React, {useState} from "react"
import ThemeContext from "./context/Themecontext"
import Header from "./components/Header"
import HeroSection from "./components/Herosection"

const App =()=>{
  const themeHook = useState("light")
  return(
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Header />
        <HeroSection />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
