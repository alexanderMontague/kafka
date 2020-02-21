### TO RUN

- `cd kafka`
- `bash start_instance` : This starts the Kafka Zookeeper server
- `bash start_brokers` : This starts all configured Kafka brokers

* To start Kafka zookeeper instance: `bin/zookeeper-server-start.sh config/zookeeper.properties`

* To start Kafka Brokers: `bin/kafka-server-start.sh config/server.b<#>.properties`

* List topics on server: `bin/kafka-topics.sh --zookeeper localhost:2181 --list`

* Consume Kafka messages from Topics: `bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic <topic> --from-beginning`
