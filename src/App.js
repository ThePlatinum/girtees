import Footer from "./components/footer/footer";
import Header from "./components/header/header";

export default function App(){
  const menuItems = [
    {
      name : 'How it all started',
      route : '/started'
    },
    {
      name : 'Giving Back',
      route : '/give'
    },
    {
      name : 'Become a VIP member',
      route : '/vip'
    }
  ]
  return(
    <div>
      <Header menuItems={menuItems} />
      <Footer menuItems={menuItems} />
    </div>
  )
}