clear

echo "Starting Kafka Brokers..."
# ctrl + c does not kill all of these... figure out why
bin/kafka-server-start.sh config/server.b0.properties &\
bin/kafka-server-start.sh config/server.b1.properties &\
bin/kafka-server-start.sh config/server.b2.properties
