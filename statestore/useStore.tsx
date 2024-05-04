"use client";

import { create } from "zustand";

type State = {
  menuState: boolean;
  setMenuState: () => void;
};

// Zustand store
// This store is used to manage the state of the menu

export const useBearStore = create<State>((set) => ({
  menuState: false,
  setMenuState: () => set((state) => ({ menuState: !state.menuState })),
}));
