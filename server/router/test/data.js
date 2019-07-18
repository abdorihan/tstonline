// const { Client } = require('pg');
// const client = new Client({
//   user: 'qauanlkaanhjva',
//   host: 'ec2-54-247-170-5.eu-west-1.compute.amazonaws.com',
//   database: 'dcg0j61qf4kvpi',
//   password: '34bf818e7847ec05e50e39dae675d19c10e23632304e5e32a9e40d669ea7326b',
//   port: 5432,
// });

export async function getData () {
    const result = { ok: true, msg: "ADMA is awesome"};
//     await client.connect();

//     const res = await client.query('SELECT $1::text as message', ['Hello world!']).rows[0].message;
//     await client.end();
    return Promise.resolve(result);
}

export default { getData};
