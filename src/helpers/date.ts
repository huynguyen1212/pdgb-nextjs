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

export const DAY_OF_WEEK = [
  "Chủ Nhật",
  "Thứ Hai",
  "Thứ Ba",
  "Thứ Tư",
  "Thứ Năm",
  "Thứ Sáu",
  "Thứ Bảy",
];

export function convertTo12HourFormat(timeString: any) {
  const time = new Date("2000-01-01T" + timeString); // Tạo đối tượng Date với ngày tùy ý (ở đây chọn 2000-01-01 để tránh ảnh hưởng đến ngày tháng năm)

  let hours = time.getHours();
  let minutes = time.getMinutes();
  let amOrPm = hours >= 12 ? "pm" : "am";

  hours = hours % 12;
  hours = hours ? hours : 12; // 12 giờ trưa và 12 giờ đêm đều là "12"

  const formattedTime =
    hours.toString().padStart(2, "0") +
    ":" +
    minutes.toString().padStart(2, "0") +
    " " +
    amOrPm;
  return formattedTime;
}

export const convertToVietnameseDate = (originalDate: any) => {
  const date = new Date(originalDate);
  const day = date.getDate();
  const month = date.getMonth() + 1; // Tháng trong JavaScript bắt đầu từ 0 nên cần cộng thêm 1
  const year = date.getFullYear();

  const vietnameseDate = `Ngày ${day} Tháng ${month} Năm ${year}`;

  return vietnameseDate;
};

export function gopNgayVaGio(ngay: any, gio: any) {
  let [nam, thang, ngayThang] = ngay.split("-");
  let [gio24, phut, giay] = gio.split(":");

  // Tạo đối tượng Date với ngày và thời gian
  let ngayGio = new Date(nam, thang - 1, ngayThang, gio24, phut, giay);

  return ngayGio;
}
