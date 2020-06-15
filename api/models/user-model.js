const db = require('../../data/db-config');

module.exports = {
    getUsers,
    findUserById,
    updateUser,
    removeUser,
  

}

function getUsers() {
    return db.select("*").from('user')
    
}

function findUserById(id) {
    return db('user')
    .where({id})
    .first()
}

function updateUser(changes, id){
    return db('user')
    .where({id})
    .update(changes)
    .then(count=> {
        if (count > 0) {
            return findUserById(id)
        } else {
            return null;
        }
    })
}

function removeUser (id) {
    return db('user')
    .where('id', id)
    .del()
    
}

