import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export const dayjsUTC = dayjs.utc;
export const formatLocalDate = (dateTime: any) =>
  dayjs(dateTime).format("DD/MM/YYYY");

export const formatUTCDate = (dateTime: any) =>
  dayjsUTC(dateTime).format("DD/MM/YYYY");

export const formatInputDate = (dateTime: any) =>
  dayjs(dateTime).format("YYYY/MM/DD");

export const formatInputMonth = (dateTime: any) =>
  dayjs(dateTime).format("YYYY/MM");

export const formatDate = (dateTime: any) =>
  dayjs(dateTime).format("YYYY-MM-DD");

export const formatTime = (dateTime: any) => dayjs(dateTime).format("HH:mm");

export const formatDateExport = (dateTime: any) =>
  dayjs(dateTime).format("YYYYMMDD");

export const formatDateTime = (dateTime: any) =>
  dayjs(dateTime).format("YYYY/MM/DD HH:mm:ss");

export const getYear = (dateTime: any) => new Date(dateTime).getFullYear();
export const getMonth = (dateTime: any) => new Date(dateTime).getMonth();
export const getDate = (dateTime: any) => new Date(dateTime).getDate();
