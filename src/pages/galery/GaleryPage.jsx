import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Grid,
  Pagination,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemText,
  Divider,
  Icon,
} from "@mui/material";

const GaleryPage = () => {
  // state
  const [images, setImages] = useState([]);
  const [pagination, setPagination] = useState({ total: 0, page: 1 });
  const [categories, setCategories] = useState([
    { name: "Harry Potter", icon: "🧙" },
    { name: "Star Wars", icon: "⚔️" },
    { name: "Marvel", icon: "🦸‍♂" },
    { name: "DC Comics", icon: "🦹🏻" },
    { name: "Fantasy", icon: "🐲" },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("Harry Potter");

  const perPage = 9;
  const apiKey = "XnwpPKhh4msoD07AMkJrjHXUmXjMHaMyZYb4SAlxYB5njXsfZNSi9QKQ";

  useEffect(() => {
    const apiUrl = `https://api.pexels.com/v1/search?query=${selectedCategory}&per_page=${perPage}&page=${pagination.page}`;
    axios
      .get(apiUrl, {
        headers: {
          Authorization: apiKey,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        }
      })
      .then((data) => {
        const photos = data.photos.map((item) => item.src.medium);
        setPagination({ ...pagination, total: data.total_results });
        setImages(photos);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pagination.page, selectedCategory]);

  const pageChangeHandler = (event, value) => {
    setPagination({ ...pagination, page: value });
  };

  const categoryChangeHandler = (category) => {
    setSelectedCategory(category);
    setPagination({ ...pagination, page: 1 });
  };

  const pageCount = Math.ceil(pagination.total / perPage);

  return (
    <Grid container columnSpacing={2} rowSpacing={1}>
      <Grid item xs={2} sx={{ borderRight: "1px solid #ddd" }}>
        <List>
          {categories.map((category) => (
            <ListItem key={category.name} button onClick={() => categoryChangeHandler(category.name)}>
              <Icon>{category.icon}</Icon>
              <ListItemText primary={category.name} />
            </ListItem>
          ))}
          <Divider />
        </List>
      </Grid>
      <Grid item xs={10}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {images.map((item) => (
            <ImageListItem key={item}>
              <img
                srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item}?w=248&fit=crop&auto=format`}
                alt="image"
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Grid item xs={12} sx={{ display: "flex" }}>
          <Pagination
            page={pagination.page}
            onChange={pageChangeHandler}
            sx={{ m: "auto" }}
            count={pageCount}
            color="primary"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GaleryPage;