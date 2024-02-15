import {BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";
import Layout from "./components/Layout";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
//import { useAppContext } from "./contexts/AppContext";


const App = ()=>{
 
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Layout><p>Home Page</p></Layout>}/>
        <Route path="/Search" element={<> Search Page</>}/>
        <Route path="/register" element={<Layout><Register/></Layout>}/>
        <Route path="/sign-in" element={<Layout><SignIn/>
        </Layout>}
        />
        </Routes>
    </Router>
  );
}
export default App;