import React from 'react'

interface User{
    id:number;
    name:string;
    email:string;
}
const UsersPage = async () => {
    const req = await fetch('https://jsonplaceholder.typicode.com/users',{next:{revalidate:10} })
 
    const users:User[] = await req.json()

    return (
        <main>
    <div>
      UsersPage
    </div>

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
      {users.map(users=><tr key={users.id}><td>
        {users.name}
      </td>
      <td>{users.email}</td></tr>)}

      </tbody>
    </table>

    </main>
  )
}

export default UsersPage
