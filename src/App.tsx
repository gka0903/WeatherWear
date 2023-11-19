import Home from './pages/Home'
import {store} from "./pages/redux/store";
import {Provider} from "react-redux";

function App() {
    return (
        <Provider store={store}>
            <Home/>
        </Provider>
    );
}

export default App;