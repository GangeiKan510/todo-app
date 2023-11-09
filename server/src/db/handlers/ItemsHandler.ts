import db from '../db';

async function getItems(): Promise<any> {
  try {
    const result = (await db.query("SELECT * FROM to_do_item")).rows;
    return result;
  } catch (error) {
    console.log(error);
  }
};

async function createItem(title: string, description: string, user_id: number): Promise<any>{
  await db.query(`INSERT INTO to_do_item(
    title, description, user_id)
    VALUES ($1, $2, $3);;`, [
      title, description, user_id
    ]);
};

async function updateItem(itemId: number, title: string, description: string): Promise<any>{
  await db.query(`UPDATE to_do_item
    SET title=$1, description=$2
    WHERE id=$3;`, [
      title, description, itemId
  ]);
};

async function deleteItem(id: number): Promise<any>{
  await db.query(`DELETE FROM to_do_item WHERE id=${id}`)
};

export {getItems as default, createItem, updateItem, deleteItem};