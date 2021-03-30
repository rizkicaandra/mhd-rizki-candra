const { connection } = require('../config/mongodb')
const { ObjectId } = require("bson")

class User {
  static find() {
    return connection().collection('Users').find().toArray()
  }

  static create(newUser) {
    return connection().collection('Users').insertOne(newUser)
  }

  static findByAccountNumber(accountNumber) {
    return connection().collection('Users').findOne({ accountNumber: +accountNumber })
  }

  static findByIdentityNumber(identityNumber) {
    return connection().collection('Users').findOne({ identityNumber: +identityNumber })
  }

  static updateUser(objectId, updateUser){
    return connection().collection('Users').findOneAndUpdate({ _id: ObjectId(objectId)},{ $set: updateUser }, {returnOriginal: false })
  }

  static destroyUser(objectId) {
    return connection().collection('Users').deleteOne({ _id: ObjectId(objectId)})
  }

}

module.exports = User