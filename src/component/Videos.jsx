import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import useVideoList from "../hook/useVideoList";
import classes from "../style/Videos.module.css";
import { Video } from "./Video";
export default function Videos() {
  const [page, setPage] = useState(1);
  const { videos, error, loading, hasMore } = useVideoList(page);

  // console.log(videos);
  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          className={classes.videos}
          dataLength={videos.length}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          next={() => setPage((prevPage) => prevPage + 8)}
        >
          {videos.map((video, index) => (
            <Link
              to={`/quiz/${video.youtubeID}`}
              state={{ title: video.title }}
              key={index}
            >
              <Video
                title={video.title}
                noq={video.noq}
                image={video.youtubeID}
              />
            </Link>
          ))}
        </InfiniteScroll>
      )}
      {!loading && videos.length == 0 && <p>No data found</p>}
      {error && <div>there was an error</div>}
      {loading && <div>loading</div>}
    </div>
  );
}
