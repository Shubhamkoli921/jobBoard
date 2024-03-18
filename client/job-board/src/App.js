import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/main";
import { Provider } from "react-redux";
import store from "./components/redux/store";
import Login from "./components/login&Signup/login";
import ApplyPage from "./components/apply/apply";
import PaymentForm from "./components/jobDash/donate";



function App() {
  return (
    <>
      <Provider store={store} >

        <BrowserRouter>
          <Routes>
            <Route path="/jobs" element={<Main />} />
            <Route path="/" element={<Login />} />
            <Route path="/apply/:jobId" element={<ApplyPage />} />
            <Route path="/home" element={<PaymentForm />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
