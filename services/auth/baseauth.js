import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const googleCred = require('./googlecred.json');

export default NextAuth({

    providers: [
        Providers.Google({
            clientId: googleCred.clientId,
            clientSecret: googleCred.clientSecret,
            authorizationUrl: googleCred.authUrl,
        })
    ]

})