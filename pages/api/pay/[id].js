var axios = require("axios");

export default async function handler(req, res) {
  if (req.method === "POST") {
    var total = 0;
    var verified;
    const { id } = req.query;

    // get tickets from database
    const tickets = [
      {
        id: "01",
        title: "Swimming Ticket (Adults)",
        image: "/images/tickets (2).jpg",
        price: "3500",
        quantity: 1,
      },
      {
        id: "02",
        title: "Swimming Ticket (Kids)",
        image: "/images/tickets (1).jpg",
        price: "1200",
        quantity: 1,
      },
      {
        id: "03",
        title: "Garden Area Ticket (Adults)",
        image: "/images/tickets (3).jpg",
        price: "2500",
        quantity: 1,
      },
      {
        id: "04",
        title: "Garden Area Ticket (Kids)",
        image: "/images/tickets (4).jpg",
        price: "1500",
        quantity: 1,
      },
    ];

    // a place to store cart items after
    const filteredCart = [];

    req.body.map(
      (cartItem) => (
        delete cartItem.price,
        delete cartItem.title,
        delete cartItem.image,
        filteredCart.push(cartItem)
      )
    );

    const filteredTicketsFromDb = [];
    filteredCart.map((fc) =>
      filteredTicketsFromDb.push(
        ...tickets.filter((ticket) => ticket.id === fc.id)
      )
    );

    // get total price
    for (let index = 0; index < filteredTicketsFromDb.length; index++) {
      total +=
        filteredCart[index].quantity * filteredTicketsFromDb[index].price;
    }

    // const verifyPayment = async () => {
    //   try {
    //     return await axios.get('https://dog.ceo/api/breeds/list/all')
    //   } catch (error) {
    //     console.error(error)
    //   }
    // }

    // const verifyPayment = async () => {
    var config = {
      method: "get",
      url: `https://api.paystack.co/transaction/verify/${id}`,
      headers: {
        Authorization:
          "Bearer sk_test_cfada6b3ffa1b736a47a898c0df8d7a39a5ee7b1",
        Cookie:
          "sails.sid=s%3ACoohE8Lzn8kgMMXKO296J0eIUzWXlGiL.XmTDidnrrJKNAu3Ylw82YL4DQTLBZHSN8xy%2BdtqE92s",
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        verified = response.data;
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    // };
    // verifyPayment();

// compare total then send email
const sendReciept=()=>{
  if(verified.data.amount/100 == total && verified.data.status === true){

  }
}

    setTimeout(() => res.status(200).json(verified.data), 2000);
  } else {
    // Handle any other HTTP method
  }
}
