import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Results from './components/Results';
import PageNotFound from './PageNotFound';

function App() {

  return (
    
    <BrowserRouter>
    
    <div className="App">
    
       <section className='pt-10 pb-20'>
       <h1 className='text-2xl font-bold'>List of Frugalcodes Github Repositories</h1>
       </section>
       <Routes>
      
        <Route path='/' exact element={<Home />} />
      
        <Route path='/:id'  exact element={<Results />}/>
        <Route path='/*'  element={<PageNotFound />} />
       
        </Routes>
       
    </div>
    
    </BrowserRouter>
    
  );
}

export default App;
