import Image from "next/image";

export default function Home() {
  return (
    <>
    {/* <div className="flex flex-col gap-2 overflow-hidden items-center justify-center min-h-screen">
       <div>
      <div className="logo text-5xl lg:text-8xl flex">
         <b>
           {" "}
           MR <span> BtC </span>Gambler
         </b>
       </div>
       </div>
      <h1>
         <span>I</span>M<span>POSSIBLE</span>
       </h1>
       <div className="flex gap-2">
       <a href="#" className="neon-button absolute bottom-0">
         Discord
       </a>
       <a href="https:/youtube.com/mrbtcgambler2" className="neon-button absolute bottom-0">
         Youtube
       </a>
    
       </div>
       <a className="w-fit" href="https://x.com/mrbtcgambler" id="btn-twtr" target="_b">
         Follow me on X
       </a>
    </div> */}
     <div className="w-full mx-auto text-white">
        <header className="min-h-screen flex items-center justify-center text-center py-24">
            <div className="w-screen relative flex justify-center" >
                <div className="stone-wall-bg w-full">
                    <div className="header-container py-24">
                        <h1 className="neon-tube relative z-10 mb-8 text-5xl md:text-9xl">
                            <span>A</span>lpha<span>V</span>erse
                        </h1>
                        <p className="text-2xl text-gray-400 font-light relative z-10">Next-Generation Virtual Host Management</p>
                        <div className="flex flex-col md:flex-row justify-center gap-12 mt-16">
                            <div className="text-center p-4 rounded-lg border border-primary/20 bg-black/50 backdrop-blur">
                                <span className="block text-3xl font-bold text-primary">99.9%</span>
                                <span className="text-gray-400 text-sm">Uptime</span>
                            </div>
                            <div className="text-center p-4 rounded-lg border border-secondary/20 bg-black/50 backdrop-blur">
                                <span className="block text-3xl font-bold text-secondary">10K+</span>
                                <span className="text-gray-400 text-sm">Active Hosts</span>
                            </div>
                            <div className="text-center p-4 rounded-lg border border-primary/20 bg-black/50 backdrop-blur">
                                <span className="block text-3xl font-bold text-primary">24/7</span>
                                <span className="text-gray-400 text-sm">Support</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-12">
                <h2 className="text-2xl font-press-start text-primary">Management Tools</h2>
                <button className="cyber-btn secondary">
                    <span>VIEW ALL</span>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="group relative bg-card rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-500 border border-primary/10">
                    <div className="relative p-8 text-center">
                        <i className="fas fa-server text-4xl text-primary mb-4"></i>
                        <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">Host Manager</h3>
                        <div className="flex justify-between text-sm text-gray-400">
                            <span>Real-time Control</span>
                            <span>Automated</span>
                        </div>
                    </div>
                </div>

                <div className="group relative bg-card rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-500 border border-secondary/10">
                    <div className="relative p-8 text-center">
                        <i className="fas fa-chart-line text-4xl text-secondary mb-4"></i>
                        <h3 className="text-xl font-semibold mb-4 group-hover:text-secondary transition-colors">Analytics</h3>
                        <div className="flex justify-between text-sm text-gray-400">
                            <span>Live Metrics</span>
                            <span>AI Insights</span>
                        </div>
                    </div>
                </div>

                <div className="group relative bg-card rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-500 border border-primary/10">
                    <div className="relative p-8 text-center">
                        <i className="fas fa-shield-alt text-4xl text-primary mb-4"></i>
                        <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">Security</h3>
                        <div className="flex justify-between text-sm text-gray-400">
                            <span>DDoS Protection</span>
                            <span>Firewall</span>
                        </div>
                    </div>
                </div>

                <div className="group relative bg-card rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-500 border border-secondary/10">
                    <div className="relative p-8 text-center">
                        <i className="fas fa-code-branch text-4xl text-secondary mb-4"></i>
                        <h3 className="text-xl font-semibold mb-4 group-hover:text-secondary transition-colors">Deployment</h3>
                        <div className="flex justify-between text-sm text-gray-400">
                            <span>1-Click Deploy</span>
                            <span>Auto-Scale</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8bg-card rounded-3xl p-12 my-20 relative overflow-hidden border border-primary/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div>
                    <h2 className="text-2xl font-press-start text-primary mb-4">Virtual Host Console</h2>
                    <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                        Manage Everything
                    </div>
                    <p className="text-gray-400 mt-4">Access all your virtual hosts in one place</p>
                </div>
                <button className="cyber-btn primary">
                    <span>CONSOLE</span>
                </button>
            </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8py-20 bg-card/50 backdrop-blur-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="font-press-start text-3xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text mb-4">
                        Join Our Community
                    </h2>
                    <p className="text-xl text-gray-400">Connect with us and other developers</p>
                </div>
                
                <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                    <a href="#" className="neon-button youtube">
                        <i className="fab fa-youtube text-2xl"></i>
                        YouTube
                    </a>
                    <a href="#" className="neon-button discord">
                        <i className="fab fa-discord text-2xl"></i>
                        Discord
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    <div className="bg-card p-6 rounded-xl border border-primary/20 text-center">
                        <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                        <div className="text-gray-400">YouTube Subscribers</div>
                    </div>
                    <div className="bg-card p-6 rounded-xl border border-secondary/20 text-center">
                        <div className="text-3xl font-bold text-secondary mb-2">25K+</div>
                        <div className="text-gray-400">Discord Members</div>
                    </div>
                    <div className="bg-card p-6 rounded-xl border border-primary/20 text-center">
                        <div className="text-3xl font-bold text-primary mb-2">100+</div>
                        <div className="text-gray-400">Live Events</div>
                    </div>
                </div>
            </div>
        </section>

        <footer className="px-4 sm:px-6 lg:px-8 mt-24 pt-16 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">About AlphaVerse</h3>
                    <p className="text-gray-400">Next-gen virtual host management platform</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">Quick Links</h3>
                    <div className="flex flex-col gap-2">
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors">Documentation</a>
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors">API Reference</a>
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors">Support</a>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">Connect</h3>
                    <div className="flex gap-4">
                        <a href="#" className="text-2xl text-gray-400 hover:text-primary transition-colors">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="#" className="text-2xl text-gray-400 hover:text-primary transition-colors">
                            <i className="fab fa-discord"></i>
                        </a>
                        <a href="#" className="text-2xl text-gray-400 hover:text-primary transition-colors">
                            <i className="fab fa-slack"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center text-gray-400 text-sm py-8 border-t border-white/10">
                © 2024 AlphaVerse. All rights reserved.
            </div>
        </footer>
    </div>
    </>
  );
}
