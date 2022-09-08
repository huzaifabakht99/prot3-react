// import logo from './logo.svg';
import './App.css';
import { NewUser } from './Pages/NewUser';
import { ReturningUser } from './Pages/ReturningUser';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SignIn } from './Pages/SignIn';
import { Header } from './Components/Header';
import { EditContactInfo } from './Components/EditContactInfo';
import { OrderDetail } from './Pages/OrderDetail';
import { CartMenubar } from './Components/CartMenubar';






function App() {
  return (
    <>
    {/* <Input flagIcon={true} placeholder={'Phone Number'} button={true}/>
    <DeliveryType DeliveryType={'Standard'} heading={' (6 to 9 business days) '} price={'$5.95'} date={' Thurs, Jan 16'}/>
    <PaymentMethod/>
    <Checkpoints/>
    <CartMenubar/>
    <Cart/>
    <Otp/>
    <O3ds/>
    <TotalCard/>
    <OrderReviewCards heading={'contact'} subheading={'card'} iconUrl={'../assets/Gruop7536.svg'} text={"03305281803"} btn={true} verified={true}/> */}
   
    {/* <ReturningUser/>
    <OrderDetail/> */}
    <Header/>
    {/* <Router>
    <Routes>
        <Route  path='/' element={<SignIn/>} />
        <Route  path='/new-user' element={<NewUser/>} />
        <Route  path='/returning-user' element={<ReturningUser/>} />
      </Routes>
    </Router> */}
    {/* <EditContactInfo/> */}
    <OrderDetail/>
    <ReturningUser/>

    <footer  className='cartFixed'><CartMenubar/></footer>
 
   
    </>
  );
}

export default App;
