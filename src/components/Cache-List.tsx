import useWebSocket from "react-use-websocket";
import List from "./List";

export default function CacheList() {
  const {
    lastJsonMessage: data,
  }: { lastJsonMessage: { key: string; value: string; timeout: string }[] } =
    useWebSocket(`wss://${import.meta.env.VITE_BE}/ws`);
  return (
    <>
      <h2 className="card-title text-center m-auto">
        Cache List (capacity - 40):
      </h2>
      {data?.map &&
        data?.map((e) => (
          <List
            key={e.key}
            keyName={e.key}
            value={e.value}
            timestamp={e.timeout}
          ></List>
        ))}
    </>
  );
}
