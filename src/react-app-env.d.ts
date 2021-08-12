/// <reference types="react-scripts" />

type statusType = "All" | "Draft" | "Open" | "Closed";
type sortingMethodType = "creation" | "title";
type sortingOrder = 1 | -1;

interface pullRequest {
  title: string;
  status: statusType;
  author: string;
  createdAt: Date;
  labels: string[];
  description: string;
}
interface state {
  pullRequests: prsState;
}

interface prsState {
  data: pullRequest[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

type AppDispatch = typeof store.dispatch;
