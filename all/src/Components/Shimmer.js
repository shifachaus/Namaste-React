const Shimmer = () => {
  return (
    <div
      data-testid="shimmer"
      className="w-[90%] max-w-7xl my-0 mx-auto grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 relative"
    >
      {Array(10)
        .fill("")
        .map((_, index) => {
          return (
            <div
              key={index}
              className="w-[120px] md:w-[280px] h-[120px] md:h-[280px] border bg-gray-100 animate-pulse flex space-x-4 border  shadow rounded-md p-4 max-w-sm w-full mx-auto"
            ></div>
          );
        })}
    </div>
  );
};

export default Shimmer;
