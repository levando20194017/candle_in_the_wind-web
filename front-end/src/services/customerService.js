import axios from "axios";
const baseUrl = process.env.REACT_APP_SERVER_URL;

const handleSignInAPI = async (email, password) => {
	let data = JSON.stringify({
		email,
		password,
	});

	let config = {
		method: "post",
		url: baseUrl + "/customers/login",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		data: data,
	};

	return await axios(config);
};

const handleSignUpAPI = async (newData) => {
	let gender = newData.gender ? "Male" : "Female";
	let data = JSON.stringify({
		username: newData.username,
		email: newData.email,
		password: newData.password,
		gender: gender,
		dateOfBirth: newData.dateOfBirth,
		phoneNumber: newData.phoneNumber,
	});

	let config = {
		method: "post",
		url: baseUrl + "/customers/signup",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		data: data,
	};
	console.log(baseUrl);
	return await axios(config);
};

const handleResetPassword = async (email) => {
  let config = {
    method: "post",
    url: baseUrl + "/customers/resetPassword",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: { email },
  };

	return await axios(config);
};


const handleVerifyOTP = async (email, OTP) => {
  let config = {
    method: "post",
    url: baseUrl + "/customers/verifyOTP",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: { email, OTP },
  };

	return await axios(config);
};

const handleCommentAPI = async (newData) => {
	let data = JSON.stringify({
		"content": newData.content,
		"customer": {
			"_id": newData.customer_id
		},
		"post": {
			"_id": newData.post_id
		}
	});

	let config = {
		method: "post",
		url: baseUrl + "/comments",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		data: data,
	};
	console.log(data);
	return await axios(config);
};

const handleCreatePost = async (newData) => {
	let data = JSON.stringify({
		"title": newData.title,
		"content": newData.content,
		"avatar": {
			"_id": newData.image_id
		},
		"customer": {
			"_id": newData.customer_id
		}
	});

	let config = {
		method: "post",
		url: baseUrl + "/posts",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		data: data,
	};
	// console.log(data);
	return await axios(config);
};

const handleChangePasswordAPI = async (email, password, newPassword) => {
  let config = {
    method: "post",
    url: baseUrl + "/customers/changePassword",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: { email, password, newPassword },
  };

  return await axios(config);
};

const handleChangeInfoAPI = async (newData) => {
  const isAuth = () => {
    if (localStorage.getItem("user-info")) {
      return JSON.parse(localStorage.getItem("user-info"));
    } else {
      return false;
    }
  };
  const id = isAuth() ? isAuth().id : "";
  let gender = newData.gender ? "Male" : "Female";
  let data = JSON.stringify({
    username: newData.username,
    email: newData.email,
    gender: gender,
    dateOfBirth: newData.dateOfBirth,
    phoneNumber: newData.phoneNumber,
  });

  let config = {
    method: "put",
    url: baseUrl + "/customers/" + id,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: data,
  };

  return await axios(config);
};

const handleUpdatePasswordAPI = async (id, password) => {
  let config = {
    method: "put",
    url: baseUrl + "/customers/" + id,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: { password },
  };
  return await axios(config);
};

export {
  handleSignInAPI,
  handleSignUpAPI,
  handleResetPassword,
  handleVerifyOTP,
  handleCommentAPI,
  handleCreatePost,
  handleChangePasswordAPI,
  handleChangeInfoAPI,
  handleUpdatePasswordAPI,
};
