
(function registSub() {
    const { PubSub } = require('@google-cloud/pubsub');
    const pubsub = new PubSub();
    const subscriptionName = "i-got-message";
    const subscription = pubsub.subscription(subscriptionName);
    const messageHandler = message => {
        console.log(`Received message ${message.id}:`);
        var data = JSON.parse(message.data);
        console.log(data);
        await 
        message.ack();
    };
    subscription.on(`message`, messageHandler);
})();