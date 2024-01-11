import CreateCharacterForm from "./components/CreateCharacterForm";
import HeaderStyled from "./components/styles/Header.styled"
import React, { Component } from 'react'

class App extends Component {
  
  // State goes here!
  state = {
    fiveStarCharacters: [
      { name: "Himeko", elementType: "Fire", path: "Erudition", owned: true },
      { name: "Welt", elementType: "Imaginary", path: "Nihility", owned: true },
      { name: "Bronya", elementType: "Wind", path: "Harmony", owned: true },
      { name: "Gepard", elementType: "Ice", path: "Preservation", owned: false },
      { name: "Clara", elementType: "Physical", path: "Destruction", owned: false },
      { name: "Bailu", elementType: "Lightning", path: "Abundance", owned: true },
      { name: "Yanqing", elementType: "Ice", path: "Hunt", owned: false },
      { name: "Seele", elementType: "Quantum", path: "Hunt", owned: false },
      { name: "Jing Yuan", elementType: "Lightning", path: "Erudition", owned: false },
      { name: "Silver Wold", elementType: "Quantum", path: "Nihility", owned: false },
      { name: "Luocha", elementType: "Imaginary", path: "Abundance", owned: false },
      { name: "Blade", elementType: "Wind", path: "Destruction", owned: false },
      { name: "Kafka", elementType: "Lightning", path: "Nihility", owned: false },
      { name: "Imbibitor Lunae", elementType: "Imaginary", path: "Destruction", owned: false },
      { name: "Fu Xuan", elementType: "Quantum", path: "Preservation", owned: false },
      { name: "Jingliu", elementType: "Ice", path: "Destruction", owned: false },
      { name: "Topaz", elementType: "Fire", path: "Hunt", owned: false },
      { name: "Huo Huo", elementType: "Wind", path: "Abundance", owned: false },
      { name: "Argenti", elementType: "Physical", path: "Erudition", owned: false },
      { name: "Ruan Mei", elementType: "Ice", path: "Harmony", owned: true },
      { name: "Dr Ratio", elementType: "Imaginary", path: "Hunt", owned: true },
    ]
  }
  
  render() {
    return (
      <>
        <HeaderStyled>
          <h1 className='text-3xl font-bold font-serif text-sky-400 dark:text-sky-300'>
            D19: OOP & Class Components
          </h1>
        </HeaderStyled>
        
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-center my-4">Hello, Class Component</h2>
          
          <CreateCharacterForm />
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {
              this.state.fiveStarCharacters.map((chara, idx) => {
                // Define Tailwind CSS class based on elementType for each character
                const textColorClass = chara.elementType === "Physical" ? "text-gray-500 dark:text-gray-400"
                  : chara.elementType === "Fire" ? "text-red-700 dark:text-red-300"
                  : chara.elementType === "Ice" ? "text-sky-500 dark:text-blue-300"
                  : chara.elementType === "Lightning" ? "text-purple-600 dark:text-purple-300"
                  : chara.elementType === "Wind" ? "text-emerald-500 dark:text-emerald-300"
                  : chara.elementType === "Quantum" ? "text-indigo-600 dark:text-indigo-400"
                  : chara.elementType === "Imaginary" ? "text-yellow-500 dark:text-amber-300"
                  : "text-black";
                
                return (
                  <div key={idx} className="border border-none rounded text-center p-3 bg-slate-50 dark:bg-zinc-900">
                    <h3 className="text-xl font-semibold font-serif">{chara.name}</h3>
                    <p className="font-medium">
                      <span className={`font-semibold ${textColorClass}`}>{chara.elementType}</span> {chara.path}
                    </p>
                    <p className="text-amber-300">✦ ✦ ✦ ✦ ✦</p>
                    
                    <div className="flex items-center justify-center gap-4">
                      <button>edit</button>
                      <button>delete</button>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </>
    )
  }
}

export default App
