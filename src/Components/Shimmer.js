const Shimmer = () => {
  return (
    <div className="shimmerArea">
     { Array(10).fill(" ").map((e,index) => (<div className="shimmereffect" key={index}/>)) }
    </div>
  );
};

export default Shimmer;
