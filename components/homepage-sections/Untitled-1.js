<div className="flex flex-wrap justify-center my-5">
  {services.map((service, index) => (
    <div
      className={`w-full  lg:w-1/3 p-2 text-center ${
        index === 1 ? "lg:mt-[-50px]" : ""
      }`}
      key={service.title}
    >
      {/* <div className=""> */}
      <div className="w-64 h-52 relative mx-auto ">
        <Image
          className=" shadow-lg rounded-lg"
          src={service.image}
          layout="fill"
          objectFit="cover"
          alt="dd"
        />
      </div>
      <div className="text-center">
        <h3 className="font-semibold text-xl mt-6 mb-2">{service.title}</h3>
        <p className="text-base">{service.text}</p>
      </div>
      {/* </div> */}
    </div>
  ))}
</div>;
