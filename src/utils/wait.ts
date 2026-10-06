export function wait(delayInMs: number, signal: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    if (signal.aborted) {
      reject(signal.reason);
      return;
    }

    const timeoutId = setTimeout(() => {
      signal.removeEventListener("abort", handleAbort);
      resolve();
    }, delayInMs);

    function handleAbort() {
      clearTimeout(timeoutId);
      reject(signal.reason);
    }

    signal.addEventListener("abort", handleAbort, { once: true });
  });
}
