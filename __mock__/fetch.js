const fetcheddata = {
  data: {
    plan: {
      itineraries: [{ walkDistance: 649.102153853899, duration: 2096 }],
    },
  },
};

export default function request(url) {
  return new Promise((resolve, reject) => {
    const userID = parseInt(url.substr("/users/".length), 10);
    process.nextTick(() =>
      fetcheddata[]
        ? resolve(users[userID])
        : reject({
            error: `User with ${userID} not found.`,
          })
    );
  });
}
