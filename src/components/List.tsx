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

  useEffect(() => {
    return () => {
      // toast.setToastMsg(`${keyName}:${value} - got deleted from cache`);
    };
  }, []);
  return (
    <div >
      <div className="card w-96 bg-primary-content/55 text-white shadow-xl m-auto">
        <div className="card-body p-4">
          <div className="grid grid-cols-12 gap-x-4">
            <div className="col-span-4 text-primary">
              {keyName}:{value}
            </div>
            <div className="col-span-8 text-right">expires @ {timestamp}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
