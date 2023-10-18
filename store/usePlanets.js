import { create } from "zustand";

const usePlanets = create((set) => ({
  planet: 0,
  choose: (index) => set(() => ({ planet: index })),
}));

export default usePlanets;
