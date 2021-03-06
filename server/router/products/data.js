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
  ssl: {
    rejectUnauthorized: false,
  }
};



export async function getData () {
  const result = { ok: true};
    let client = await new Client(specs);
    await client.connect();
    const res = await client.query('select *, (quantity - coalesce(sumquantity, 0)) available from (SELECT p_id,SUM(s_quantity) sumquantity from sell GROUP BY p_id) s RIGHT OUTER JOIN products ON id = p_id;');
    result.data = res.rows;
    client.end();
    return Promise.resolve(result);
}

export async function sellElement (element){
  const result = { ok: true};
  let client = await new Client(specs);
  await client.connect();
  const res = await client.query('INSERT INTO sell (p_id, s_quantity, s_price, s_des, s_date) VALUES ($1,$2,$3,$4,$5);',
  [element.id, element.quantity, element.price, element.des, element.date]);
  result.data = res;
  client.end();
  return Promise.resolve(result);
}

export async function deleteElement (element){
  const result = { ok: true};
  let client = await new Client(specs);
  await client.connect();
  const res = await client.query('DELETE FROM sell WHERE s_id = $1;',
  [element.id]);
  result.data = res;
  client.end();
  return Promise.resolve(result);
}

export async function sells (data){
  const result = { ok: true};
  let sql = 'SELECT s_id, name, s_quantity, buyprice, s_price from sell s join products p ON p.id = s.p_id  WHERE s_date >= $1 AND s_date <= $2;';
  if (!data.type) {
    data.date.dateTo = data.date.dateFrom
  }
  let client = await new Client(specs);
  await client.connect();
  const res = await client.query(sql, [data.date.dateFrom, data.date.dateTo]);
  result.data = res.rows;
  client.end();
  return Promise.resolve(result);
}

export default { getData};


