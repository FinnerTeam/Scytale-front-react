/// <reference types="react-scripts" />

type statusType = "All" | "Draft" | "Open" | "Closed";

interface pullRequest {
  title: string;
  status: statusType;
  author: string;
  createdAt: Date;
  labels: string[];
  description: string;
  _id?: any;
}
interface state {
  pullRequests: prsState;
}

interface prsState {
  prs: pullRequest[];
  labels: string[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  currentPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

type AppDispatch = typeof store.dispatch;
