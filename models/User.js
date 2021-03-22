const db = new Map();

class User {
    constructor ({ name, email, genders, age }) {
        this.name = name;
        this.email = email;
        this.genders = genders;
        this.age = age;
        this.id = `${db.size + 1}`;

        db.set(this.id, this);
        console.log(db.values());

        return Promise.resolve(this);
    }

    async update ({ name, email, genders, age }) {
        db.set(this.id, { name, email, genders, age });
        return db.get(this.id);
    }

    async delete () {
        return db.delete(this.id);
    }

    async delete () {
        return db.delete(this.id);
    }

    static findAll = async () => {
        console.log(db.values());
        return [...db.values()];
    }

    static  getUser = async (id)=> {
        console.log(db.get(id));
        return db.get(id);
    }
}

module.exports = User;
