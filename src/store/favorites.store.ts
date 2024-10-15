import { create } from "zustand";

interface FavoritesState {
  favorites: { id: number }[];
  addToFavorites: (id: number) => void;
  removeFromFavorites: (id: number) => void;
}

export const useFavorites = create<FavoritesState>()((set) => ({
  favorites: [],
  addToFavorites: (id) =>
    set((state) => {
      if (!state.favorites.some((element) => element.id === id)) {
        return {
          ...state,
          favorites: [...state.favorites, { id }],
        };
      }
      return state;
    }),
  removeFromFavorites: (id) =>
    set((state) => ({
      ...state,
      favorites: state.favorites.filter((element) => element.id !== id),
    })),
}));
