import { useEffect } from "react";

export default function List({
  keyName,
  value,
  timestamp,
}: {
  keyName: React.ReactElement | string;
  value: React.ReactElement | string;
  timestamp: React.ReactElement | string;
}) {
  // const toast = useToastStore();
  // useEffect(() => {
  //   return () => {
  //     toast.setToastMsg(`${keyName}:${value} - got deleted from cache`);
  //   };
  // });

  const onDelete = async (key: string) => {
    const res = await fetch(`http://${import.meta.env.VITE_BE}/cache`, {
      method: "delete",
      body: JSON.stringify({
        key,
      }),
    });
    const json = await res.json();
    return json;
  };

  const getKey = async (key: string) => {
    const res = await fetch(`http://${import.meta.env.VITE_BE}/cache/${key}`, {
      method: "get",
    });
    const json = await res.json();
    return json;
  };

  useEffect(() => {
    return () => {
      // toast.setToastMsg(`${keyName}:${value} - got deleted from cache`);
    };
  }, []);
  return (
    <div>
      <div
        className={
          "card w-96 bg-primary-content/55 text-white shadow-xl m-auto"
        }
      >
        <div className="card-body p-4">
          <div className="grid grid-cols-12 ">
            <div className="col-span-8 text-primary text-xl ">
              <span className="text-secondary">{keyName}</span>:{value}
            </div>
            <div
              onClick={() => getKey(keyName as string)}
              className="col-span-2 ml-auto py-1 text-secondary-content text-center w-8 h-8 rounded-full bg-secondary hover:cursor-pointer"
            >
              {">"}
            </div>
            <div
              onClick={() => onDelete(keyName as string)}
              className="col-span-2 ml-auto py-1 text-secondary-content text-center w-8 h-8 rounded-full bg-secondary hover:cursor-pointer"
            >
              x
            </div>

            <div className="col-span-12 text-right">expires @ {timestamp}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
