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
type AppDispatch = typeof store.dispatch;
