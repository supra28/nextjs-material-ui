import Header from "./Header";
import Footer from "./Footer";
import React from "react";

//wrong place to do this, should be done in an HOC or a Page
export default  ({children,title='Default Title'})=>(
    <div>
            <Header title={title} />
            <div style={{'marginLeft':'256px',padding:'10px'}} > 
            {children}
            <Footer />            
            </div>
    </div>
    )

