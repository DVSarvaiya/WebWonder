import Image from "next/image";


export default function Home() {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
        <div className="relative z-20 flex items-center justify-center h-full text-white">
          <h1 className="text-8xl font-bold">Ocean Exploration</h1>
        </div>
      </div>
    </>
  );
}
