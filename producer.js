const kafka = require("kafka-node");
const config = require("./config");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

try {
  const Producer = kafka.Producer;
  const client = new kafka.KafkaClient(config);
  const producer = new Producer(client);
  const kafkaTopic = config.kafkaTopic;

  producer.on("ready", async function() {
    console.log("Producer Ready...");

    rl.on("line", line => {
      const payload = [
        {
          topic: kafkaTopic,
          messages: line
        }
      ];

      producer.send(payload, (err, data) => {
        console.log(
          `[kafka-producer -> ${kafkaTopic}]: Attempting to send - #${data[kafkaTopic]["0"]} ${line}`
        );

        if (err) {
          console.log(
            "[kafka-producer -> " + kafkaTopic + "]: broker update failed"
          );
        } else {
          console.log(
            "[kafka-producer -> " + kafkaTopic + "]: broker update success"
          );
        }
      });
    });
  });

  producer.on("error", function(err) {
    console.log(err);
    console.log("[kafka-producer -> " + kafkaTopic + "]: connection errored");
    throw err;
  });
} catch (e) {
  console.log(e);
}
