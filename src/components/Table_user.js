import React, { useState } from "react";

export default function Table_user() {
  const [Users, setUsers] = useState([
    {
      id: "1",
      name: "achref",
      email: "achref@gmail.com",
      password: "achref123",
    },
    {
      id: "2",
      name: "houssem",
      email: "houssem@gmail.com",
      password: "houssem123",
    },
    {
      id: "3",
      name: "nabiha",
      email: "nabiha@gmail.com",
      password: "nabiha123",
    },
   
  ]);

  return (
    <div className="container">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">email</th>
            <th scope="col">password</th>
          </tr>
        </thead>
        <tbody>
          {Users.map((value, key) => (
            <tr key={key}>
              <th scope="row">{value.id}</th>
              <td>{value.name}</td>
              <td>{value.email}</td>
              <td>{value.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
