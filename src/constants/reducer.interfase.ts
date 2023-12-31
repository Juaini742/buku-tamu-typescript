/* eslint-disable @typescript-eslint/no-explicit-any */
export interface DataState {
  data: any[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  loading: false | true;
}
