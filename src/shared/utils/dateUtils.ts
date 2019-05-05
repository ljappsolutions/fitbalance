import moment, { Moment } from 'moment';

export const getDateFromEpoch = (epoch: number): Moment => {
  return moment(epoch * 1000).utc();
}

export const getFormattedDate = (date: Moment): string => {
  const format = 'DD-MM-YYYY';
  return date.format(format);
}