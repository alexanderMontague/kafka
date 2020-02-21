clear

echo "Starting Kafka Brokers..."
bin/kafka-server-start.sh config/server.b0.properties &\
bin/kafka-server-start.sh config/server.b1.properties &\
bin/kafka-server-start.sh config/server.b2.properties