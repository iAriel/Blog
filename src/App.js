import './App.css';
import Header from './components/header'
import Card from './components/card'

import Data from './data.js'
function App() {
  return (
    <div className="App">
      <Header />
      {Data.map((post) => {
        return(
          <Card 
            key={post.id}
            date={post.date}
            title={post.title}
            content={post.content}
          />
        )
      })}
    </div>
  );
}

export default App;
