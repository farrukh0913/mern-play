import { create } from 'zustand';

const useStore = create((set) => ({
  count: 0,
  user: {},

  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),

  increment: () =>
    set((state) => ({
      count: state.count + 1,
    })),

  decrement: () =>
    set((state) => ({
      count: state.count - 1,
    })),


  reset: () =>
    set({
      count: 0,
    }),
}));

export default useStore;