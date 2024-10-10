// create node js server
const http = require('http');

/* 
    function severHandle(req, res) {
    const url = req.url;
    const users = [
        {
            name: "Iliyas Hassan",
            email: "hassan@gmail.com"
        },
        {
            name: "Jamiu Olalekan",
            email: "olalekan@gmail.com",
        },
        {
            name: "Abdul Qudus Oyelami",
            email: "oyelamiqudus@gmail.com"
        }
    ]
    console.log(url);
    if (url === "/user") {
        res.end(`These are the registered users: ${JSON.stringify(users)}`);
    }
    else if (url.match(/\/user\/\d/)) {
        console.log("this is trying to access a specific resource.");
        const arrayOfStrings = url.split("/");
        console.log(arrayOfStrings);
        const index = arrayOfStrings[2];
        const userAtIndex = users[index]
        res.end(`You made a request with the path id: ${JSON.stringify(userAtIndex)}`);
    }
    else {
        const devName = "Akoni Mayowa";
        res.end('Hello from' + ' ' + devName);
    }
}

*/

function getUserAtIndex(index, users) {
  const userAtIndex = users[index];
  return userAtIndex;
}

function getIndexFromUrlString(url) {
  const arrayOfStrings = url.split('/');
  const index = arrayOfStrings[2];
  return index;
}

const server = http.createServer((req, res) => {
  const url = req.url;
  const users = [
    {
      name: 'Iliyas Hassan',
      email: 'hassan@gmail.com',
    },
    {
      name: 'Jamiu Olalekan',
      email: 'olalekan@gmail.com',
    },
    {
      name: 'Abdul Qudus Oyelami',
      email: 'oyelamiqudus@gmail.com',
    },
  ];
  console.log(url);
  if (url === '/user') {
    res.end(`These are the registered users: ${JSON.stringify(users)}`);
  } else if (url.match(/^\/user\/\d$/)) {
    console.log('this is trying to access a specific resource.');
    const index = getIndexFromUrlString(url);
    if (index > users.length - 1) {
      res.end('Index greater than the available users');
      return;
    }
    const userAtIndex = getUserAtIndex(index, users);
    res.end(
      `You made a request with the path id: ${JSON.stringify(userAtIndex)}`
    );
  } else if (url.match(/^\/user\/\d\/get-email$/)) {
    console.log('this is trying to access a specific resource.');
    const index = getIndexFromUrlString(url);
    if (index > users.length - 1) {
      res.end('Index greater than the available users');
      return;
    }
    const userAtIndex = getUserAtIndex(index, users);
    const userEmail = userAtIndex.email;
    const userName = userAtIndex.name;
    res.end(
      `You made a request with the path id: ${index} requiring user by name ${userName} and it fetched the email - ${userEmail} - of the matched user`
    );
  } else {
    const devName = 'Akoni Mayowa';
    res.end('Hello from' + ' ' + devName);
  }
});

server.listen(5100, () => {
  console.log('Server is running on port 5100');
});
