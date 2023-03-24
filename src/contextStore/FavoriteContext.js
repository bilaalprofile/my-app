import { createContext } from "react";
import { useState } from "react";

const FavoriteContext = createContext({
  favorites: [],
  totalfavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

export const FavoriteContextprovider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoriteHandler = (favoriteMeetup) => {
    setUserFavorites((prevUserFavorite) => {
      return prevUserFavorite.concat(favoriteMeetup);
    });
  };
  const removeFavoriteHandler = (meetupId) => {
    setUserFavorites((prevUserFavorite) => {
      return prevUserFavorite.filter((meetup) => meetup.id !== meetupId);
    });
  };
  const itemIsFavoriteHandler = (meetupId) => {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  };
  const context = {
    favorites: userFavorites,
    totalfavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };
  return (
    <FavoriteContext.Provider value={context}>
      {props.children}
    </FavoriteContext.Provider>
  );
};
export default FavoriteContext;
