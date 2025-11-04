export const Demos = () => {
  return (
    <section id="videos" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground">
          See LazyCook in Action
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Demo 1 */}
          <div className="relative group cursor-pointer">
            <div className="bg-[#1C1B1B] aspect-video rounded-2xl flex items-center justify-center overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="text-center">
                <p className="text-white text-lg mb-8">Demo: Running LazyCook</p>
                <div className="w-16 h-16 mx-auto flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <svg 
                    className="w-8 h-8 text-white ml-1" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Demo 2 */}
          <div className="relative group cursor-pointer">
            <div className="bg-[#1C1B1B] aspect-video rounded-2xl flex items-center justify-center overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="text-center">
                <p className="text-white text-lg mb-8">Demo: Output Generation</p>
                <div className="w-16 h-16 mx-auto flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <svg 
                    className="w-8 h-8 text-white ml-1" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
