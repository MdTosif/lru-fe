import { useState } from "react";
import Card from "./Card";

function AddCache() {
  const [cache, setCache] = useState({ key: "", value: "" });
  const [msg, setMsg] = useState<string | undefined>();
  // const toast = useToastStore();
  const submitHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch(`https://${import.meta.env.VITE_BE}/cache`, {
      method: "post",
      body: JSON.stringify({
        ...cache,
      }),
    });
    const json = await res.json();
    if (json) {
      setMsg("cache got added");
      setTimeout(() => {
        setMsg(undefined);
      }, 1000);
    } else {
      setMsg("error while adding cache");
      setTimeout(() => {
        setMsg(undefined);
      }, 1000);
    }
    // toast.setToastMsg(`${json.key} key got added`)
  };
  return (
    <>
      <Card
        title={<div>Add Cache</div>}
        body={
          <form
            className="grid grid-cols-12 gap-6"
            onSubmit={(e) => submitHandle(e)}
          >
            <label className="col-span-12 input input-bordered flex items-center gap-2">
              <span className="w-14 text-primary">Key</span>
              <input
                type="text"
                className="grow "
                placeholder="Daisy"
                value={cache.key}
                onChange={(e) =>
                  setCache((s) => ({ ...s, key: e.target.value }))
                }
              />
            </label>
            <label className=" col-span-12 input input-bordered flex items-center gap-2">
              <span className="w-14 text-primary">Value</span>
              <input
                type="text"
                className="grow "
                placeholder="Daisy"
                value={cache.value}
                onChange={(e) =>
                  setCache((s) => ({ ...s, value: e.target.value }))
                }
              />
            </label>
            {msg && (
              <div className="alert alert-info col-span-12">
                <span>{msg}</span>
              </div>
            )}
            <button className="col-span-12 btn btn-primary">Add Cache</button>
          </form>
        }
        footer={<div></div>}
      />
    </>
  );
}

export default AddCache;
