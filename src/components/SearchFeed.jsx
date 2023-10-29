import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { useParams } from "react-router-dom";
import { fetchDataFromAPI } from "../utils/fetchDataFromAPI";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchQuery } = useParams();

  useEffect(() => {
    fetchDataFromAPI(`search?part=snippet&q=${searchQuery}`).then((data) =>
      setVideos(data?.items)
    );
  }, [searchQuery]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search results for:{" "}
        <span style={{ color: "#FC1503" }}>{searchQuery}</span>
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
