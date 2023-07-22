import React from "react";
import "@lottiefiles/lottie-player";

const Delivery = () => {
  return (
    <div className=" grid sm:grid-cols-2 justify-between items-center container mx-auto sm:mt-10 md:mt-10 lg:mt-10 p-10 sm:p-0">
      <div>
        <h1 className=" text-5xl font-bold text-red-400 uppercase">
          Fast Home Delivery
        </h1>
        <p className=" text-gray-500">
          We ansure that your product will be delivred withing 30 minutes
        </p>
        <p className=" text-xl mt-10 text-red-400">Tearm & Condition </p>
        <p className="text-sm mt-4 text-gray-400 text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          corporis sunt quam? Nesciunt, earum error minima incidunt neque
          accusantium quibusdam, repellendus iure delectus quia cumque veritatis
          beatae, natus similique! Impedit reiciendis sunt officiis. Ipsam cum
          tempore beatae error delectus optio! Id nemo soluta eius sapiente
          officiis itaque aliquid facere blanditiis voluptatibus. Amet
          blanditiis beatae est autem debitis quo veniam eligendi molestiae non
          officia maxime animi quaerat, nesciunt deserunt eaque doloribus
          placeat. Error quasi veniam placeat qui illo esse voluptate sequi
          inventore dolores accusantium fuga, cumque quos delectus sint
          suscipit, voluptatum doloribus exercitationem vitae fugit et cum odio,
          similique ullam. Eveniet, fuga! Vitae expedita placeat quia eveniet
          sapiente vel laudantium quidem aliquam molestiae et, accusantium iure
          harum non accusamus similique magni, sequi adipisci cum facilis! Fuga,
          et illo. Itaque, quisquam? Tempora obcaecati ad fugit impedit.
          Quisquam iusto dolore totam incidunt commodi earum officia cumque
          reiciendis nam dignissimos? Labore fuga porro eveniet aspernatur rerum
          culpa nihil amet consequuntur quis maiores, cumque minima quas
          voluptas accusamus quidem. Rerum recusandae, est reprehenderit aliquam
          quis exercitationem soluta error blanditiis quo libero expedita nihil
          voluptatibus officia,{" "}
        </p>
      </div>
      <div>
        <lottie-player
          autoplay
          loop
          mode="normal"
          src="https://lottie.host/0c4c2c95-2a74-4e2f-80ce-be4b4d0e943a/CbTE5DAN2Y.json"></lottie-player>
      </div>
    </div>
  );
};

export default Delivery;
