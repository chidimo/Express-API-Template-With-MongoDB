import dotenv from 'dotenv';

dotenv.config();

export const testEnvironmentVariable = process.env.TEST_ENV_VARIABLE.trim();
export const connectionString = process.env.CONNECTION_STRING.trim();
export const mongooseConnectionString = process.env.MONGOOSE_CONNECTION_STRING.trim();
