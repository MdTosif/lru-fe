import useWebSocket from "react-use-websocket";
import AddCache from "./components/Add-Cache";
import List from "./components/List";

export default function App() {
  // const { data } = useGetAllCacheApi();
  const {
    lastJsonMessage: data,
  }: { lastJsonMessage: { key: string; value: string; timeout: string }[] } =
    useWebSocket(`wss://${import.meta.env.VITE_BE}/ws`);
  // const toast = useToastStore();

  return (
    <>
      <div className="grid grid-cols-6 md:grid-cols-12 m-4 md:m-8 gap-6">
        <div className="col-span-6">
          <AddCache />
        </div>
        <div className="col-span-6">
          {data?.map &&
            data?.map((e) => (
              <List
                key={e.key}
                keyName={e.key}
                value={e.value}
                timestamp={e.timeout}
              ></List>
            ))}
        </div>
      </div>
    </>
  );
}
