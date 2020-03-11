import { pool } from '../models/pool';

import {
  createMessageTable,
  insertMessages,
  dropMessagesTable,
} from './queries';

export const createTables = async () => new Promise(resolve => {
  [ createMessageTable ].forEach(async (q, index, array) => {
    await pool.query(q);
    if (index === array.length - 1) resolve();
  });
});

export const insertIntoTables = async () => new Promise(resolve => {
  [ insertMessages ].forEach(async (q, index, array) => {
    await pool.query(q);
    if (index === array.length - 1) resolve();
  });
});

export const dropTables = async () => new Promise(resolve => {
  [ dropMessagesTable ].forEach(async (q, index, array) => {
    await pool.query(q);
    if (index === array.length - 1) resolve();
  });
});
