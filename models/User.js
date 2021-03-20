const db = new Map();

class User {
    constructor ({ name, email, genders, age }) {
        this.name = name;
        this.email = email;
        this.genders = genders;
        this.age = age;
        this.id = `${db.size+1}`;

        db.set(this.id, this);

        return Promise.resolve(this);
    }

    async update ({ name, email, gender, age }) {
        db.set(this.id, { name, email, gender, age });
    }

    async delete () {
        return db.delete(this.id);
    }

    static findAll = async () => {
        return [...db.values()];
    };

    static findOne = async (id) => {
        return db.get(id);
    };
}

module.exports = User;