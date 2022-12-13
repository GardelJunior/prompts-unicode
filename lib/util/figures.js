'use strict';	

 const main = {
  arrowUp: '↑',
  arrowDown: '↓',
  arrowLeft: '←',
  arrowRight: '→',
  radioOn: '◉',
  radioOff: '◯',
  tick: '✔',	
  cross: '✖',	
  ellipsis: '…',	
  pointerSmall: '›',	
  line: '─',	
  pointer: '❯'	
};	
const fallback = {
  arrowUp: main.arrowUp,
  arrowDown: main.arrowDown,
  arrowLeft: main.arrowLeft,
  arrowRight: main.arrowRight,
  radioOn: '(*)',
  radioOff: '( )',	
  tick: '√',	
  cross: '×',	
  ellipsis: '...',	
  pointerSmall: '»',	
  line: '─',	
  pointer: '>'	
};	

function isUnicodeSupported() {
	if (process.platform === 'win32') {
    return Boolean(process.env.CI)
		|| Boolean(process.env.WT_SESSION) // Windows Terminal
		|| Boolean(process.env.TERMINUS_SUBLIME) // Terminus (<0.2.27)
		|| process.env.ConEmuTask === '{cmd::Cmder}' // ConEmu and cmder
		|| process.env.TERM_PROGRAM === 'Terminus-Sublime'
		|| process.env.TERM_PROGRAM === 'vscode'
		|| process.env.TERM === 'xterm-256color'
		|| process.env.TERM === 'alacritty'
		|| process.env.TERMINAL_EMULATOR === 'JetBrains-JediTerm';
	}

	return process.env.TERM !== 'linux'; // Linux console (kernel)
}


const figures = isUnicodeSupported() ? main : fallback;	

module.exports = figures;
