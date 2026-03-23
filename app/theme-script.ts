// This script runs in the <head> to prevent theme flashing
// DO NOT USE THIS IN REACT - it's meant to be embedded as a plain script tag
export const themeScript = `
  (function() {
    try {
      const theme = localStorage.getItem('theme');
      const isDark = theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches);
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {}
  })();
`;
