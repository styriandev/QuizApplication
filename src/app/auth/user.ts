/*
 * Created on Sat Oct 19 2019
 *
 * Copyright (c) 2019 Dominik Sammer
 */

export class User {
    nicname: string;
    email: string;
    password: string;

    constructor(nicname?: string, email?: string, password?: string) {
        this.nicname = nicname;
        this.email = email;
        this.password = password;
    }
}
