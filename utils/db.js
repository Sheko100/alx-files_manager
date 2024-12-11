import { createClient } from 'redis';

class RedisClient {

  constructor() {
    this.client = createClient();
    this.client.on('error', (err) => console.log("Client has not been created:", err));
  }

  async isAlive() {
    const client = this.client;

    return await client.connected;
  }
}
const redisClient = new RedisClient();

export default redisClient;
