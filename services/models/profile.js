import { auth, db } from "../firefolder/setup.js";
import user from './user'

class Profile {

    constructor(metaid, email = "") {
        try {
            if (!metaid) throw new Error('Invalid Call')

            this.metaid = metaid;
            this.email = email;
            this.profileCollection = "CrazyProfile"

        } catch (err) {
            return err
        }
    }

    async init() {
        try {
            let mid = this.metaid.toString()
            const document = db.collection(this.profileCollection).doc(mid);
            const product = await document.get()
            if (!product.exists) {
                let data = await this.create_user(mid);
                return data
            }
            return product.data();

        } catch (err) {
            return err;
        }

    }

    async create_user(mid) {
        let newUser = user(mid, this.email)

        try {
            await db.collection(this.profileCollection)
                .doc(mid)
                .set(newUser)
            return newUser;
        } catch (err) {
            return err;
        }
    }

    async update_user(mid, udata) {
        
        let newUser = user(mid, this.email)
        
        try {
            const doc = db.collection(this.profileCollection).doc(mid);

            await doc.update(udata)
                     .set(newUser)

            return newUser;
        } catch (err) {
            return err;
        }
    }

    async gmail_login(mid, udata) {
        
        return 0;
    }

}

module.exports = Profile;