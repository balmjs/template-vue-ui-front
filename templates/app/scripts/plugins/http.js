export const apiEndpoint = '/api';

const statusCodes = {
  OK: 200,
  Unauthorized: 401
};

function errorHandler(
  { code, message, data },
  { $bus, $alert, defaultErrorHandler }
) {
  switch (code) {
    case statusCodes.Unauthorized:
      $bus.emit('need-login', { message, data });
      break;
    default:
      defaultErrorHandler(message);
  }
}

export function responseHandler(responseData, responseOptions) {
  const { code, data, message } = responseData;

  if (code && code === statusCodes.OK) {
    return Promise.resolve(data);
  } else {
    errorHandler(responseData, responseOptions);

    return Promise.reject(responseData);
  }
}
