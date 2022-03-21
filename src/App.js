import { useAlert } from 'react-alert'; 
import './App.css';

function App() {
  const alert = useAlert();
  const fun = () =>{
    alert.error("This is an alert with extra actions!", {
      title: "Alert with extra actions!",
      actions: [
        {
          copy: "Do something",
        },
      ],
    });
  }
  return (
    <div className="App">
        <button onClick={fun}>Click here</button>
    </div>
  );
}

export default App;
