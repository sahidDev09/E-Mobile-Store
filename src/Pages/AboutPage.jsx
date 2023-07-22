import React from "react";

const AboutPage = () => {
  return (
    <main className=" p-10 sm:p-0">
      <div className="container mx-auto mt-10 grid sm:grid-cols-2 items-center ">
        <div>
          <img
            className="resImg"
            src="https://image.similarpng.com/very-thumbnail/2020/11/Mobile-marketing-concept-illustration-on-transparent-background-PNG.png"
            alt="randomimg"
          />
        </div>
        <div className=" text-start">
          <h1 className=" text-3xl font-medium text-gray-500">Smartphone Retailer</h1>
          <h1 className=" text-6xl sm:text-6xl font-bold">
            Original <span className=" text-red-500">Gadget</span>
          </h1>
          <p className=" text-xl text-gray-500">
            World best mobile phone retailer
          </p>
          <h1 className=" mt-10 text-2xl font-medium">What we Provide 🔽 </h1>
          <ul className=" mt-3 list-disc text-gray-500 leading-8">
            <li>Fast home Delivery</li>
            <li>20 days Replacement</li>
            <li>Pre-booking </li>
            <li>5* ratiing seller</li>
            <li>24/7 customer service</li>
          </ul>
          <div className="feedback">
            <div className=" container mx-auto mt-5">
              <div className="card grid sm:grid-cols-2 gap-10 py-5">
                <div>
                  <div className=" flex items-center justify-between mb-5 gap-3">
                    <div>
                      <h1 className=" font-bold text-lg text-orange-400">
                        Jack Sppie
                      </h1>
                      <p className=" text-gray-400">tousheeq23@gmail.com</p>
                    </div>
                    <img
                      className="mainstartimg w-28 h-14 scale-75"
                      src="https://www.kindpng.com/picc/m/11-115102_transparent-background-5-star-rating-png-png-download.png"
                      alt=""
                    />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor ut dicta veniam ratione laudantium quam asperiores
                    ill....
                  </p>
                </div>

                <div>
                  <div className=" flex items-center justify-between mb-5 gap-3">
                    <div>
                      <h1 className=" font-bold text-lg text-orange-400">
                        Touseeq ljaz
                      </h1>
                      <p className=" text-gray-400">tousheeq23@gmail.com</p>
                    </div>
                    <img
                      className="mainstartimg w-28 h-14 scale-75"
                      src="https://www.kindpng.com/picc/m/11-115102_transparent-background-5-star-rating-png-png-download.png"
                      alt=""
                    />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor ut dicta veniam ratione laudantium quam asperiores
                    ill....
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className=" container mx-auto text-2xl text-orange-400 mt-3 font-bold">
        About us..
      </h1>
      <p className=" container mx-auto text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nihil
        minus labore alias modi temporibus sequi eveniet sit. Qui quae rem
        nesciunt omnis laborum corrupti pariatur quaerat officia exercitationem
        natus repellat animi sequi cum amet velit fugiat voluptate facere, ad,
        nulla libero voluptates rerum. Accusamus sequi facilis assumenda fugit
        nihil maxime facere voluptates dolore reiciendis aliquam dolorem odio
        eaque harum veniam quo, repellat sint placeat neque corporis mollitia
        voluptatem distinctio id. Iusto cumque et dolorem dicta libero, atque,
        nemo nam magnam ipsum praesentium doloribus illo, perferendis
        repudiandae eaque dolor ab hic fugit? Deleniti fuga blanditiis vel,
        natus quam nobis sapiente.
      </p>
    </main>
  );
};

export default AboutPage;
