// app/components/ProtectConsole.tsx
"use client";

import { useEffect } from 'react';

export default function ProtectConsole() {
  useEffect(() => {
    // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Right-Click સભી રોકવા
    const blockShortcuts = (event: KeyboardEvent | MouseEvent) => {
      // Keyboard events
      if (event instanceof KeyboardEvent) {
        // F12
        if (event.key === 'F12' || (event as any).keyCode === 123) {
          event.preventDefault();
          event.stopPropagation();
          return false;
        }
        
        // Ctrl+Shift+I (DevTools)
        if (event.ctrlKey && event.shiftKey && event.key === 'I') {
          event.preventDefault();
          event.stopPropagation();
          return false;
        }
        
        // Ctrl+Shift+J (Console)
        if (event.ctrlKey && event.shiftKey && event.key === 'J') {
          event.preventDefault();
          event.stopPropagation();
          return false;
        }
        
        // Ctrl+Shift+C (Inspect)
        if (event.ctrlKey && event.shiftKey && event.key === 'C') {
          event.preventDefault();
          event.stopPropagation();
          return false;
        }
        
        // Ctrl+U (View Source)
        if (event.ctrlKey && event.key === 'U') {
          event.preventDefault();
          event.stopPropagation();
          return false;
        }
      }
      
      // Mouse events - Right click disable
      if (event instanceof MouseEvent && event.button === 2) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      }
      
      return true;
    };

    // Event listeners ઉમેરો
    document.addEventListener('keydown', blockShortcuts, true);
    document.addEventListener('keyup', blockShortcuts, true);
    document.addEventListener('keypress', blockShortcuts, true);
    document.addEventListener('contextmenu', blockShortcuts, true);
    
    // Extra protection
    document.addEventListener('dragstart', (e) => e.preventDefault());
    document.addEventListener('selectstart', (e) => e.preventDefault());

    return () => {
      // Cleanup
      document.removeEventListener('keydown', blockShortcuts, true);
      document.removeEventListener('keyup', blockShortcuts, true);
      document.removeEventListener('keypress', blockShortcuts, true);
      document.removeEventListener('contextmenu', blockShortcuts, true);
    };
  }, []);

  return null;
}