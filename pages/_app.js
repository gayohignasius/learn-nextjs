import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../share/components/header";
import { Provider } from "react-redux";
import { store } from "../share/redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
