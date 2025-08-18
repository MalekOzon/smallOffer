import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="relative flex justify-center items-center">
        {/* حلقات الدوران */}
        <div className="absolute w-[190px] h-[190px] rounded-full border border-transparent border-b-8 border-b-green-300 animate-rotate1"></div>
        <div className="absolute w-[190px] h-[190px] rounded-full border border-transparent border-b-8 border-b-pink-600 animate-rotate2"></div>
        <div className="absolute w-[190px] h-[190px] rounded-full border border-transparent border-b-8 border-b-cyan-400 animate-rotate3"></div>
        <div className="absolute w-[190px] h-[190px] rounded-full border border-transparent border-b-8 border-b-yellow-400 animate-rotate4"></div>

        {/* النص */}
        <h3 className="text-xl font-bold">جارٍ التحميل ...</h3>
      </div>

      {/* ✅ keyframes جوة الكمبوننت */}
      <style jsx>{`
        @keyframes rotate1 {
          from {
            transform: rotateX(50deg) rotateZ(110deg);
          }
          to {
            transform: rotateX(50deg) rotateZ(470deg);
          }
        }
        @keyframes rotate2 {
          from {
            transform: rotateX(20deg) rotateY(50deg) rotateZ(20deg);
          }
          to {
            transform: rotateX(20deg) rotateY(50deg) rotateZ(380deg);
          }
        }
        @keyframes rotate3 {
          from {
            transform: rotateX(40deg) rotateY(130deg) rotateZ(450deg);
          }
          to {
            transform: rotateX(40deg) rotateY(130deg) rotateZ(90deg);
          }
        }
        @keyframes rotate4 {
          from {
            transform: rotateX(70deg) rotateZ(270deg);
          }
          to {
            transform: rotateX(70deg) rotateZ(630deg);
          }
        }

        .animate-rotate1 {
          animation: rotate1 2s linear infinite;
        }
        .animate-rotate2 {
          animation: rotate2 2s linear infinite;
        }
        .animate-rotate3 {
          animation: rotate3 2s linear infinite;
        }
        .animate-rotate4 {
          animation: rotate4 2s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Loader;
