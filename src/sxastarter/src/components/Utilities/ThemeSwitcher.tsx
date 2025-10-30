import React, { useEffect } from 'react';

export const Default = (): JSX.Element => {
  // Force light theme on mount and prevent dark mode
  useEffect(() => {
    document.body.classList.remove('dark');
  }, []);

  return (
    <label className="theme-switcher">
      <label htmlFor="theme-switcher" className="d-none">
        Switch theme
      </label>
      <input name="theme-switcher" id="theme-switcher" type="checkbox" checked={false} readOnly />
      <span className="theme-switcher-slider"></span>
    </label>
  );
};
