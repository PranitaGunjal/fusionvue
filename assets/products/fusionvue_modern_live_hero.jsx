/*
FusionVue Modern Landing (single-file React component)
- Tailwind CSS utility classes used (make sure Tailwind is configured)
- Place assets in /public/assets/ (logo.png, product images, hero-loop.mp4)
- For a "live video feel" this example uses a looped muted video + animated overlay.
- Replace placeholder images/links with your dist.zip assets.
- This component is a starting point; split into smaller components in production.
*/

import React from "react";

export default function FusionVueLanding() {
  return (
    <div className="min-h-screen bg-black text-white font-sans leading-relaxed">
      {/* NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src="/assets/logo.png" alt="FusionVue" className="h-10 w-auto" />
            <span className="text-xl font-semibold tracking-wide">FUSIONVUE</span>
          </a>

          <nav className="hidden md:flex gap-6 items-center text-sm text-white/90">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#products" className="hover:text-white">Products</a>
            <a href="#live" className="hover:text-white">Live Demo</a>
            <a href="#contact" className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-md font-medium shadow">Shop Now</a>
          </nav>

          <div className="md:hidden">
            {/* mobile menu (placeholder) */}
            <button aria-label="open-menu" className="px-3 py-2">☰</button>
          </div>
        </div>
      </header>

      {/* HERO with video background */}
      <section className="relative pt-24">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Looping hero video for 'live' feel. Put a short loop (5-12s) at /public/assets/hero-loop.mp4 */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover brightness-75"
            src="/assets/hero-loop.mp4"
          />

          {/* Animated gradient overlay to give modern sheen */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-black/50 pointer-events-none" />

          {/* Subtle moving light overlay (CSS animation) */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="w-[140%] h-[140%] -translate-x-24 -translate-y-16 opacity-10 animate-slow-spin bg-[radial-gradient(ellipse_at_center,rgba(255,255,224,0.14),transparent_30%)]" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pb-24 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">Experience Luxury. Experience FusionVue.</h1>
              <p className="text-lg md:text-xl text-white/80 mb-6 max-w-xl">Premium AV solutions with an immersive live-video feel — crafted for modern spaces. Discover products, demos, and live previews.</p>

              <div className="flex gap-4 justify-center md:justify-start">
                <a href="#products" className="inline-flex items-center gap-2 bg-white text-black px-5 py-3 rounded-lg font-semibold shadow hover:scale-[1.02] transition">Explore Products</a>
                <a href="#live" className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 rounded-lg">Watch Live Demo</a>
              </div>

              <div className="mt-8 flex items-center gap-4 justify-center md:justify-start">
                {/* small trust/badges */}
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M12 2l3 6 6 .5-4.5 3.8L19 21l-7-4-7 4 1.5-8.7L3 8.5 9 8l3-6z" fill="currentColor"/></svg>
                  <span>Trusted by designers</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-white/70">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M12 2a10 10 0 100 20 10 10 0 000-20z" fill="currentColor"/></svg>
                  <span>Free shipping over ₹2,000</span>
                </div>
              </div>
            </div>

            {/* Right column: product card stack with subtle parallax */}
            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-md transform -translate-y-6 md:-translate-y-12">
                <div className="relative bg-black/40 border border-white/6 rounded-2xl p-6 backdrop-blur-md">
                  <div className="grid grid-cols-2 gap-3">
                    <img src="/assets/products/product1.jpg" alt="p1" className="rounded-lg object-cover w-full h-36 shadow-lg"/>
                    <img src="/assets/products/product2.jpg" alt="p2" className="rounded-lg object-cover w-full h-36 shadow-lg"/>
                    <img src="/assets/products/product3.jpg" alt="p3" className="rounded-lg object-cover w-full h-36 shadow-lg"/>
                    <img src="/assets/products/product4.jpg" alt="p4" className="rounded-lg object-cover w-full h-36 shadow-lg"/>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <div className="text-sm text-white/80">Featured bundle</div>
                      <div className="font-semibold">FusionVue Home Theater Kit</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-white/70">from</div>
                      <div className="font-bold text-lg">₹19,999</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Why FusionVue</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white/3 rounded-xl border border-white/6">
              <h3 className="font-semibold text-xl mb-2">Immersive Video</h3>
              <p className="text-white/70">High-quality playback & live previews with low latency options for demonstrations.</p>
            </div>
            <div className="p-6 bg-white/3 rounded-xl border border-white/6">
              <h3 className="font-semibold text-xl mb-2">Sleek Design</h3>
              <p className="text-white/70">Modular hardware with clean finishes and minimal footprint.</p>
            </div>
            <div className="p-6 bg-white/3 rounded-xl border border-white/6">
              <h3 className="font-semibold text-xl mb-2">Easy Integration</h3>
              <p className="text-white/70">Integrates with streaming platforms, HLS, YouTube Live and WebRTC for demos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-20 bg-gradient-to-b from-black/0 to-black/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <a href="/products" className="text-sm text-white/80">View all products →</a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Repeat product card - replace with mapping in real app */}
            {[1,2,3,4].map(i => (
              <article key={i} className="bg-black/40 border border-white/6 rounded-xl p-4">
                <img src={`/assets/products/product${i}.jpg`} alt={`product ${i}`} className="w-full h-48 object-cover rounded-lg mb-4 shadow"/>
                <h3 className="font-semibold">Product Title {i}</h3>
                <p className="text-sm text-white/70 mb-3">Short description highlighting why customers love this product.</p>
                <div className="flex items-center justify-between">
                  <div className="font-bold">₹{1999 * i}</div>
                  <a className="text-sm bg-white text-black px-3 py-2 rounded" href="#">Buy</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LIVE DEMO SECTION - supports HLS / YouTube embed or WebRTC */}
      <section id="live" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Live Demo & Previews</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-black/40 p-4 rounded-xl border border-white/6">
              {/* Use native video for HLS (with hls.js in production) or embed YouTube/iframe for live streams */}
              <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
                {/* Example: replace src with live HLS/iframe */}
                <iframe
                  title="live-demo"
                  src="https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                />

                <div className="absolute bottom-4 left-4 bg-black/50 px-3 py-1 rounded text-sm">Live • 256 viewers</div>
              </div>
            </div>

            <aside className="bg-black/40 p-4 rounded-xl border border-white/6">
              <h3 className="font-semibold mb-2">Now Playing</h3>
              <ul className="space-y-3 text-white/80 text-sm">
                <li>Product demo • 08:15</li>
                <li>Installation tips • 05:30</li>
                <li>Customer Q&A • 12:00</li>
              </ul>

              <div className="mt-4">
                <a className="w-full inline-block text-center bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded font-semibold" href="#">Book a Live Session</a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="py-12 border-t border-white/6">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <img src="/assets/logo.png" alt="FusionVue" className="h-10 mb-4" />
            <p className="text-sm text-white/70">FusionVue — crafting immersive AV experiences for modern spaces.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <p className="text-sm text-white/70">support@fusionvue.com<br/>+91 12345 67890</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Newsletter</h4>
            <form className="flex gap-2">
              <input className="bg-black/30 px-3 py-2 rounded w-full" placeholder="Email address" />
              <button className="bg-white text-black px-4 py-2 rounded">Subscribe</button>
            </form>
          </div>
        </div>
      </footer>

      {/* small helper styles */}
      <style jsx>{`
        .animate-slow-spin { animation: slowSpin 22s linear infinite; }
        @keyframes slowSpin { from { transform: translate(-10%, -10%) rotate(0deg);} to { transform: translate(-10%, -10%) rotate(360deg);} }
      `}</style>
    </div>
  );
}
