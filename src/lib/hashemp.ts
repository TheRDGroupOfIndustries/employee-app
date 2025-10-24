export const comparePassword = async (password: string, hash: string) =>{
    if(password === hash){
        return true;
    }
    return false;
}