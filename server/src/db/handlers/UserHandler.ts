import db from '../db';

async function getAllUsers(): Promise<any> {
  try {
    const result = (await db.query("SELECT * FROM users")).rows;
    return result;
  } catch (error) {
    console.log(error);
  }
};

export default getAllUsers;