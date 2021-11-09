import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet/Greet';
import MyGreet from './components/Greet/MyGreet';
import Welcome from './components/Welcome/Welcome';
import MyWelcome from './components/Welcome/MyWelcome';
import Message from './components/State/Message';
import MyMessage from './components/State/MyMessage';
import Counter from './components/SetState/Counter';
import MyCounter from './components/SetState/MyCounter';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Saurabh"/>
      <Greet name="Swati"/>
      <Greet name="Snoopy"/> */}
      {/* <MyGreet name="SuperMan"/>
      <MyGreet name="BatMan"/>
      <MyGreet name="SpiderMan"/> */}
       {/* <Welcome name="Saurabh"/>
       <Welcome name="Swati"/>
       <Welcome name="Snoopy"/> */}
      {/* <MyWelcome name="SuperMan"/>
      <MyWelcome name="BatMan"/>
      <MyWelcome name="SpiderMan"/> */}
      {/* <Message/> */}
      <MyMessage/>
      {/* <Counter/> */}
      {/* <MyCounter/> */}
      
      
    </div>
  );
}

export default App;
