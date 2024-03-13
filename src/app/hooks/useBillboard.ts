import fetcher from "@/lib/fetcher";
import useSwr from "swr";

export function useBillboard() {
  const { data, error, isLoading } = useSwr("/api/random", fetcher);
  console.log(data);

  // render data

  return { data, error, isLoading };
}
