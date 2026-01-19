export function speakAvatar(text: string) {
  const speak = (window as any).avatarSpreche;
  if (typeof speak === 'function') {
    speak(text);
  }
}
