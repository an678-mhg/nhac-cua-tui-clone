export const formatTime = (seconds: number) => {
  try {
    const date = new Date(0);
    date.setSeconds(seconds);
    const time = date.toISOString().slice(11, 19);
    const result = time.startsWith("00:0")
      ? time.slice(4)
      : time.startsWith("00")
      ? time.slice(3)
      : time.length === 8 && time.startsWith("0")
      ? time.slice(1)
      : time;
    return result;
  } catch (error) {
    return "0:00";
  }
};

export const forceDownloadFile = (url: string) => {
  const anchor = document.createElement("a");
  anchor.target = "_blank";
  anchor.href = url;
  anchor.download = url;
  anchor.style.display = "none";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
};

export const imgNotFound =
  "https://thumbs.dreamstime.com/b/no-image-available-icon-vector-illustration-flat-design-140476186.jpg";

export const img404 =
  "https://raw.githubusercontent.com/an678-mhg/NextComics/main/public/not-found.png";
