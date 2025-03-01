import './App.css';
import sectionData from '../public/sectionProps.json';

import headerSection from './sections/header';


function App() {

  return (
    <>
      <h1 className='Title'>README.md Generator</h1>
      <div className='Input'>
        {sectionData.map((section) => {
          return(<div className='sectionQuestion'>
            <input type='checkbox'/> <p>{section}?</p>
            
          </div>
        )})}
      </div>
      <div className='Output'>

      </div>
    </>
  )
}

export default App
