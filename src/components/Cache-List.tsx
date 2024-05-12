import useWebSocket from "react-use-websocket";
import List from "./List";
import useGetAllCacheApi from "../apis/getAll";
import { useEffect, useState } from "react";
import IconRefresh from "./icon/refresh-icon";

export default function CacheList() {
  const [live, setLive] = useState("false");
  const [refresh, setRefresh] = useState(0);
  const [data, setData] = useState<
    { key: string; value: string; timeout: string }[] | undefined
  >([]);
  const {
    lastJsonMessage: liveData,
  }: { lastJsonMessage: { key: string; value: string; timeout: string }[] } =
    useWebSocket(`wss://${import.meta.env.VITE_BE}/ws`);

  const { data: apiData, mutate } = useGetAllCacheApi();

  // for updating the data pointer to websocket data or api data on live/static button toggle
  useEffect(() => {
    setData(live === "true" ? liveData : apiData);
  }, [apiData, live, liveData]);

  // to refresh the cache list when using api
  useEffect(() => {
    console.log(refresh);
    mutate();
  }, [refresh]);

  return (
    <>
      <h2 className="card-title text-center m-auto">
        Cache List{" "}
        {live !== "true" && (
          <span
            className="swap cursor-pointer"
            onClick={() => setRefresh((e) => ++e)}
          >
            <IconRefresh />
          </span>
        )}
        <label className="swap btn btn-outline btn-xs">
          <input
            type="checkbox"
            value={live}
            onChange={(e) =>
              setLive(String(e.target.value === "true" ? false : true))
            }
          />
          <span className="swap-on">Live</span>
          <span className="swap-off">Static</span>
          {/* {live} */}
        </label>
      </h2>
      {data?.map &&
        data?.map((e) => (
          <List
            key={e.key}
            keyName={e.key}
            value={e.value}
            timestamp={e.timeout}
          />
        ))}
    </>
  );
}
