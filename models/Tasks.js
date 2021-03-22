const db = new Map();

class Tasks {
    constructor ({ body, userId }) {
        this.body = body;
        this.isDone = false;
        this.userId = userId;
        this.id = db.size + 1;
        this.createdAd = new Date();

        db.set(this.id, this);
        return Promise.resolve(this);
    }

    async update ({ body, userId }) {
        db.set(this.id, { body, userId });
        db.get(this.id);
    }

    static findTask = async (id) => {
        console.log(db);
        return db.get(id);
    };

    static allTasks = async () => {
        return [...db.values()];
    };

    async isDone (id) {
        db.set(id, { isDone: !isDone });
        db.get(id);
    }

    async delete () {
        db.delete(this.id);
    }
}

module.exports = Tasks;
