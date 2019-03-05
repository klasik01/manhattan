import { v4 } from 'uuid';

export const ALERTS_ADD = 'ALERTS_ADD';
const ALERT_ERROR = 'alert';

const addAlert = (text, type, details = {}) => {
  const id = v4();
  return {
    type: ALERTS_ADD,
    payload: { id, type, text, details },
  };
};

export const errorAlert = (text, details = {}) => (
  addAlert(text, ALERT_ERROR, details)
);
