import useSWR from "swr";

export type ApiRes = {
  key: string;
  value: string;
  timeout: number;
  expiresAt: string;
}[];

export default function useGetAllCacheApi() {
  const fetcher = async (url: string) => {
    const res = await fetch(url);
    const json = await res.json();
    return json;
  };
  return useSWR<ApiRes>(
    `http://${import.meta.env.VITE_BE}/cache/all`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );
}
