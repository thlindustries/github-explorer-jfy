import React, { createContext, useCallback, useState, useContext } from 'react';

import api from 'services/api';
import userReposInterface from 'models/repository';

interface FavoritesContextData {
  favorites: Array<userReposInterface>;
  setFavorite(user: string, reponame: string): Promise<void>;
  removeFavorite(id: number): void;
  updateFavorites(): Array<userReposInterface>;
}

const FavoritesContext = createContext<FavoritesContextData>(
  {} as FavoritesContextData,
);

interface FavoritesData {
  favorites: Array<userReposInterface>;
}

export const FavoritesProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<FavoritesData>(() => {
    const savedFavorites = localStorage.getItem('@JFY:favorites');

    if (savedFavorites) {
      return JSON.parse(savedFavorites);
    }

    return { favorites: [] } as FavoritesData;
  });

  const setFavorite = useCallback(async (user: string, reponame: string) => {
    const response = await api.get(`/repos/${user}/${reponame}`);

    const repo = response.data;
    const updateRepos = data;

    if (repo !== undefined) {
      const verifyIfIsFavorite = updateRepos.favorites.find(
        (verifyRepo) => verifyRepo.name === reponame,
      );

      if (!verifyIfIsFavorite) {
        updateRepos.favorites.push(repo);
        localStorage.setItem('@JFY:favorites', JSON.stringify(updateRepos));
      }
    }

    setData(updateRepos);
  }, []);

  const removeFavorite = useCallback((id: number) => {
    const updateRepos = data;
    const repoIndex = updateRepos.favorites.findIndex((repo) => repo.id === id);
    updateRepos.favorites.splice(repoIndex, 1);

    localStorage.removeItem('@JFY:favorites');
    setData(updateRepos);

    localStorage.setItem('@JFY:favorites', JSON.stringify(updateRepos));
  }, []);

  const updateFavorites = useCallback(() => {
    const { favorites } = data;
    return favorites;
  }, [data]);

  return (
    <FavoritesContext.Provider
      value={{
        favorites: data.favorites,
        setFavorite,
        removeFavorite,
        updateFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export function useFavorites(): FavoritesContextData {
  const context = useContext(FavoritesContext);

  return context;
}
