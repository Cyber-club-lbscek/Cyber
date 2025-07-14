import { Button } from "@/components/ui/button";
import heroImage from "@/assets/ad-image.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background/80 to-background/90 px-4 sm:px-8">

      
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

      
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
        <div className="w-full h-full bg-[radial-gradient(circle,_#00f7ff_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>

     
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent z-10 opacity-40" />

      <div className="relative z-10 max-w-4xl text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Admin Sphere
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10">
          Powering the brain of the platform — analytics, control, and security in one place.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
           onClick={() => navigate("/Admin/Menu")}

            className="animate-beat-glow bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-6 py-3 w-full sm:w-auto"
          >
            Upcoming Events
          </Button>

          <Button
            className="animate-beat-glow text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-6 py-3 w-full sm:w-auto"
          >
            Previous Events
          </Button>
        </div>
      </div>

      
      <div className="absolute top-0 left-0 w-14 h-14 sm:w-20 sm:h-20 border-t-4 border-l-4 border-white/10" />
      <div className="absolute top-0 right-0 w-14 h-14 sm:w-20 sm:h-20 border-t-4 border-r-4 border-white/10" />
      <div className="absolute bottom-0 left-0 w-14 h-14 sm:w-20 sm:h-20 border-b-4 border-l-4 border-white/10" />
      <div className="absolute bottom-0 right-0 w-14 h-14 sm:w-20 sm:h-20 border-b-4 border-r-4 border-white/10" />

      
      <div className="absolute left-4 sm:left-10 top-1/4 h-24 sm:h-32 w-0.5 bg-white/10" />
      <div className="absolute right-4 sm:right-10 bottom-1/4 h-24 sm:h-32 w-0.5 bg-white/10" />
    </section>
  );
};

export default Home;