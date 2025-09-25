import Footer from "./Footer/Footer";
import Category from "./Homescreen/Categories";
import HoverCard from "./Homescreen/HoverCard";
import LatestCollections from "./Homescreen/LatestCollections";
import NewArrival from "./Homescreen/newArraival";
import NewArrival1 from "./Homescreen/newArraival1";
import NewArrival2 from "./Homescreen/newArraival2";
import ShippingCodes from "./Homescreen/shippingCode";
import Topbanner from "./Homescreen/Topbanner";
import Videobanners from "./Homescreen/videoBanner";
import Videobanner2 from "./Homescreen/Videobanner2";
import Navbar from "./Navbar/Nav";



export default function Hero() {
  return (
  <div className="overflow-x-hidden">
    <Navbar/>
    <Topbanner/>
    <Category/>
    <LatestCollections/>
    <ShippingCodes/>
    <NewArrival/>
    <Videobanners/>
    <NewArrival1/>
    <NewArrival2/>
    <Videobanner2/>
    <HoverCard/>
    <Footer/>
  </div>
  );
}
