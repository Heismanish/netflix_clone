import fetcher from "@/lib/fetcher";
import useSWR from "swr";

export function useBillboard() {
  const { data, error, isLoading } = useSWR("/api/random", fetcher);
  console.log(data);

  // render data

  return { data, error, isLoading };
}
