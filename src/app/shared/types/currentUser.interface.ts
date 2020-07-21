export interface CurrentUser {
    id: number,
    email: string, 
    createAt: string,
    updateAt: string,
    username: string, 
    bio: string | null, 
    image: string, 
    token: string, 
}