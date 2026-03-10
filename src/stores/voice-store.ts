import { create } from 'zustand';

interface VoiceState {
  isListening: boolean;
  isSpeaking: boolean;
  transcript: string;
  startListening: () => void;
  stopListening: () => void;
  setTranscript: (text: string) => void;
  clearTranscript: () => void;
  setIsSpeaking: (isSpeaking: boolean) => void;
}

export const useVoiceStore = create<VoiceState>((set) => ({
  isListening: false,
  isSpeaking: false,
  transcript: '',
  startListening: () => set({ isListening: true }),
  stopListening: () => set({ isListening: false }),
  setTranscript: (text) => set({ transcript: text }),
  clearTranscript: () => set({ transcript: '' }),
  setIsSpeaking: (isSpeaking) => set({ isSpeaking }),
}));
