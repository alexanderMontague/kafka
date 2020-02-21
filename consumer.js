const kafka = require('kafka-node');
const config = require('./config');

try {
  const Consumer = kafka.Consumer;
  const client = new kafka.KafkaClient(config);
  const kafkaTopic = config.kafkaTopic;

  let consumer = new Consumer(
    client,
    [{ topic: kafkaTopic }]
  );

  consumer.on('message', async function(message) {

    console.log(`kafka->[${kafkaTopic}] ${message.value}`);
  })

  consumer.on('error', function(err) {
    console.log(`error [${kafkaTopic}]`, err);
  });
}
catch(e) {
  console.log(e);
}