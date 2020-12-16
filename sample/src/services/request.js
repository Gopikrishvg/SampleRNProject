import NetInfo from '@react-native-community/netinfo';

const checkConnection = async () => {
  let isConnected;
  NetInfo.fetch().then((state) => {
    console.log('Is connected?', state.isConnected);
    isConnected = state.isConnected;
  });
  return isConnected;
};

const getRequest = (url) => {
  if (!checkConnection()) {
    return 'net';
  }
  let header = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // Authorization: authorization,
  };

  const requestOptions = {
    method: 'GET',
    headers: header,
  };

  return fetch(url, requestOptions)
    .then((response) => response.json())
    .then((response) => {
      console.log('success..', response);
      return response;
    })
    .catch((error) => {
      console.log('error');
      // console.error(error);
      if (error.message === 'Network request failed') {
        console.log('failed request');
        return 'failed';
      }
    })
    .finally(() => {
      console.log('finally...');
    });
};

export default getRequest;
