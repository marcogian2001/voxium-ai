import { parseAsInteger, parseAsString, createLoader } from "nuqs/server";
import { DEFAULT_PAGE } from "@/modules/contants";


export const filtersSearchParams = {
  search: parseAsString.withDefault("").withOptions({ clearOnDefault: true }),
  page: parseAsInteger
    .withDefault(DEFAULT_PAGE)
    .withOptions({ clearOnDefault: true }),
};

export const loadSearchParams = createLoader(filtersSearchParams)