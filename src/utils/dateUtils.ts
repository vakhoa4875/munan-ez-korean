/**
 * Date utility functions for formatting dates in GMT+7 timezone with 12-hour format
 */

// Format options for 12-hour time format
const timeFormatOptions: Intl.DateTimeFormatOptions = {
  hour: 'numeric',
  minute: 'numeric',
  hour12: true,
  timeZone: 'Asia/Bangkok' // GMT+7 timezone
};

// Format options for date
const dateFormatOptions: Intl.DateTimeFormatOptions = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'Asia/Bangkok' // GMT+7 timezone
};

// Format options for full date and time
const fullFormatOptions: Intl.DateTimeFormatOptions = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  hour12: true,
  timeZone: 'Asia/Bangkok' // GMT+7 timezone
};

/**
 * Formats a date to a string in GMT+7 timezone with 12-hour format
 * @param date - Date to format (Date object or ISO string)
 * @param includeTime - Whether to include time in the formatted string
 * @returns Formatted date string
 */
export const formatDate = (date: Date | string, includeTime: boolean = true): string => {
  if (!date) return '';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  if (includeTime) {
    return new Intl.DateTimeFormat('vi-VN', fullFormatOptions).format(dateObj);
  } else {
    return new Intl.DateTimeFormat('vi-VN', dateFormatOptions).format(dateObj);
  }
};

/**
 * Formats a date to show only the time in GMT+7 timezone with 12-hour format
 * @param date - Date to format (Date object or ISO string)
 * @returns Formatted time string
 */
export const formatTime = (date: Date | string): string => {
  if (!date) return '';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-US', timeFormatOptions).format(dateObj);
};

/**
 * Formats a date to a relative time string (e.g., "2 hours ago")
 * @param date - Date to format (Date object or ISO string)
 * @returns Relative time string
 */
export const formatRelativeTime = (date: Date | string): string => {
  if (!date) return '';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  
  // Convert both dates to GMT+7
  const dateGMT7 = new Date(dateObj.getTime() + (7 * 60 * 60 * 1000));
  const nowGMT7 = new Date(now.getTime() + (7 * 60 * 60 * 1000));
  
  const diffInSeconds = Math.floor((nowGMT7.getTime() - dateGMT7.getTime()) / 1000);
  
  if (diffInSeconds < 60) {
    return 'vừa xong';
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes} phút trước`;
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours} giờ trước`;
  } else if (diffInSeconds < 2592000) {
    const days = Math.floor(diffInSeconds / 86400);
    return `${days} ngày trước`;
  } else if (diffInSeconds < 31536000) {
    const months = Math.floor(diffInSeconds / 2592000);
    return `${months} tháng trước`;
  } else {
    const years = Math.floor(diffInSeconds / 31536000);
    return `${years} năm trước`;
  }
};

/**
 * Formats a date for a blog post (with special formatting for recent posts)
 * @param date - Date to format (Date object or ISO string)
 * @returns Formatted date string
 */
export const formatBlogDate = (date: Date | string): string => {
  if (!date) return '';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  
  // Convert both dates to GMT+7
  const dateGMT7 = new Date(dateObj.getTime() + (7 * 60 * 60 * 1000));
  const nowGMT7 = new Date(now.getTime() + (7 * 60 * 60 * 1000));
  
  const diffInSeconds = Math.floor((nowGMT7.getTime() - dateGMT7.getTime()) / 1000);
  
  // If less than 24 hours, show relative time
  if (diffInSeconds < 86400) {
    return formatRelativeTime(date);
  }
  
  // Otherwise show the full date
  return formatDate(date);
};