import ReactDOM from "react-dom/client";
import App from "./App";


const persons = [
  {
    name: 'John Smith'
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <App persons={persons} />
)
