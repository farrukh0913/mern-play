import { create } from 'zustand';

const useStore = create((set) => ({
  count: 0,
  user: {},

  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
  // Update specific user fields
  updateUser: (updates) =>
    set((state) => ({
      user: {
        ...state.user,
        ...updates,
      },
    })),

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