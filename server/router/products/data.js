import { Client } from 'pg';
// const specs = {
//   user: 'postgres',
//   host: 'localhost',
//   database: 'oilstore',
//   password: 'Abdo8935',
//   port: 5432,
// };
const specs = {
  user: 'zfnsqxyxdyuinh',
  host: 'ec2-54-78-127-245.eu-west-1.compute.amazonaws.com',
  database: 'd8ccpl1b2tjrpn',
  password: 'ed8bd878cdf38e747b8eca3209095b0888ff0b7243806185fb8cc1f311cc97b2',
  port: 5432,
};



export async function getData () {
  };
    const result = { ok: true};
    let client = await new Client(specs);
    await client.connect();
    const res = await client.query('select * from products;');
    result.data = res.rows;
    await client.end();
    return Promise.resolve(result);
}

export async function sellElement (element){
    const result = { ok: true};
    let client = await new Client(specs);
    await client.connect();
    const res = await client.query('INSERT INTO sell (p_id, s_quantity, s_price, s_des, s_date) VALUES ($1,$2,$3,$4,NOW());',
    [element.id, element.quantity, element.price, element.des]);
    result.data = res;
    await client.end();
    return Promise.resolve(result);
}
export default { getData};


