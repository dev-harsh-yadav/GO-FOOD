const Shimmer = () => {
  return (
    <div className="shimmerArea">
     { Array(10).fill(" ").map((e) => (<div className="shimmereffect" />)) }
    </div>
  );
};

export default Shimmer;
