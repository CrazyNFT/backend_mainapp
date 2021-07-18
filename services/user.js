import {auth, db} from "./firefolder/setup.js";


class Profile {
    
    constructor(metaid, email="") {
        this.metaid = metaid;
        this.check_metaid();
        
        this.email = email;
    }

    async check_metaid(){
        try {
            const document = db.collection("CrazyProfile").doc(this.metaid);
            const product = await document.get();
            const res = product.data();
            console.log('check_mataid ', res)
            if(!res) {
                console.log("Test");
                return this.create_user();
            }
            return res;

        } catch (error) {
            return(error);
        }

    }

    async create_user(){
        
        let user = {
            metaid: this.metaid,
            emailVerified: false,
            email: "",
            freeNFT: 3,
            artistVerified: false,
            date_created: "18/07/2021",
            minted_nfts: 0,
            sold_nft: 0,
        }
        try {

            await db.collection("CrazyProfile")
                    .doc(this.metaid)
                    .create(user);

            print(user);
            return user;
          } catch (error) {
            return error;
          }
    }

}

module.exports = Profile;