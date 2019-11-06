const { Schema, model } = require("mongoose");
const UsersSchema = new Schema (
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    },
    //created_at e updated_at        
    {
        timestamps: true
    }   
)
module.exports = model("Users", UsersSchema);