import axios from "../../helpers/axiosInstance";

const register = async (formData, { rejectWithValue }) => {
  const { userName, firstName, lastName, email, password } = formData
  const payload = {
    username: userName,
    first_name: firstName,
    last_name: lastName,
    email,
    password
  }
  try {
    const response = await axios.post('/auth/register', payload)
    return response.data
  } catch (error) {
    return rejectWithValue(error.response.data)
  }
}

export default { register }