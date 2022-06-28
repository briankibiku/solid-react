import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
class Layout extends React.Component {
  render() {
    return (
      <>
        <div style={{ padding: "40px" }}>
          <Header />
          <br />
          <main>{this.props.children}</main>
          <Footer />
        </div>
      </>
    );
  }
}
export default Layout;
