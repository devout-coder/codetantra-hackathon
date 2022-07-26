import { IconButton } from "@material-ui/core";
import {
  Call,
  LocalActivity,
  MapRounded,
  PagesSharp,
} from "@material-ui/icons";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PetProducts = () => {
  const notify = (message) =>
    toast(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <div className="petProductsContainer">
      <Navbar />
      <div className="shopInfo">
        <img
          width={60}
          height={60}
          src="https://lh5.googleusercontent.com/p/AF1QipOxb_WLxVc2l6wbj0GA5lEBtnJGFg6qKWxzDjlj=w114-h114-n-k-no"
        />
        <h3 className="shopName">Hamayo pet shop</h3>
        <IconButton>
          <Call />
        </IconButton>
        <IconButton>
          <a
            className="mapLink"
            target="blank"
            href="https://www.google.com/maps/dir//pet+shops+near+me/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be7c9f28577c06b:0x1cc0d855d3c1cee2?sa=X&ved=2ahUKEwiO-dXLw5f5AhWRTWwGHe-qArsQ9Rd6BAgMEAQ"
          >
            <MapRounded />
          </a>
        </IconButton>
        <IconButton onClick={() => notify("Your coupon code is:  li3-ddf-4k1")}>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          {/* Same as */}
          <ToastContainer />
          <LocalActivity />
        </IconButton>
      </div>
      <div className="shopInfo">
        <img
          width={60}
          height={60}
          src="data:image/jpeg;base64,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"
        />
        <h3 className="shopName">Heads Up For Tails Pet Store and Spa</h3>
        <IconButton>
          <Call />
        </IconButton>
        <IconButton>
          <a
            className="mapLink"
            target="blank"
            href="https://www.google.com/maps/dir//pet+shops+near+me/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be7c9f28577c06b:0x1cc0d855d3c1cee2?sa=X&ved=2ahUKEwjy1K6Txpf5AhWPTWwGHU5tDY0Q9Rd6BAgGEAQ"
          >
            <MapRounded />
          </a>
        </IconButton>
        <IconButton onClick={() => notify("Your coupon code is:  xlk-i92-4km")}>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          {/* Same as */}
          <ToastContainer />
          <LocalActivity />
        </IconButton>
      </div>
      <div className="shopInfo">
        <img
          width={60}
          height={60}
          src="https://lh5.googleusercontent.com/p/AF1QipOEQz6zLpzxrJutDlnekR9K46oSXsAUgY3k0gqV=k-no-n-w90-h128"
        />
        <h3 className="shopName">Wiggles.in</h3>
        <IconButton>
          <Call />
        </IconButton>
        <IconButton>
          <a
            className="mapLink"
            target="blank"
            href="https://lh5.googleusercontent.com/p/AF1QipOEQz6zLpzxrJutDlnekR9K46oSXsAUgY3k0gqV=k-no-n-w90-h128"
          >
            <MapRounded />
          </a>
        </IconButton>
        <IconButton onClick={() => notify("Your coupon code is:  3m3-d4f-la1")}>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          {/* Same as */}
          <ToastContainer />
          <LocalActivity />
        </IconButton>
      </div>
      <div className="shopInfo">
        <img
          width={60}
          height={60}
          src="https://lh5.googleusercontent.com/p/AF1QipN0wpb1yNIPmRewd-6a6tXLQ7l_DfyM2wR1aT4-=w101-h101-n-k-no"
        />
        <h3 className="shopName">Princess Paw Pet Store</h3>
        <IconButton>
          <Call />
        </IconButton>
        <IconButton>
          <a
            className="mapLink"
            target="blank"
            href="https://lh5.googleusercontent.com/p/AF1QipOEQz6zLpzxrJutDlnekR9K46oSXsAUgY3k0gqV=k-no-n-w90-h128"
          >
            <MapRounded />
          </a>
        </IconButton>
        <IconButton onClick={() => notify("Your coupon code is:  399-dsf-lkn")}>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          {/* Same as */}
          <ToastContainer />
          <LocalActivity />
        </IconButton>
      </div>
    </div>
  );
};

export default PetProducts;
