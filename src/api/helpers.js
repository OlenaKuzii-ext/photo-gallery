const BASE_URL = `https://picsum.photos/v2/list`;

export const request = url => (
  fetch(`${BASE_URL}${url}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
      }

      return res.json();
    })
);
