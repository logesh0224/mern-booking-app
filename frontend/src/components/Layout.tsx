import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
interface Props {
    children: React.ReactNode;
  }
  

const Layout =({children}:Props)=>{
    return(
        <div className="flex flex-col min-h-screen">
            <Header/>
            <Hero/>
            <div className="conatiner mx-auto py-10 flex-1">{children}</div>
            <Footer/>
        </div>
    );

};
export default Layout;

