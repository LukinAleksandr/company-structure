import { useEffect, useState } from "react";
import { fetchCompanyStructure } from "../api/fetchCompanyStructure";
import type { Department } from "../types/department";
import type { RequestState } from "../types/requestState";

export function useCompanyStructure() {
  const [requestState, setRequestState] = useState<RequestState<Department>>({ status: "loading" });

  useEffect(() => {
    const abortController = new AbortController();

    fetchCompanyStructure(abortController.signal)
      .then((companyStructure) => setRequestState({ status: "success", data: companyStructure }))
      .catch((error: unknown) => {
        if (abortController.signal.aborted) return;
        setRequestState({ status: "error", error });
      });

    return () => abortController.abort();
  }, []);

  return requestState;
}
