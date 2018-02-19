import moment from 'moment';

let DateService;

DateService = {
  unix: date => moment(date).unix(),
  
};

export default DateService;
