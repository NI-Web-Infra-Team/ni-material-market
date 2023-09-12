(() => {
  const systemTheme = matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
  let theme = localStorage.getItem('theme') ?? 'system';

  if (theme === 'system') {
    theme = systemTheme;
  }

  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
    // daisyui
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();
