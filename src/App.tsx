import AddCache from "./components/Add-Cache";
import CacheList from "./components/Cache-List";

export default function App() {
  // const { data } = useGetAllCacheApi();

  // const toast = useToastStore();

  return (
    <>
      <div className="text-4xl text-primary text-center">LRU Cache</div>
      <div className="grid grid-cols-6 md:grid-cols-12 m-4 md:m-8 gap-6">
        <div className="col-span-6">
          <AddCache />
        </div>
        <div className="col-span-6">
          <CacheList />
        </div>
        {/* <List
          key={"e.key"}
          keyName={"e.key"}
          value={"e.value"}
          timestamp={"e.timeout"}
        ></List> */}
      </div>
    </>
  );
}
