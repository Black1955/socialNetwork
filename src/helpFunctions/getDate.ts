export const getDate = (date: string) => {
  const timeDiffInMillis = Date.now() - new Date(date).getTime();

  switch (true) {
    case timeDiffInMillis >= 2 * 24 * 60 * 60 * 1000:
      const diffInDays = Math.floor(timeDiffInMillis / (24 * 60 * 60 * 1000));
      return `${diffInDays} days ago`;

    case timeDiffInMillis >= 60 * 60 * 1000:
      const diffInHours = Math.floor(timeDiffInMillis / (60 * 60 * 1000));
      return `${diffInHours} hours ago`;

    case timeDiffInMillis >= 60 * 1000:
      const diffInMinutes = Math.floor(timeDiffInMillis / (60 * 1000));
      return `${diffInMinutes} minutes ago`;

    case timeDiffInMillis >= 1000:
      const diffInSeconds = Math.floor(timeDiffInMillis / 1000);
      return `${diffInSeconds} seconds ago`;

    default:
      return null;
  }
};
