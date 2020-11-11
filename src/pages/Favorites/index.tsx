import React, { useState, useEffect } from 'react';

import { useFavorites } from 'hooks/favorites';
import userReposInterface from 'models/repository';

import RepositoryCard from 'components/Atoms/RepositoryCard';

import { Container } from './styles';

const Favorites: React.FC = () => {
  const [repos, setRepos] = useState<userReposInterface[]>([]);

  const { favorites, updateFavorites } = useFavorites();

  useEffect(() => {
    setRepos(updateFavorites());
  }, [favorites, updateFavorites]);

  return (
    <Container>
      {repos
        && repos.length > 0
        && repos.map((repo) => (
          <RepositoryCard
            key={repo.id}
            userRepo={repo}
            favoriteList
            updateFavorites={updateFavorites}
          />
        ))}
    </Container>
  );
};

export default Favorites;
