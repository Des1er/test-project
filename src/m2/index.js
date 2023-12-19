const amqp = require('amqplib');
const logger = require('../common/logger');

async function consumeMessages() {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();
  const queue = 'tasks';

  await channel.assertQueue(queue, { durable: false });
  channel.consume(queue, (msg) => {
    const inputNumber = parseInt(msg.content.toString());
    logger.info(`M2 received task: ${inputNumber}`);
    

    setTimeout(() => {
      const result = inputNumber * 2;
      logger.info(`M2 processed task ${inputNumber}, result: ${result}`);
    }, 5000);
  }, { noAck: true });
}

consumeMessages();
