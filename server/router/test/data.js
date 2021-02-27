const { Client } = require('pg');
const client = new Client({
  user: 'zfnsqxyxdyuinh',
  host: 'ec2-54-78-127-245.eu-west-1.compute.amazonaws.com',
  database: 'd8ccpl1b2tjrpn',
  password: 'ed8bd878cdf38e747b8eca3209095b0888ff0b7243806185fb8cc1f311cc97b2',
  port: 5432,
});

// const client = new Client({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'oilstore',
//     password: 'Abdo8935',
//     port: 5432,
//   });

export async function getData () {
    const result = { ok: true, msg: "ADMA is awesome"};
    await client.connect();
    
    const res = await client.query('select * from products;');
    await client.end();
    result.data = res.rows;
    return Promise.resolve(result);
}
export default { getData};


