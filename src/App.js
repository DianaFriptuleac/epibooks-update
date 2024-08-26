
import 'bootstrap/dist/css/bootstrap.min.css' ;
import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
//import AllTheBooks from './components/AllTheBooks';
//import SingleBook from './components/SingleBook';
import fantasy from './assets/books/fantasy.json'
import BookList from './components/BookList';

function App() {
  return (
    <>
      <header className='myHeader'>
    <MyNav/>
    <h1 className='text-center mt-3 display-2 fw-bold'> Epicode Books</h1>
    <Welcome className='small-alert'/>
      </header>
   
    <main>
    <div>
   
    </div>
    <div>
      {/*<AllTheBooks/>*/}
      {/*<SingleBook libro={fantasy[0]} />*/}

      <BookList libri ={fantasy}/>
    </div>
    </main>
    <footer>
    <MyFooter/>
    </footer>
    </>
  );
}

export default App;
