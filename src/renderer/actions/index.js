export const ping = (data) => {
  console.log('action ping', data)

  return {
    type: 'PING'
  }
};