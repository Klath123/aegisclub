import { useEffect, useRef } from 'react';
import $ from 'jquery';
import './TerminalLoader.css';

interface TerminalLoaderProps {
  onComplete: () => void;
}

export default function TerminalLoader({ onComplete }: TerminalLoaderProps) {
  const terminalRef = useRef<HTMLDivElement>(null);
  const tvRef = useRef<HTMLDivElement>(null);
  const scanlinesRef = useRef<HTMLDivElement>(null);
  const initiated = useRef(false);

  useEffect(() => {
    if (!terminalRef.current || !tvRef.current || !scanlinesRef.current || initiated.current) return;
    initiated.current = true;

    // Force global jQuery for the CDN script
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).jQuery = $;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).$ = $;

    // Load CSS from CDN
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/jquery.terminal/2.42.0/css/jquery.terminal.min.css';
    document.head.appendChild(link);

    // Load JS from CDN
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery.terminal/2.42.0/js/jquery.terminal.min.js';
    script.onload = () => {
      initTerminal();
    };
    document.body.appendChild(script);

    const initTerminal = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const globalJQuery = (window as any).jQuery;

      const setSize = () => {
        if (scanlinesRef.current && tvRef.current) {
          const height = window.innerHeight;
          const width = window.innerWidth;
          const time = (height * 2) / 170;
          scanlinesRef.current.style.setProperty("--time", isNaN(time) ? '2' : time.toString());
          tvRef.current.style.setProperty("--width", width.toString());
          tvRef.current.style.setProperty("--height", height.toString());
        }
      };

      const exit = () => {
        if (tvRef.current) {
          globalJQuery(tvRef.current).addClass('collapse');
          setTimeout(() => {
            onComplete();
          }, 2000);
        } else {
          onComplete();
        }
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      globalJQuery(terminalRef.current).terminal(function (command: string, term: any) {
        const cmd = globalJQuery.terminal.parse_command(command);
        if (cmd.name === 'exit') {
          exit();
        } else {
          term.echo(`Command '${command}' not found. Type 'exit' to enter system.`);
        }
      }, {
        greetings: `
                         _____                                                        
    _____           _____\\    \\        _____         ____________             _____   
  /      |_        /    / |    |  _____\\    \\_      /            \\       _____\\    \\  
 /         \\      /    /  /___/| /     /|     |    |\\___/\\  \\\\___/|     /    / \\    | 
|     /\\    \\    |    |__ |___|//     / /____/|     \\|____\\  \\___|/    |    |  /___/| 
|    |  |    \\   |       \\     |     | |_____|/           |  |      ____\\    \\ |   || 
|     \\/      \\  |     __/ __  |     | |_________    __  /   / __  /    /\\    \\|___|/ 
|\\      /\\     \\ |\\    \\  /  \\ |\\     \\|\\        \\  /  \\/   /_/  ||    |/ \\    \\      
| \\_____\\ \\_____\\| \\____\\/    || \\_____\\|    |\\__/||____________/||\\____\\ /____/|     
| |     | |     || |    |____/|| |     /____/| | |||           | /| |   ||    | |     
 \\|_____|\\|_____| \\|____|   | | \\|_____|     |\\|_|/|___________|/  \\|___||____|/      
                        |___|/         |____/                                         
`,
        name: 'aegis_loader',
        prompt: 'aegis> ',
        onInit: function () {
          setSize();
          // Boot sequence with typing effect
          const bootSequence = async () => {
            // Note: We use the 'term' instance from the closure if available, or 'this'
            // 'this' inside onInit refers to the terminal instance
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const t = this as any;

            await t.echo('initializing trust boundary...', { typing: true, delay: 50 });
            await t.echo('verifying policy integrity...', { typing: true, delay: 50 });
            await t.echo('loading detection engines...', { typing: true, delay: 50 });
            await t.echo('synchronizing control plane...', { typing: true, delay: 50 });
            await t.echo('');
            await t.echo("Type 'exit' to enter AEGIS interface.", { typing: true, delay: 30 });
          };
          bootSequence();
        }
      });

      window.addEventListener('resize', setSize);
      setSize();
    };

    return () => {
      // Cleanup if needed
    };
  }, [onComplete]);

  return (
    <div className="terminal-loader-container">
      <div className="tv" ref={tvRef}>
        <div id="terminal-mount" ref={terminalRef}></div>
        <div className="scanlines" ref={scanlinesRef}></div>
        <div className="flicker"></div>
        <div className="noise"></div>
      </div>
    </div>
  );
}
