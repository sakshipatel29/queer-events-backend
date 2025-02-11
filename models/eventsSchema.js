import mongoose from 'mongoose';

const eventsSchema = new mongoose.Schema({
    organisationName: {
        type: String,
        required: true,
    },
    eventName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    eventDate: {
        type: String,
        required: true,
    },
    startTime: {
        type: String,
        required: true,
    },
    endTime: {
        type: String,
        required: true,
    },
    location: {
        addressLine1: {
            type: String,
            required: true,
        },
        addressLine2: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        postcode: {
            type: String,
            required: true,
        },
    },
    eventURL: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^(http|https):\/\/[^ "]+$/.test(v);  // Regex for URL validation
            },
            message: props => `${props.value} is not a valid URL!`
        },
    },
    price: {
        type: Number,
        required: true,
    },
    
})

const eventsModel = new mongoose.model("Event", eventsSchema);

export default eventsModel;