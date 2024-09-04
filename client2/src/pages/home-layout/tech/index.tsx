export default function Tech() {
  const items = [
    { id: 1, description: "Soil moisture sensor" },
    {
      id: 2,
      description: "Temperature and humidity sensor",
    },
    {
      id: 3,
      description: "NPK sensor",
    },
    {
      id: 4,
      description: "pH sensor",
    },
  ];
  return (
    <section className="my-10">
      <div className="w-[90%] mx-auto flex flex-col gap-y-10">
        <h1 className="uppercase text-2xl xs:text-3xl sm:text-4xl font-black tracking-wider font-montserrat text-center gradient-text mr-5">
          Our Technologies
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto">
          {items.map((item) => (
            <div className="flex p-3 xs:p-6 xl:p-10 rounded-lg gap-y-3 sm:gap-y-5 bg-100 h-auto md:h-[300px] lg:h-[350px] xl:h-[400px] items-center  flex-col">
              <div className=" grid grid-cols-2 gap-x-3 xs:gap-x-6 xl:gap-x-10   flex-auto overflow-hidden">
                <span className="h-full overflow-hidden flex w-full">
                  <img
                    src={`/images/device_${item.id}_1.jpg`}
                    className="w-full  h-full object-cover  rounded-xl"
                    alt={`Device ${item.id}.1`}
                  />
                </span>
                <span className="h-full overflow-hidden flex w-full">
                  <img
                    src={`/images/device_${item.id}_2.jpg`}
                    className="w-full h-full object-cover   rounded-xl"
                    alt={`Device ${item.id}.2`}
                  />
                </span>
              </div>
              <p className="mx-auto text-xl flex text-400 text-center font-montserrat tracking-widest font-semibold h-auto">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
