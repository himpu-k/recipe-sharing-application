import './App.css';
import RecipeList from './components/RecipeList';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipeDetail from './components/RecipeDetail';
import { RecipeProvider } from './components/RecipeContext';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Recipe Sharing</h1>
      </header>
      <RecipeProvider>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetail />} />
      </Routes>
    </BrowserRouter>
    </RecipeProvider>
    </div>
  );
}

export default App;
