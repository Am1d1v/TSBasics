// Interfaces
function assertDisplayName(user) {
    if (!user.displayName) {
        throw new Error('User has no DisplayName Field');
    }
}
function logUserByDisplayName(user) {
    var _a;
    assertDisplayName(user);
    console.log((_a = user.displayName) === null || _a === void 0 ? void 0 : _a.toUpperCase());
}
