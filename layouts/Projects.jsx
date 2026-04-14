import ProjectCardHorizontal from '@/components/ProjectCardHorizontal'
import RepositoryCard from '@/components/RepositoryCard'
import ContentRenderer from '@/components/ContentRenderer'
import Reveal from '@/components/Reveal'

const Layout = ({ projects, github }) => {
  return (
    <div className="mx-auto p-3 md:p-6 lg:p-12 relative">
      {/* Secret Corner - Interactive Easter Egg */}
      <div className="fixed top-4 right-8 md:right-16 lg:right-20 z-50 group">
        {/* Cute Animated Sun Button */}
        <div className="relative w-12 h-12 cursor-pointer">
          {/* Sun body */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 
                          shadow-lg shadow-orange-300/50 group-hover:shadow-orange-400/70
                          transition-all duration-500 group-hover:scale-110">
            {/* Sun face */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-lg opacity-80 group-hover:opacity-100 transition-opacity">☺</span>
            </div>
          </div>
          
          {/* Rotating sun rays */}
          <div className="absolute inset-0 animate-spin-slow">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 w-1 h-3 bg-gradient-to-t from-yellow-400 to-transparent 
                          -translate-x-1/2 origin-bottom opacity-60 group-hover:opacity-100 group-hover:h-4
                          transition-all duration-500"
                style={{
                  transform: `translate(-50%, -100%) rotate(${i * 45}deg)`,
                  transformOrigin: 'center bottom'
                }}
              />
            ))}
          </div>
          
          {/* Pulsing glow */}
          <div className="absolute -inset-2 rounded-full bg-yellow-400/20 blur-xl animate-pulse 
                          group-hover:bg-yellow-400/40 transition-colors duration-500"></div>
          
          {/* Modern Card - Appears on Hover */}
          <div className="absolute top-16 right-0 -translate-x-1/4 pointer-events-none group-hover:pointer-events-auto">
            <div className="relative">
              {/* Glow effect behind card */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 blur-3xl 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Main content card */}
              <div className="relative w-[320px] md:w-[380px] transform
                            opacity-0 translate-y-4 scale-95
                            group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100
                            transition-all duration-500 ease-out delay-100">
                
                {/* Glass card with gradient border */}
                <div className="relative bg-black/40 backdrop-blur-2xl rounded-2xl p-[1px] overflow-hidden">
                  {/* Animated gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-fuchsia-500 to-violet-500 opacity-50"></div>
                  
                  {/* Inner content */}
                  <div className="relative bg-black/80 backdrop-blur-xl rounded-2xl p-6">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-fuchsia-500/10 rounded-full blur-2xl"></div>
                    
                    {/* Content */}
                    <div className="relative">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-violet-500/50"></div>
                        <h5 className="text-sm font-medium tracking-wider text-violet-300/80">You do you and I will do better</h5>
                      </div>
                      
                      <p className="text-gray-300/90 text-sm leading-relaxed font-light">
                       As a person, sarcasm, playful fibs, and exploring are my instincts, each destination deepening my curiosity and reshaping my worldview,. My hobbies are coding, traveling, storytelling, history, culture and cuisine. I observe and hustle through all that defines me, 24/7 confident, ready to party or disappear into nature or a new city, someone who navigates complexity with both analytical brilliance and creative solutions. Basically a polymath with immense clarity who like depth, build depth, and dwell in it. I approach problems with sharp wit and genuine enthusiasm, bringing serious skill wrapped in playful energy. money is tool to buy time and not other way around, and I know exactly when to plot my escape and vanish mindfully if the vibe loses its grace.
                        <br />
                        Just in case :P
                      </p>
                      
                      <div className="mt-4 flex items-center gap-2">
                        <div className="w-full h-[1px] bg-gradient-to-r from-violet-500/50 to-transparent"></div>
                        <span className="text-xs text-violet-400/60 whitespace-nowrap">✦</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-headings:mb-4 dark:prose-invert">
        <ContentRenderer source={github} />
        <div className="mt-4 grid grid-cols-fluid gap-4 [--tw-fluid-col-min:15rem] md:mt-12 md:gap-6">
          {github?.repositories?.records?.map((item, i) => (
            <Reveal animation="fade-in slide-in-top" delay={i * 100} key={item.name}>
              <RepositoryCard {...item} />
            </Reveal>
          ))}
        </div>
        <div className="my-6 md:my-12"></div>
        <ContentRenderer source={projects} />
        <div className="mt-4 grid gap-4 md:mt-12 md:gap-6">
          {projects?.collection?.records?.map((item, i) => (
            <ProjectCardHorizontal key={item.slug} index={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Layout