import React, { useState, useEffect } from "react";
import FavoriteItem from "./FavoriteItems";
import axios from "axios";
const FavoritesTab = (props) => {
  const [favItems, setfavItems] = useState([]);

  useEffect(() => {
    fetchfavorites();
  }, []);
  const fetchfavorites = async () => {
    try {
      console.log("inside fav fetch data");
      const response = await axios.get("/favorites");
      const { wishListItems } = response.data;
      
      setfavItems(wishListItems);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };
  const removeItem = async (itemId) => {
    try {
      alert(itemId) ;
      await axios.delete(`/favorites/remove/${itemId}`);
      fetchfavorites(); // Fetch updated cart data after removing the item
      alert("Item removed from wishlist");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };
  return (
    <>
      <div className="search-result-container">
        
        {favItems.map((course) => (
          <FavoriteItem
            key={course._id}
            result={course}
            handleAddToCart={props.handleAddToCart}
            handleAddToWishList={props.handleAddToWishList}
            unFavorite={() => removeItem(course._id)}
          />
        ))}
      </div>
    </>
  );
};

export default FavoritesTab;
