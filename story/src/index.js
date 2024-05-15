import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header1 from './components/Header1';
import MenuBar1 from './components/Menubar1';
import ApplyForm1 from './components/ApplyForm1';
import Main from './pages/Main';
import Major1 from './components/Major1';
import Login1 from './components/Login1';
import Normal from "./components/Normal";
import Certification from "./components/Certification";
import ApplyBook from "./components/ApplyBook";
import MajorDetail from './components/MajorDetail';
import DetailItem from './components/DetailItem';

const rootNode = document.getElementById('root');

ReactDOM.createRoot(rootNode).render(
  <BrowserRouter>
    <Header1 />
    <MenuBar1 />

    <Routes>
      <Route path='/' Component={Main}/>
      <Route path = '/auth' Component={ApplyForm1}/>
      <Route path = '/major' Component={Major1}/>
      <Route path = '/login' Component={Login1} />
      <Route path = '/normal' Component={Normal}/>
      <Route path = '/certification' Component={Certification}/>
      <Route path = '/applyBook' Component={ApplyBook}/>
      <Route path = '/majorDetail' Component={MajorDetail}/>
      <Route path = '/detailItem' Component={DetailItem}/>

    </Routes>
  </BrowserRouter>
);



/**
 * 
 *  <Routes>
                <Route exact path='/major' component={MajorPage}></Route>
                //<Route exact path='/myPage' component={MyPage}></Route>
        </Routes>
 *                 <Route exact path='/certified' component={CertifiedPage}></Route>

 */