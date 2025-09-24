import Category from "./Homescreen/Categories";
import NewArrival from "./Homescreen/newArraival";
import ShippingCodes from "./Homescreen/shippingCode";
import Topbanner from "./Homescreen/Topbanner";
import Navbar from "./Navbar/Nav";


export default function Hero() {
  return (
  <div className="overflow-x-hidden">
    <Navbar/>
    <Topbanner/>
    <Category/>
    <ShippingCodes/>
    <NewArrival/>
  </div>
  );
}
