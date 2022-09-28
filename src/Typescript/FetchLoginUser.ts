import axios from 'axios'
import { plainToInstance } from 'class-transformer'
import { UserModel } from './UserModel'
// import userState from '../atoms/userState'
// import { SetterOrUpdater } from "recoil";

const fetchLoginUser = async (
        // setUser: SetterOrUpdater<UserModel | null>,
        getUserName: string,
        getPassword: string,
): Promise<UserModel> => {
        let userLogin!: UserModel
        // let response = await axios.get("https://linguinibooksapi20220913132810.azurewebsites.net/api/User/"+ {getUserName} + "/" + {getPassword})
        let response = await axios.get("https://localhost:7269/api/User/"+ {getUserName} + "/" + {getPassword})
        userLogin = plainToInstance (UserModel, response.data as UserModel)
        return userLogin
}
export default fetchLoginUser