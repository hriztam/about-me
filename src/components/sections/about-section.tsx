export function AboutSection() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="border border-cyan-400/30 bg-black/20 p-8 rounded-lg backdrop-blur-sm">
        <div className="text-cyan-400 text-sm mb-4">
          {"// about_hritam.tsx"}
        </div>

        <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
          About The Legend
        </h2>

        <div className="space-y-6 text-green-300">
          <div className="border-l-4 border-pink-400 pl-6">
            <h3 className="text-xl font-bold text-pink-400 mb-2">
              The Origin Story
            </h3>
            <p>
              In a universe where semicolons were forgotten and tabs battled
              spaces, a dev with a vision emerged. Meet{" "}
              <span className="text-cyan-400 font-bold">
                Hritam Shrivastava
              </span>{" "}
              — a Full Stack Developer who doesn&apos;t just code; he engineers
              experiences. With coffee in one hand and AI tools in the other,
              he&apos;s redefining what it means to ship smart, scalable
              software in style.
            </p>
          </div>

          <div className="border-l-4 border-green-400 pl-6">
            <h3 className="text-xl font-bold text-green-400 mb-2">
              The Philosophy
            </h3>
            <p>
              “Why do it the hard way when you can do it the smart way?” -
              Probably Hritam. I believe in merging human creativity with AI
              precision to accelerate development, reduce burnout, and make
              cleaner code happen faster. My rule of thumb?{" "}
              <span className="text-pink-400 font-bold">
                “Think deeply. Code efficiently. Automate smart. Make it fun.”
              </span>
            </p>
          </div>

          <div className="border-l-4 border-cyan-400 pl-6">
            <h3 className="text-xl font-bold text-cyan-400 mb-2">
              The Superpowers
            </h3>
            <ul className="space-y-2">
              <li>
                🚀 Can debug code faster than you can say &quot;it works on my
                machine&quot;
              </li>
              <li>☕ Converts coffee directly into functional applications</li>
              <li>
                🧠 Solves complex problems while maintaining maximum vibe levels
              </li>
              <li>🎯 Hits deadlines like a cyberpunk sniper</li>
              <li>😄 Makes coding fun (yes, it&apos;s possible!)</li>
            </ul>
          </div>

          <div className="border-l-4 border-yellow-400 pl-6">
            <h3 className="text-xl font-bold text-yellow-400 mb-2">
              Fun Facts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-black/30 p-4 rounded">
                <div className="text-cyan-400 font-bold">Favorite Error:</div>
                <div className="text-sm">404 - Coffee Not Found</div>
              </div>
              <div className="bg-black/30 p-4 rounded">
                <div className="text-green-400 font-bold">Debugging Style:</div>
                <div className="text-sm">console.log()</div>
              </div>
              <div className="bg-black/30 p-4 rounded">
                <div className="text-pink-400 font-bold">Code Comments:</div>
                <div className="text-sm">
                  70% jokes, 30% “trust me, it works”
                </div>
              </div>
              <div className="bg-black/30 p-4 rounded">
                <div className="text-yellow-400 font-bold">
                  Productivity Peak:
                </div>
                <div className="text-sm">3 AM with lo-fi beats</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg border border-pink-400/30">
          <div className="text-pink-400 font-bold mb-2">
            {"// Personal Mission Statement"}
          </div>
          <p className="text-green-300 italic">
            &quot;To build applications so good, they make users forget
            they&apos;re using technology. And if I can make a few developers
            smile along the way with some witty comments, even better.
            Life&apos;s too short for boring code!&quot;
          </p>
        </div>
      </div>
    </div>
  );
}
