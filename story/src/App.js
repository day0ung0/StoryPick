import { Route } from 'react';
import { Routes } from 'react-router-dom';


import Main from './pages/Main';
import Join from './pages/Join';
import CertifiedPage from './pages/CertifiedPage';
import MajorPage from './pages/MajorPage'
import MyPage from './pages/MyPage';

function App() {
  return (
       <></>
    );
}

export default App;


/*
        <Route exact path='/auto' component={Authority}/>
        <Route exact path='/join' component={Join}/>
        
*/



/*
        <Route exact path='/certified' component={Certified}/>
        <Route exact path='/normal' component={Normal}/>
        <Route exact path='/apply' component={Apply}/>
        <Route exact path='/mypage' component={MyPage}/>
*/

/*
0503
 <>
        <Main />
        <Routes>
                <Route exact path='/' component={Join}></Route>
                <Route exact path='/certified' component={CertifiedPage}></Route>
                <Route exact path='/major' component={MajorPage}></Route>
                <Route exact path='/myPage' component={MyPage}></Route>
        </Routes>
    </>
    


*/