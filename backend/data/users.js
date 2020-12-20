import bcrypt from "bcryptjs";
const users = [
  {
    name: "Admin user",
    email: "admin@gma.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "ali user",
    email: "ali@gma.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "anas user",
    email: "anas@gma.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "john user",
    email: "john@gma.com",
    password: bcrypt.hashSync("123456", 10),
  },
];
export default users;
