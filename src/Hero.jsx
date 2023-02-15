import React from "react";

const Hero = () => {
  return (
    <section className="d-flex hero py-5 ">
      <div className="text container m-5 ">
        <h1 className="mt-3 heroheading ">Shopping Store</h1>
        <p className="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          harum quos earum fugiat dolorem perspiciatis eum commodi illum dicta
          magnam iusto facere officiis, aliquid beatae molestias? Pariatur ut
          tempore cumque.
        </p>
        <button className="btn herobtn">Shop Now!</button>
      </div>
      <div className="shopimg mt-5 ">
        <img src="img/onlineshop.png" width="600px" alt="" />
      </div>
    </section>
  );
};

export default Hero;
