import "./index.css";
import BlogGrid from "./componets/BlogGrid";
import Fomomessage from "./componets/Fomomessage";
import Form from "./componets/Form";
import Header from "./componets/Header";
import Video from "./componets/Video";
import './App.css'
import { Helmet } from "react-helmet";
import Footer from "./componets/Footer";

function App() {
  return (
    <>
       
      <div className="app-background">
        <Header />
        <Video />
        <Fomomessage />
        <BlogGrid />
        <div className="mb-8">
        {/* <Form /> */}
    </div>
        <Footer />
      </div>

    </>
  );
}

export default App;
