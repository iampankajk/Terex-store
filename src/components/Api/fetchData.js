
const URL = 'https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json'

const fetchData = async() => {
        let res = await fetch(URL);
        let data = await res.json();
        return data;
  };

  export default fetchData;