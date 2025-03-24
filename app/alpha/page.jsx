import React from 'react'

function page() {
  return (
   <>
   
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
     
        <header className="text-center mb-16">
            <h1 className="font-press-start text-4xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text mb-4">
                Configure Your Hosts
            </h1>
            <p className="text-xl text-gray-400">Select your virtual host requirements and we'll set everything up for you</p>
        </header>

      
        <div className="max-w-3xl mx-auto">
            <form className="bg-card rounded-2xl p-8 border border-primary/20">
              
                <div className="mb-8">
                    <label className="block text-primary mb-2 font-semibold">Number of Hosts</label>
                    <div className="flex items-center gap-4">
                        <button type="button" className="w-12 h-12 rounded-lg border-2 border-primary text-primary hover:bg-primary/10 transition-colors">-</button>
                        <input type="number" min={1} max={100} className="w-24 h-12 bg-dark text-center text-2xl font-bold text-primary border-2 border-primary rounded-lg focus:outline-none focus:border-secondary"/>
                        <button type="button" className="w-12 h-12 rounded-lg border-2 border-primary text-primary hover:bg-primary/10 transition-colors">+</button>
                    </div>
                </div>

                <div className="space-y-6 mb-8">
                    <div>
                        <label className="block text-primary mb-2 font-semibold">Strategy Type</label>
                        <select className="w-full bg-dark border-2 border-primary rounded-lg p-3 text-white focus:outline-none focus:border-secondary">
                            <option value="standard">Dragon Tower</option>
                            <option value="performance">Dice Low risk</option>
                            <option value="enterprise">Dise high risk</option>
                            <option value="custom">Limbo </option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-primary mb-2 font-semibold">Duration</label>
                        <select className="w-full bg-dark border-2 border-primary rounded-lg p-3 text-white focus:outline-none focus:border-secondary">
                            <option value="us-east">1 week</option>
                            <option value="us-west">2 week</option>
                            <option value="eu-central">3 week</option>
                            <option value="ap-southeast">4 week</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-primary mb-2 font-semibold">Operating System</label>
                        <select className="w-full bg-dark border-2 border-primary rounded-lg p-3 text-white focus:outline-none focus:border-secondary">
                            <option value="ubuntu">Ubuntu 22.04 LTS</option>
                            <option value="centos">CentOS 9 Stream</option>
                            <option value="debian">Debian 12</option>
                            <option value="windows">Windows Server 2022</option>
                        </select>
                    </div>
                </div>

             
                <div className="mb-8">
                    <label className="block text-primary mb-4 font-semibold">Additional Features</label>
                    <div className="space-y-3">
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" className="w-5 h-5 rounded border-2 border-primary checked:bg-primary"/>
                            <span className="text-white">Automated Backups</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" className="w-5 h-5 rounded border-2 border-primary checked:bg-primary"/>
                            <span className="text-white">DDoS Protection</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" className="w-5 h-5 rounded border-2 border-primary checked:bg-primary"/>
                            <span className="text-white">Load Balancing</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" className="w-5 h-5 rounded border-2 border-primary checked:bg-primary"/>
                            <span className="text-white">Monitoring & Alerts</span>
                        </label>
                    </div>
                </div>

                <div className="mb-8 p-4 rounded-lg border border-secondary/20">
                    <div className="flex justify-between items-center">
                        <span className="text-secondary font-semibold">Estimated Monthly Cost</span>
                        <span className="text-2xl font-bold text-secondary">$99.99</span>
                    </div>
                </div>

            
                <button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-lg font-semibold hover:-translate-y-1 transition-transform">
                    Create Hosts
                </button>
            </form>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-20">
            <div className="bg-card p-6 rounded-xl border border-primary/20">
                <i className="fas fa-bolt text-3xl text-primary mb-4"></i>
                <h3 className="text-lg font-semibold mb-2">Instant Deployment</h3>
                <p className="text-gray-400">Your virtual hosts will be ready in minutes with our automated deployment system.</p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-secondary/20">
                <i className="fas fa-shield-alt text-3xl text-secondary mb-4"></i>
                <h3 className="text-lg font-semibold mb-2">Enterprise Security</h3>
                <p className="text-gray-400">Built-in security features to protect your hosts from threats and attacks.</p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-primary/20">
                <i className="fas fa-chart-line text-3xl text-primary mb-4"></i>
                <h3 className="text-lg font-semibold mb-2">24/7 Monitoring</h3>
                <p className="text-gray-400">Real-time monitoring and alerts to ensure your hosts are always performing optimally.</p>
            </div>
        </div>
    </div>

   
    <footer className="mt-24 pt-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
    </footer>
   </>
  )
}

export default page