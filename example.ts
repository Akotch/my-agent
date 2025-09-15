// Example TypeScript file for code review
export class UserManager {
    private users: any[] = [];

    // This function has some issues that need review
    addUser(user: any) {
        // No validation
        this.users.push(user);
        console.log("User added");
    }

    // Inefficient search
    findUser(id: string) {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].id == id) { // Using == instead of ===
                return this.users[i];
            }
        }
        return null;
    }

    // Missing error handling
    deleteUser(id: string) {
        const index = this.users.findIndex(u => u.id === id);
        this.users.splice(index, 1);
    }

    // No type safety
    updateUser(id: string, updates: any) {
        const user = this.findUser(id);
        Object.assign(user, updates);
        return user;
    }
}