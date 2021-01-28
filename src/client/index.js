import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import { API_KEY } from './js/formHandler'
import { BASE_API_URL } from './js/formHandler'
import { postData } from './js/formHandler'
import { retrieveData } from './js/formHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'

console.log(checkForName);

alert("I EXIST")

export { 
    checkForName,
    handleSubmit,
    API_KEY,
    BASE_API_URL,
    postData,
    retrieveData
}
