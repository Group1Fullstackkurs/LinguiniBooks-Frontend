import axios from 'axios'
import { plainToInstance } from 'class-transformer'
import { UserModel } from './UserModel'

const fetchLoginUser = async (
        getUserName: string,
        getPassword: string,
): Promise<UserModel> => {
        let userLogin!: UserModel
        let response = await axios.get("https://linguinibooksapi20221010110139.azurewebsites.net/api/User/" + getUserName + "/" + getPassword)
        userLogin = plainToInstance (UserModel, response.data as UserModel)
        userLogin.hash = getPassword;
        return userLogin
}
export default fetchLoginUser