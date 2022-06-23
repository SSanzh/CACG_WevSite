import apiEnv from "../env/apiEnv";
import axios from "axios";

const HOST = apiEnv.HOST

class VacancyService {
    async sendEmail(title, content, file) {
        let formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('file', file);
        return await axios.post(`${HOST}/api/ReSend`, formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
}

export default VacancyService;