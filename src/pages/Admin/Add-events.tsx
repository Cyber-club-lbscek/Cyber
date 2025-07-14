import React, { useState } from "react";

const AddEventForm = () => {
  const [poster, setPoster] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPoster(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Event submitted");
  };

  return (
    <div className="relative h-full w-full bg-black overflow-hidden">
   
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3f3f3f2e_1px,transparent_1px),linear-gradient(to_bottom,#3f3f3f2e_1px,transparent_1px)] bg-[size:20px_20px] z-0" />

      <div className="min-h-screen flex items-center justify-center p-4 sm:p-10 relative z-10">
        <div className="w-full max-w-3xl rounded-2xl p-10 backdrop-blur-md border border-white/10 bg-white/5 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">

         
          <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-center mb-8 tracking-tight">
  Add New Event
</h2>


          <form onSubmit={handleSubmit} className="space-y-6">
           
            <div>
              <label className="block text-white font-medium mb-1">Event Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Cyber Security Conclave"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

           
            <div>
              <label className="block text-white font-medium mb-1">Event Description</label>
              <textarea
                rows={4}
                required
                placeholder="e.g. Discussing the future of cybersecurity in AI-driven networks..."
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
              />
            </div>

         
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white font-medium mb-1">Date</label>
                <input
                  type="date"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-1">Time</label>
                <input
                  type="time"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-white font-medium mb-1">Upload Poster</label>
              <input
                type="file"
                accept="image/*"
                required
                onChange={handleImageChange}
                className="w-full text-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-cyan-600/80 file:text-white hover:file:bg-cyan-500"
              />
            </div>

            {/* Preview */}
            {preview && (
              <div className="text-center mt-4">
                <p className="text-sm text-white/60 mb-2">Poster Preview:</p>
                <img
                  src={preview}
                  alt="Poster Preview"
                  className="max-h-64 mx-auto rounded-lg shadow-md object-contain"
                />
              </div>
            )}

            
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 text-white font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-500 hover:to-cyan-600 rounded-lg transition-all duration-300 shadow-lg"
              >
                Submit Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEventForm;
{/* admin here */}