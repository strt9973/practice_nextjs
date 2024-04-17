"use client";
import { useTheme } from './modeProvider';

export const SwitchTheme = () => {
  console.log("SwitchThemeの実行");
  const { toggleTheme } = useTheme();

  return <button onClick={toggleTheme}>テーマを切り替える</button>;
};
