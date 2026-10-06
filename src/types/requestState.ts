export type RequestState<Data> =
  | { status: "loading" }
  | { status: "success"; data: Data }
  | { status: "error"; error: unknown };
