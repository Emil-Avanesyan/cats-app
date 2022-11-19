import {BrowserRouter} from "react-router-dom";
import Layout from "./components/layout";
import AppRoutes from "./Routes";
import './styles/global.scss';
import './styles/_variables.scss';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Layout>
                <AppRoutes />
            </Layout>
        </div>
      </BrowserRouter>

  );
}

export default App;
