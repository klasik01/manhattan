const errorHeader = 'manhattan-error-message';

export function extractErrorText(error, message) {
  const { response = {} } = error;
  const headers = response.headers || {};
  const text = headers[errorHeader] || message;
  return text;
}
