import { useState } from 'react'

import { Configuration, OpenAIApi } from 'openai'

import './App.css'

import OptionSelection from './components/OptionSelection';
import Translate from './components/Translate';
import { arrayItems } from './AIOptions';


function App() {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });

  const openai = new OpenAIApi(configuration);

  const [option, setOption] = useState({});
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");


  const selectOption = (option) => {
    setOption(option);
  };

  const dostuff = async () => {
    let object = { ...option, prompt: input};
    const response = await openai.createCompletion(object);
    setResult(response.data.choices[0].text);

  }
 


  return (

    
    <div className="app-main" id='app-main'>
      
      <nav className="navbar">
        <h1 className="logo"><span>PANDEY</span> G</h1>
      </nav>


      {Object.values(option).length === 0 ? (
          <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
        ) : ( 
              <Translate dostuff={dostuff} setInput={setInput} result={result}/> 
            )}

      <footer>
        <div>
          <p classNameName='cpr'>
            This React AI APP work on ChatGPT(Open AI), it's build by PandeyG in React. 
          </p>
        </div>
  
        <div className="footer-copyright">
            <p>Copyright @ 2023 All Rights Reserved To PandeyG.</p>
        </div>
      </footer>
      
    </div>
  );
}

export default App
