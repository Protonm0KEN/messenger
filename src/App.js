
import './App.scss';
import MessengerFooter from './components/MessengerFooter/MessengerFooter';
import MessengerHeader from './components/MessengerHeader/MessengerHeader';
import MessengerMain from './components/MessengerMain/MessengerMain';

function App() {
  return (
    <div className="App">
      <div className='App__container container'>
        <div className='messenger'>
          <div className='messenger__wrapper'>
            <MessengerHeader />
            <MessengerMain/>
            <MessengerFooter/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
