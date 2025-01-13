const ArrowsWeAre = ({ version, backArrows }) => {
    if (version === 1) {
      return (
        <div className="flex justify-center">
          <img
            src={backArrows[0].src}
            alt="Arrow"
            className="w-2 mr-5 -hue-rotate-[365deg] animate-spin duration-[8000ms]"
          />
          <img
            src={backArrows[1].src}
            alt="Arrow"
            className="w-2 mr-20 -hue-rotate-[365deg]  animate-spin duration-[90000ms]"
          />
          <img
            src={backArrows[0].src}
            alt="Arrow"
            className="w-2 -hue-rotate-[365deg] animate-spin duration-[90000ms] "
          />
        </div>
      );
    }
    if (version === 2) {
        return (
            <div className="flex justify-center">
              <img
                src={backArrows[1].src}
                alt="Arrow"
                className="w-2 mr-5 -hue-rotate-[365deg] animate-spin duration-[8000ms]"
              />
              <img
                src={backArrows[0].src}
                alt="Arrow"
                className="w-2 mr-20 -hue-rotate-[365deg]  animate-spin duration-[90000ms]"
              />
              <img
                src={backArrows[0].src}
                alt="Arrow"
                className="w-2 -hue-rotate-[365deg] animate-spin duration-[90000ms] "
              />
            </div>
          );   
    }
    if (version === 3) {
        return (
            <div className="flex justify-center my-8">
              <img
                src={backArrows[1].src}
                alt="Arrow"
                className="w-2 mr-20 -hue-rotate-[365deg] animate-spin duration-[9000ms]"
              />
              <img
                src={backArrows[0].src}
                alt="Arrow"
                className="w-2 -hue-rotate-[365deg]  animate-spin duration-[9000ms]"
              />
              <img
                src={backArrows[0].src}
                alt="Arrow"
                className="w-2 -hue-rotate-[365deg] animate-spin duration-[9000ms] "
              />
            </div>
          );   
    }
}
  
  export default ArrowsWeAre;