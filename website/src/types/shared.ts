export interface PageProps<PathParams = any> {
  children: React.ReactNode;
  params: PathParams & { locale: string };
}

export const enum SortOrder {
  ASC = "asc",
  DESC = "desc",
}

export interface ListResponse<T> {
  items: T[];
  total: number;
}

export interface ErrorResponse {
  code: string;
  message: string;
}

export type FetchMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type FetchOptions<Params = unknown, Body = unknown> = {
  method?: FetchMethod;
  path: string;
  params?: Params;
  body?: Body;
  headers?: {
    [key: string]: string;
  };
};

export type ThemeColor =
  | "default"
  | "error"
  | "success"
  | "info"
  | "warning"
  | "primary"
  | "secondary";

export interface TimeFilter<T> {
  startTime?: string;
  endTime?: string;
  timeField?: keyof T;
  timeUnit?: "year" | "month" | "week" | "day" | "hour" | "minute";
}

export type BreadCrumbTypeData = {
  href?: string;
  name: string;
};
