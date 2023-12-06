enum ROLES {
    ADMIN = 1,
    SELLER = "seller",
    CUSTOMER = "customer",
}

type User = {
    username: string;
    role: ROLES;
}

const xaviUser: User = {
    username: 'xavicci669',
    role: ROLES.ADMIN,
}

console.log(xaviUser)