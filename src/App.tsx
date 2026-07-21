import { useState } from 'react';
import { ChevronDown, Copy, Check } from 'lucide-react';

const INSTALL_CMD = "npm install -g thinksoft@dev"

const ThinksoftLogo = ({ className = "w-5 h-4 text-[9px]" }) => (
  <div className={`flex items-center justify-center border border-current rounded-sm font-mono font-bold leading-none ${className}`}>
    {'>_'}
  </div>
);

function FAQItem({ question, answer }: { question: string, answer: string, key?: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-6 border-b border-white/5">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex items-center justify-between text-left group"
      >
        <span className="text-[15px] font-medium text-neutral-200 group-hover:text-white transition-colors">{question}</span>
        <ChevronDown 
          size={18} 
          className={`text-neutral-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      
      {isOpen && (
        <div className="mt-4 text-[14px] text-neutral-400 leading-relaxed pr-8">
          {answer}
        </div>
      )}
    </div>
  );
}

function TerminalMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-[#1a1a1a] rounded-[10px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.05)] flex flex-col overflow-hidden text-[13px] ${className}`}>
      {/* Window Header */}
      <div className="h-10 border-b border-white/5 flex items-center px-4 relative bg-[#111]">
        <div className="flex gap-2">
          <div className="w-[11px] h-[11px] rounded-full bg-[#FF5F56]"></div>
          <div className="w-[11px] h-[11px] rounded-full bg-[#FFBD2E]"></div>
          <div className="w-[11px] h-[11px] rounded-full bg-[#27C93F]"></div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 text-neutral-500 text-[12px] font-medium tracking-wide">agent</div>
      </div>

      {/* Body */}
      <div className="p-4 font-mono text-[13px] leading-relaxed text-neutral-300">
        {/* Question Box */}
        <div className="bg-[#0a0a0a] border border-white/5 rounded-[6px] py-3.5 px-4 mb-5 shadow-sm mt-3">
          <div className="text-neutral-500 mb-2 font-mono text-[13px]">Question</div>
          <div className="font-medium text-neutral-200 mb-3 tracking-tight font-sans text-[14px]">What data should the mission control display?</div>
          <div className="flex flex-col gap-2 font-mono text-[13px]">
            <div className="text-neutral-100 font-medium border-l-[2px] border-neutral-100 pl-2 -ml-[10px]">&nbsp;&nbsp;[x] Real-time metrics</div>
            <div className="text-neutral-500">&nbsp;&nbsp;[ ] System status</div>
          </div>
        </div>

        {/* Agent Status */}
        <div className="flex flex-col gap-2.5 pl-1 mb-5">
          <div className="flex items-center gap-3">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#888"><path d="M12 2L20.6603 7V17L12 22L3.33975 17V7L12 2Z"></path></svg>
            <span className="text-neutral-400">Analyzed scope</span>
            <span className="text-neutral-600">2s</span>
          </div>
          <div className="flex items-center gap-3">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#888"><path d="M12 2L20.6603 7V17L12 22L3.33975 17V7L12 2Z"></path></svg>
            <span className="text-neutral-400">Started 3 agents</span>
          </div>
          <div className="flex flex-col gap-2 pl-3 mt-1 text-[13px] text-neutral-500">
            <div className="flex items-center gap-3">
              <div className="w-[10px] h-[10px] bg-[#00C366] rounded-sm shrink-0" style={{clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"}}></div>
              <span className="text-neutral-200 font-medium">Health</span>
              <span className="text-neutral-500">· Building health metrics panel</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-[10px] h-[10px] bg-[#00C366] rounded-sm shrink-0" style={{clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"}}></div>
              <span className="text-neutral-200 font-medium">Deployments</span>
              <span className="text-neutral-500">· Creating deployment tracker</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-[10px] h-[10px] bg-[#00C366] rounded-sm shrink-0" style={{clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"}}></div>
              <span className="text-neutral-200 font-medium">Incidents</span>
              <span className="text-neutral-500">· Building incident feed</span>
            </div>
          </div>
        </div>

        {/* Follow-up Bar */}
        <div className="border border-white/10 rounded-[4px] py-1.5 px-3 flex justify-between items-center bg-[#0a0a0a] shadow-sm mb-4">
          <div className="flex items-center gap-2 text-neutral-500">
            <span>→</span><span>Add a follow-up</span>
          </div>
          <span className="text-neutral-600 text-[11px]">esc to stop</span>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-2 text-[12px] text-neutral-500 border-t border-white/5 pt-3">
          <div className="text-[#32D74B] flex items-center gap-2 font-sans font-medium">
            <div className="flex items-center justify-center relative w-3.5 h-3.5">
              <div className="absolute inset-0 rounded-full border border-current opacity-40"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
            </div>
            Plan (shift+tab to cycle)
          </div>
          <div className="font-mono text-neutral-600">GPT-5.5 Extra High Fast · 5%</div>
          <div className="font-mono text-neutral-600">/ commands · @ files · ! shell</div>
        </div>
      </div>
    </div>
  );
}

const faqs = [
  { q: "How do I install Thinksoft?", a: "Run `npm install -g thinksoft@dev` in your terminal and you are ready." },
  { q: "Do I need my own API keys?", a: "Yes. You bring your own keys from OpenAI, Anthropic, Google, or any supported provider." },
  { q: "What models does Thinksoft support?", a: "Frontier models from OpenAI, Anthropic, Google, DeepSeek, Grok, and more. Switch models mid-session with `/model`." },
  { q: "Is my code sent to third parties?", a: "Only to the AI provider you choose. We do not store your code." },
  { q: "Does Thinksoft work on Windows, macOS, and Linux?", a: "Yes. All platforms are supported with native installers." },
  { q: "What is Thinksoft CLI?", a: "Thinksoft CLI is an AI-powered coding assistant that helps you build, edit, debug, and understand code directly from your terminal." },
  { q: "Is Thinksoft CLI free?", a: "Yes. Thinksoft CLI is completely free to use." },
  { q: "Which operating systems are supported?", a: "Thinksoft CLI supports Windows, macOS, and Linux." },
  { q: "Can Thinksoft CLI work with existing projects?", a: "Yes. Thinksoft CLI can understand and work with both new and existing codebases." },
  { q: "How do I get started?", a: "Install Thinksoft CLI, open your terminal, and start building with AI in seconds." },
  { q: "Can Thinksoft automate repetitive tasks?", a: "Yes. Use skills and subagents to automate documentation, code reviews, deployments, and more." },
];

export default function App() {
  const [copied, setCopied] = useState(false);

  const copyCmd = async () => {
    try {
      await navigator.clipboard.writeText(INSTALL_CMD);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-white/20">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 sm:px-6 py-5 max-w-[1200px] mx-auto">
        <div className="flex items-center gap-2">
          <ThinksoftLogo className="w-5 h-4 text-[9px]" />
          <span className="font-medium text-base tracking-tight">Thinksoft</span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/login"
            className="text-[14px] text-neutral-300 hover:text-white transition-colors font-medium px-3 py-1.5"
          >
            Log in
          </a>
          <a
            href="/login"
            className="text-[14px] font-medium bg-white text-black px-4 py-1.5 rounded-full hover:bg-neutral-200 transition-colors"
          >
            Get started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center mt-12 sm:mt-16 px-4 text-center">
        <h1 className="text-[36px] sm:text-[48px] md:text-[56px] font-medium tracking-tight mb-4 sm:mb-5 leading-[1.1]">
          From imagination to production.
        </h1>
        <p className="text-neutral-400 text-[15px] sm:text-base md:text-lg max-w-2xl mb-8 leading-relaxed font-normal">
          The AI coding engine that gets it surgically right.<br className="hidden sm:block" />
          No approximation. No bloat. Just perfect code, every time.
        </p>
        
        <div className="flex items-center bg-[#ebebeb] text-[#111] rounded-[10px] p-1.5 w-full max-w-[320px] mx-auto font-mono text-[12px] sm:text-[14px]">
          <span className="flex-1 px-3 text-left overflow-hidden text-ellipsis whitespace-nowrap">{INSTALL_CMD}</span>
          <button onClick={copyCmd} aria-label="Copy install command" className="bg-[#2a2a2a] shrink-0 text-white p-2 sm:p-2.5 rounded-lg hover:bg-[#404040] transition-colors flex items-center justify-center cursor-pointer">
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </button>
        </div>
      </main>

      {/* Mockup Section */}
      <section className="mt-16 sm:mt-20 max-w-[960px] mx-auto px-4 pb-16 sm:pb-20">
        {/* The container for the mockup with background image */}
        <div 
          className="relative w-full aspect-[16/10] md:aspect-[1.65] rounded-t-2xl overflow-hidden shadow-2xl"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop')`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
           {/* Dark overlay for better contrast */}
           <div className="absolute inset-0 bg-black/10"></div>
           
           {/* The Editor Window */}
            <TerminalMockup className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[95%] sm:w-[92%] h-[88%]" />
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-16 sm:py-24 px-4 w-full">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center">
          <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-medium tracking-tight mb-3 text-center">
            One platform. Endless possibilities.
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg mb-12 sm:mb-16 text-center max-w-2xl font-normal">
            Create, improve, and launch software without limits.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {/* Row 1 */}
            <div className="bg-[#111] border border-white/5 rounded-2xl p-8 flex flex-col gap-3 transition-colors hover:bg-white/5">
              <h3 className="font-medium text-[15px] text-white">Multi-Model Access</h3>
              <p className="text-neutral-400 text-[14px] leading-relaxed">
                Access the best AI model for every task without switching tools.
              </p>
            </div>
            <div className="bg-[#111] border border-white/5 rounded-2xl p-8 flex flex-col gap-3 transition-colors hover:bg-white/5">
              <h3 className="font-medium text-[15px] text-white">Open by Default</h3>
              <p className="text-neutral-400 text-[14px] leading-relaxed">
                Connect any AI provider and use the models that fit your workflow and budget.
              </p>
            </div>
            <div className="bg-[#111] border border-white/5 rounded-2xl p-8 flex flex-col gap-3 transition-colors hover:bg-white/5">
              <h3 className="font-medium text-[15px] text-white">Enterprise-Grade Security</h3>
              <p className="text-neutral-400 text-[14px] leading-relaxed">
                Built to uncover security risks and maintain high standards throughout development.
              </p>
            </div>

            {/* Row 2 */}
            <div className="bg-[#111] border border-white/5 rounded-2xl p-8 flex flex-col gap-3 transition-colors hover:bg-white/5">
              <h3 className="font-medium text-[15px] text-white">Persistent Project Intelligence</h3>
              <p className="text-neutral-400 text-[14px] leading-relaxed">
                Maintains a comprehensive understanding of your codebase, architecture, workflows, and historical decisions.
              </p>
            </div>
            <div className="bg-[#111] border border-white/5 rounded-2xl p-8 flex flex-col gap-3 transition-colors hover:bg-white/5">
              <h3 className="font-medium text-[15px] text-white">Specialized Skills</h3>
              <p className="text-neutral-400 text-[14px] leading-relaxed">
                Create reusable expertise, workflows, and development practices that Thinksoft can apply consistently across every project.
              </p>
            </div>
            <div className="bg-[#111] border border-white/5 rounded-2xl p-8 flex flex-col gap-3 transition-colors hover:bg-white/5">
              <h3 className="font-medium text-[15px] text-white">Dynamic Operating Modes</h3>
              <p className="text-neutral-400 text-[14px] leading-relaxed">
                Tailor Thinksoft's execution strategy with specialized modes designed for every stage of software development.
              </p>
            </div>

            {/* Row 3 */}
            <div className="bg-[#111] border border-white/5 rounded-2xl p-8 flex flex-col gap-3 transition-colors hover:bg-white/5">
              <h3 className="font-medium text-[15px] text-white">Open Integration Framework</h3>
              <p className="text-neutral-400 text-[14px] leading-relaxed">
                Extend Thinksoft with MCP-powered tools, services, and custom infrastructure without vendor lock-in.
              </p>
            </div>
            <div className="bg-[#111] border border-white/5 rounded-2xl p-8 flex flex-col gap-3 transition-colors hover:bg-white/5">
              <h3 className="font-medium text-[15px] text-white">Enterprise-Grade Architecture</h3>
              <p className="text-neutral-400 text-[14px] leading-relaxed">
                Build applications with scalable foundations, maintainable codebases, and production-ready engineering practices from day one.
              </p>
            </div>
            <div className="bg-[#111] border border-white/5 rounded-2xl p-8 flex flex-col gap-3 transition-colors hover:bg-white/5">
              <h3 className="font-medium text-[15px] text-white">Autonomous Browser Validation</h3>
              <p className="text-neutral-400 text-[14px] leading-relaxed">
                Uses a built-in browser environment to rigorously test applications, validate user workflows, uncover frontend vulnerabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 max-w-[1200px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-24">
          <div className="lg:w-1/3">
            <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-medium tracking-tight lg:sticky lg:top-8">
              Questions & Answers
            </h2>
          </div>
          
          <div className="lg:w-2/3 flex flex-col border-t border-white/5">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Card */}
      <section className="py-16 px-4 w-full max-w-[1200px] mx-auto mb-20">
        <div className="bg-[#141414] border border-white/5 rounded-3xl overflow-hidden flex flex-col lg:flex-row relative">
          <div className="w-full lg:w-[45%] p-8 sm:p-10 md:p-16 flex flex-col justify-center z-10">
            <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-medium tracking-tight mb-4 leading-[1.1]">
              Start coding with<br/>precision today
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg mb-8 leading-relaxed">
              Free forever. Install in seconds.<br/>Start building immediately.
            </p>
            
            <div className="flex flex-col items-start w-full">
              <div className="flex flex-wrap gap-2 mb-3">
                <button className="bg-white/10 text-white px-3 py-1.5 rounded-full text-[12px] sm:text-[13px] font-medium">PowerShell</button>
                <button className="text-neutral-400 px-3 py-1.5 rounded-full text-[12px] sm:text-[13px] hover:bg-white/5 transition-colors">macOS</button>
                <button className="text-neutral-400 px-3 py-1.5 rounded-full text-[12px] sm:text-[13px] hover:bg-white/5 transition-colors">Linux / WSL</button>
              </div>
              <div className="flex items-center bg-[#222] border border-white/5 rounded-xl p-1.5 w-full max-w-sm font-mono text-[12px] sm:text-[14px]">
                <span className="flex-1 px-3 text-neutral-200 overflow-hidden text-ellipsis whitespace-nowrap">{INSTALL_CMD}</span>
                <button onClick={copyCmd} className="bg-white/10 shrink-0 text-white p-2 sm:p-2.5 rounded-lg hover:bg-white/20 transition-colors flex items-center justify-center cursor-pointer">
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-[55%] min-h-[250px] sm:min-h-[350px] lg:min-h-[500px] relative overflow-hidden bg-[#111]">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop')`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
            
            <div className="absolute top-8 sm:top-12 left-8 sm:left-12 w-[600px] sm:w-[800px] h-[450px] sm:h-[600px] shadow-2xl origin-top-left transform scale-[0.55] sm:scale-75 lg:scale-100">
              <TerminalMockup className="h-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
