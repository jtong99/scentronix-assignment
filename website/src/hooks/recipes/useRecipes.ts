import "client-only";

import { ErrorResponse, ListResponse } from "@/types/shared";
import useSWR from "swr";
import { Recipe } from "@/types/recipes";

function useRecipes() {
  return useSWR<ListResponse<Recipe>, ErrorResponse>(
    {
      path: "/api/recipes",
    },
    {
      keepPreviousData: true,
    },
  );
}

export default useRecipes;
