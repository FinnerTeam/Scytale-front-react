import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export const timeFromNow = (date: Date) => {
  const time = dayjs(date).fromNow();
  return time;
};
