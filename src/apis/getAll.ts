import useSWR from "swr";

export default function useGetAllCacheApi() {
  const fetcher = async (url: string) => {
    const res = await fetch(url);
    const json = await res.json();
    return json;
  };
  return useSWR<{ key: string; value: string; timeout: string }[]>(
    `https://${import.meta.env.VITE_BE}/cache/all`,
    fetcher,
  );
}
