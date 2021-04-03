import Appbar from './Appbar';
import RightContent1 from './RightContent1';
import Footer from './Footer';
import LeftContent from './LeftContent';
import "./index.css";
import TopContent from './TopContent';

const App = () => {
return(
     <>
     <Appbar/>
     <TopContent/>
     <div className="merge1">
     <RightContent1/>
     <LeftContent/>
     </div>
     <div className="merge2">
     <LeftContent/>
     <RightContent1/>
     </div>
     <Footer/>
     </>
);

}

export default App;